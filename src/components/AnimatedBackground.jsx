import { useCallback, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import ThemeContext from "../contexts/ThemeContext";

const darkGradient = [
  { stop: "0.1", color: "#ff5c33" },
  { stop: "0.2", color: "#ff66b3" },
  { stop: "0.4", color: "#ccccff" },
  { stop: "0.6", color: "#b3ffff" },
  { stop: "0.8", color: "#80ff80" },
  { stop: "0.9", color: "#ffff33" },
];

const brightGradient = [
  { stop: "0.1", color: "#f132b8" },
  { stop: "0.2", color: "#2bff00" },
  { stop: "0.4", color: "#2d2df5" },
  { stop: "0.6", color: "#1d04f8" },
  { stop: "0.8", color: "#fc10b5" },
  { stop: "0.9", color: "#ff0909" },
];

const AnimatedBackgroundStyled = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const AnimatedBackground = () => {
  const flowFieldAnimiationRef = useRef(null);
  const observer = useRef(null);
  const canvasRef = useRef(null);
  const mouseRef = useRef({
    x: 0,
    y: 0,
  });

  const { theme } = useContext(ThemeContext);

  const handleMouseMove = useCallback(
    (e) => {
      mouseRef.current.x = e.x;
      mouseRef.current.y = e.y;
    },
    [mouseRef]
  );

  const colorGradient = theme === "dark" ? darkGradient : brightGradient;

  const initiateAnimation = useCallback(() => {
    if (!canvasRef.current) return;
    if (flowFieldAnimiationRef.current)
      cancelAnimationFrame(flowFieldAnimiationRef.current);

    class FlowFieldEffect {
      #ctx;
      #width;
      #height;
      constructor(ctx, width, height) {
        this.#ctx = ctx;
        this.#ctx.lineWidth = 0.5;
        this.#width = width;
        this.#height = height;
        this.lastTime = 0;
        // To unify animations frame for fast and slow machines, we use delta time, interval etc.
        this.interval = 1000 / 60; // 60 frames per secound
        this.timer = 0;
        this.cellSize = 16;
        this.#createGradient();
        this.#ctx.strokeStyle = this.gradient;
        this.radius = 0;
        this.vr = 0.02; // velocity of radius
      }

      // Private method -> #
      #drawLine(angle, x, y) {
        // Calculating distance from mouseRef
        let positionX = x;
        let positionY = y;
        let dx = mouseRef.current.x - positionX;
        let dy = mouseRef.current.y - positionY;
        // let distance = Math.sqrt(dx * dx + dy * dy); -> srqt is very expensive, we can skip it
        let distance = dx * dx + dy * dy;
        if (distance > 500000) {
          distance = 500000;
        } else if (distance < 50000) {
          distance = 50000;
        }
        // Multplication is more efficient than dividing
        const length = distance * 0.000075;
        this.#ctx.beginPath();
        this.#ctx.moveTo(x, y);
        // Change line length by multiplying angle value
        this.#ctx.lineTo(
          x + Math.cos(angle) * length,
          y + Math.sin(angle) * length
        );
        this.#ctx.stroke();
      }

      #createGradient() {
        this.gradient = this.#ctx.createLinearGradient(
          0,
          0,
          this.#width,
          this.#height
        );
        colorGradient.forEach((item) => {
          this.gradient.addColorStop(item.stop, item.color);
        });
      }

      // timeStamp here is a value that is returned from requestAnimationFrame
      animate(timeStamp) {
        const deltaTime = timeStamp - this.lastTime;
        this.lastTime = timeStamp;
        this.angle += 0.1;

        // Here we are using delta time to make sure animaton runs similiar on every machine
        if (this.timer > this.interval) {
          this.#ctx.clearRect(0, 0, this.#width, this.#height);

          //Update the rotate variables, reverses the effecct at some point
          this.radius += this.vr;
          if (this.radius > 8 || this.radius < -8) {
            this.vr *= -1;
          }
          // Map a vector field over screen view
          for (let y = 0; y < this.#height; y += this.cellSize) {
            for (let x = 0; x < this.#width; x += this.cellSize) {
              const angle =
                (Math.cos(x * 0.015) + Math.sin(y * 0.015)) * this.radius;

              this.#drawLine(angle, x, y);
            }
          }

          this.timer = 0;
        } else {
          this.timer += deltaTime;
        }

        // After first loop js forgets what .this is, so we need to "bind" it for next loops
        flowFieldAnimiationRef.current = requestAnimationFrame(
          this.animate.bind(this)
        );
      }
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = canvasRef.current.parentNode.clientWidth;
    canvas.height = canvasRef.current.parentNode.clientHeight;

    const flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
    flowField.animate(0);
  }, [colorGradient]);

  useEffect(() => {
    initiateAnimation();

    if (canvasRef.current) {
      observer.current = new ResizeObserver(initiateAnimation).observe(
        canvasRef.current.parentNode
      );

      return () => {
        if (observer.current) return observer.current.disconnect();
      };
    }
  }, [initiateAnimation]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return <AnimatedBackgroundStyled ref={canvasRef} />;
};

export default AnimatedBackground;
