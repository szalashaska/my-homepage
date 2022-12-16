import React, { useEffect, useRef, useCallback, useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

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
  const observerRef = useRef(null);
  const canvasRef = useRef(null);
  const canvasRectRef = useRef(null);
  const mouseRef = useRef({
    x: -200,
    y: -200,
    radius: 20000,
  });

  const { theme } = useContext(ThemeContext);

  const colorTheme = theme === "dark" ? darkColor : brightColor;

  const handleMouseMove = useCallback(
    (e) => {
      if (window.innerWidth < 700) return;
      mouseRef.current.x = e.pageX - canvasRectRef.current.dx;
      mouseRef.current.y = e.pageY - canvasRectRef.current.dy;
    },
    [mouseRef]
  );

  const handleMouseLeave = () => {
    mouseRef.current.x = -200;
    mouseRef.current.y = -200;
  };

  const initiateAnimation = useCallback(() => {
    if (!canvasRef.current) return;
    if (animationRef.current) cancelAnimationFrame(animationRef.current);

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

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });

    // Do not draw on the canvas for small screens
    if (window.innerWidth < 700) return;

    canvas.width = canvasRef.current.parentNode.clientWidth;
    canvas.height = canvasRef.current.parentNode.clientHeight;
    const width = canvas.width;
    const height = canvas.height;

    // Responsive settings
    let fontSize;
    const gap = 10;
    let thresholdConnectionDistance;
    if (width < 350) {
      fontSize = "1em";
      thresholdConnectionDistance = 400;
    } else if (350 <= width && width < 600) {
      thresholdConnectionDistance = 500;
      fontSize = "4.5rem";
    } else {
      thresholdConnectionDistance = 700;
      fontSize = "7rem";
    }

    let particleArray = [];
    ctx.font = `bold ${fontSize} Verdana`;
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, width / 2, height / 2);

    // Scan for data with getImageData(coordiantes)
    const textCoords = ctx.getImageData(0, 0, width, height);
    // Area that we are scanning

    const init = () => {
      particleArray = [];
      // textCoords array is capped 30% from both sides, since there is no text there
      for (
        let y = Math.floor(textCoords.height * 0.3),
          y2 = Math.floor(textCoords.height * 0.7);
        y < y2;
        y += gap
      ) {
        for (let x = 0, x2 = textCoords.width; x < x2; x += gap) {
          // Opacity of element is more than 50% (256 / 2 = 128)
          if (textCoords.data[y * 4 * textCoords.width + x * 4 + 3] > 128) {
            let positionX = x;
            let positionY = y;
            particleArray.push(new Particle(positionX, positionY));
          }
        }
      }
    };

    const connect = () => {
      let oppacityValue = 1;
      for (let a = 0; a < particleArray.length; a++) {
        for (let b = a; b < particleArray.length; b++) {
          // calculate distance between every particle in array, a = b to prevent unnecessary calculation
          let dx = particleArray[a].x - particleArray[b].x;
          let dy = particleArray[a].y - particleArray[b].y;
          let distance = dx * dx + dy * dy;

          if (distance < thresholdConnectionDistance) {
            // Connect particles
            oppacityValue = 1 - distance / thresholdConnectionDistance;
            ctx.strokeStyle = `rgba(${colorTheme[0]}, ${colorTheme[1]}, ${colorTheme[2]}, ${oppacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particleArray[a].x, particleArray[a].y);
            ctx.lineTo(particleArray[b].x, particleArray[b].y);
            ctx.stroke();
          }
        }
      }
    };
    const animate = () => {
      // Clear canvas before each animation
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].draw();
        particleArray[i].update();
      }
      connect();
      animationRef.current = requestAnimationFrame(animate);
    };

    init();
    animate();
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
    initiateAnimation();

    if (canvasRef.current) {
      // let observer;
      observerRef.current = new ResizeObserver(initiateAnimation).observe(
        canvasRef.current.parentNode
      );

      return () => {
        // Delete observer and cancel animiation
        if (observerRef.current) observerRef.current.disconnect();
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
      };
    }
  }, [initiateAnimation]);

  return (
    <Wrapper>
      <AnimatedTextStyled
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
    </Wrapper>
  );
};

export default AnimatedText;
