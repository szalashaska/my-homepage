import React, { useEffect, useRef, useCallback, useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { debounce } from "../helpers/utils";
import styled from "styled-components";

const darkColor = [255, 255, 255];
const brightColor = [0, 0, 0];

const Wrapper = styled.div`
  position: relative;
  display: none;
  @media screen and (min-width: 700px) {
    display: block;
    width: 100%;
    min-height: 30rem;
    font-size: 7rem;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 101;
      background: linear-gradient(
          to bottom,
          var(--bg-clr),
          transparent 25% 75%,
          var(--bg-clr)
        ),
        linear-gradient(
          to right,
          var(--bg-clr),
          transparent 15% 85%,
          var(--bg-clr)
        );
    }
  }
`;

const AnimatedTextStyled = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

const AnimatedText = ({ text }) => {
  const animationRef = useRef(null);
  const canvasRef = useRef(null);
  const canvasRectRef = useRef(null);
  const mouseRef = useRef({
    x: -200,
    y: -200,
    radius: 20000,
  });

  const { theme } = useContext(ThemeContext);

  const colorTheme = theme === "dark" ? darkColor : brightColor;

  const handleMouseMove = (e) => {
    if (window.innerWidth < 700) return;
    mouseRef.current.x = e.pageX - canvasRectRef.current.dx;
    mouseRef.current.y = e.pageY - canvasRectRef.current.dy;
  };

  const handleMouseLeave = () => {
    mouseRef.current.x = -200;
    mouseRef.current.y = -200;
  };

  const initiateAnimation = useCallback(() => {
    if (!canvasRef.current) return;
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    // Do not draw on the canvas for small screens
    if (window.innerWidth < 700) return;

    class Particle {
      constructor(x, y) {
        this.x = Math.random() * x;
        this.y = Math.random() * y;
        this.size = 3;
        // Starting position of particles
        this.baseX = x;
        this.baseY = y;
        // Changing density increases the particles speed
        this.density = Math.random() * 40 + 5;
      }

      draw() {
        ctx.fillStyle = `rgb(${colorTheme[0]}, ${colorTheme[1]}, ${colorTheme[2]}`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        let dx = mouseRef.current.x - this.x;
        let dy = mouseRef.current.y - this.y;
        let distance = dx * dx + dy * dy;
        // Increesed force - avoiding sqroot
        let forceDirectionX = (dx * 30) / distance;
        let forceDirectionY = (dy * 30) / distance;
        let maxDistance = mouseRef.current.radius;
        // Calculates % of force depending on its distance from mouse
        let force = (maxDistance - distance) / maxDistance;
        // this.density: different particles will have different mass and move with different speed
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;
        let returnSpeed = 25;

        if (distance < mouseRef.current.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          // X and Y cases done seperatly, they don't exclude each other
          if (this.x !== this.baseX) {
            dx = this.x - this.baseX;
            // Dividing make particle goes slower
            this.x -= dx / returnSpeed;
          }
          if (this.y !== this.baseY) {
            dy = this.y - this.baseY;
            // Dividing make particle goes slower
            this.y -= dy / returnSpeed;
          }
        }
      }
    }

    class ParticleEffect {
      constructor(ctx, width, height, canvasWidth, canvasHeight) {
        this.ctx = ctx;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.gap = 10;
        this.particleArray = [];

        // Responsive settings
        if (width < 350) {
          this.fontSize = "1em";
          this.thresholdConnectionDistance = 400;
        } else if (350 <= width && width < 600) {
          this.thresholdConnectionDistance = 500;
          this.fontSize = "4.5rem";
        } else {
          this.thresholdConnectionDistance = 700;
          this.fontSize = "7rem";
        }

        this.ctx.font = `bold ${this.fontSize} Verdana`;
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillText(text, width / 2, height / 2);

        // Scan for data with getImageData(coordiantes)
        this.textCoords = this.ctx.getImageData(0, 0, width, height);
        this.init();
      }

      init() {
        this.particleArray = [];
        // textCoords array is capped 30% from both sides, since there is no text there
        for (
          let y = Math.floor(this.textCoords.height * 0.3),
            y2 = Math.floor(this.textCoords.height * 0.7);
          y < y2;
          y += this.gap
        ) {
          for (let x = 0, x2 = this.textCoords.width; x < x2; x += this.gap) {
            // Opacity of element is more than 50% (256 / 2 = 128)
            if (
              this.textCoords.data[y * 4 * this.textCoords.width + x * 4 + 3] >
              128
            ) {
              let positionX = x;
              let positionY = y;
              this.particleArray.push(new Particle(positionX, positionY));
            }
          }
        }
      }

      connect() {
        let oppacityValue;
        for (let a = 0; a < this.particleArray.length; a++) {
          for (let b = a; b < this.particleArray.length; b++) {
            // calculate distance between every particle in array, a = b to prevent unnecessary calculation
            let dx = this.particleArray[a].x - this.particleArray[b].x;
            let dy = this.particleArray[a].y - this.particleArray[b].y;
            let distance = dx * dx + dy * dy;

            if (distance < this.thresholdConnectionDistance) {
              // Connect particles
              oppacityValue = 1 - distance / this.thresholdConnectionDistance;
              this.ctx.strokeStyle = `rgba(${colorTheme[0]}, ${colorTheme[1]}, ${colorTheme[2]}, ${oppacityValue})`;
              this.ctx.lineWidth = 1;
              this.ctx.beginPath();
              this.ctx.moveTo(this.particleArray[a].x, this.particleArray[a].y);
              this.ctx.lineTo(this.particleArray[b].x, this.particleArray[b].y);
              this.ctx.stroke();
            }
          }
        }
      }

      animate() {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        for (let i = 0; i < this.particleArray.length; i++) {
          this.particleArray[i].draw();
          this.particleArray[i].update();
        }
        this.connect();
        animationRef.current = requestAnimationFrame(this.animate.bind(this));
      }
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });

    canvas.width = canvasRef.current.parentNode.clientWidth;
    canvas.height = canvasRef.current.parentNode.clientHeight;
    const width = canvas.width;
    const height = canvas.height;

    const particles = new ParticleEffect(
      ctx,
      width,
      height,
      canvas.width,
      canvas.height
    );

    particles.animate();
    updateCanvasCoordinates();
  }, [text, colorTheme]);

  const updateCanvasCoordinates = () => {
    // Updates Canvas coordinates, allows delay to scroll and zoom image
    const boundingRect = canvasRef.current.getBoundingClientRect();
    let x;
    let y;
    // Image was not scorlled Y direction
    if (window.pageYOffset === 0) {
      y = boundingRect.top;
      // If Image was scrolled down
    } else {
      y = boundingRect.top + Math.round(window.pageYOffset);
    }
    // Image was not scorlled X direction
    if (window.pageXOffset === 0) {
      x = boundingRect.left;
      // If Image was scrolled aside
    } else {
      x = boundingRect.left + Math.round(window.pageXOffset);
    }

    canvasRectRef.current = { dx: x, dy: y };
  };

  useEffect(() => {
    let observer;
    if (canvasRef.current) {
      observer = new ResizeObserver(debounce(initiateAnimation, 150)).observe(
        canvasRef.current.parentNode
      );

      return () => {
        // Delete observer and cancel animiation
        if (observer) observer.disconnect();
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
      };
    }
  }, [initiateAnimation]);

  return (
    <Wrapper onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <AnimatedTextStyled ref={canvasRef} />
    </Wrapper>
  );
};

export default AnimatedText;
