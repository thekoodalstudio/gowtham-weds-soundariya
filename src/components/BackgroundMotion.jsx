import React, { useEffect, useRef } from 'react';

/**
 * High-performance Motion Background
 * Generates:
 * 1. Gentle falling 3D rose petals with realistic flutter and breeze
 * 2. Ascending golden fairy dust / sparkle particles
 * 3. Warm ambient bokeh diya light glows
 */
export default function BackgroundMotion() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Rose Petal Class
    class Petal {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : -30;
        this.size = Math.random() * 14 + 10;
        this.speedY = Math.random() * 1.2 + 0.6;
        this.speedX = Math.random() * 0.8 - 0.4;
        this.angle = Math.random() * 360;
        this.spinSpeed = (Math.random() - 0.5) * 1.8;
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.03 + 0.01;
        this.opacity = Math.random() * 0.4 + 0.5;
        this.colorIndex = Math.floor(Math.random() * 3);
      }

      update() {
        this.y += this.speedY;
        this.wobble += this.wobbleSpeed;
        this.x += this.speedX + Math.sin(this.wobble) * 0.6;
        this.angle += this.spinSpeed;

        if (this.y > height + 30 || this.x < -30 || this.x > width + 30) {
          this.reset(false);
        }
      }

      draw(context) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate((this.angle * Math.PI) / 180);
        context.globalAlpha = this.opacity;

        // Gradient for petal
        const grad = context.createRadialGradient(0, 0, 1, 0, 0, this.size);
        if (this.colorIndex === 0) {
          grad.addColorStop(0, '#f9c5cd');
          grad.addColorStop(0.7, '#e27284');
          grad.addColorStop(1, '#9b1e32');
        } else if (this.colorIndex === 1) {
          grad.addColorStop(0, '#ffd8df');
          grad.addColorStop(0.8, '#f08fa0');
          grad.addColorStop(1, '#ad2a3f');
        } else {
          grad.addColorStop(0, '#fae1e5');
          grad.addColorStop(0.8, '#d45b70');
          grad.addColorStop(1, '#781525');
        }

        context.fillStyle = grad;
        context.beginPath();
        // Delicate teardrop rose petal shape
        context.moveTo(0, -this.size * 0.8);
        context.bezierCurveTo(
          this.size * 0.6,
          -this.size * 0.6,
          this.size * 0.7,
          this.size * 0.6,
          0,
          this.size
        );
        context.bezierCurveTo(
          -this.size * 0.7,
          this.size * 0.6,
          -this.size * 0.6,
          -this.size * 0.6,
          0,
          -this.size * 0.8
        );
        context.fill();
        context.restore();
      }
    }

    // Golden Sparkle Particle Class
    class Sparkle {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : height + 10;
        this.size = Math.random() * 2.5 + 1;
        this.speedY = Math.random() * 0.8 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.7 + 0.3;
        this.fadeSpeed = Math.random() * 0.015 + 0.005;
        this.fadeDirection = 1;
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX;

        this.opacity += this.fadeSpeed * this.fadeDirection;
        if (this.opacity >= 0.9) this.fadeDirection = -1;
        if (this.opacity <= 0.15) this.fadeDirection = 1;

        if (this.y < -10) {
          this.reset(false);
        }
      }

      draw(context) {
        context.save();
        context.globalAlpha = Math.max(0, Math.min(1, this.opacity));
        context.fillStyle = '#ffdf88';
        context.shadowColor = '#d4a656';
        context.shadowBlur = 6;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }
    }

    // Number of particles based on screen size
    const petalCount = width < 600 ? 22 : 36;
    const sparkleCount = width < 600 ? 28 : 45;

    const petals = Array.from({ length: petalCount }, () => new Petal());
    const sparkles = Array.from({ length: sparkleCount }, () => new Sparkle());

    let isRunning = true;

    const render = () => {
      if (!isRunning) return;
      ctx.clearRect(0, 0, width, height);

      // Render sparkles
      for (let i = 0; i < sparkles.length; i++) {
        sparkles[i].update();
        sparkles[i].draw(ctx);
      }

      // Render petals
      for (let i = 0; i < petals.length; i++) {
        petals[i].update();
        petals[i].draw(ctx);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Pause when document is hidden to conserve battery & CPU
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        cancelAnimationFrame(animationFrameId);
      } else {
        if (!isRunning) {
          isRunning = true;
          render();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" aria-hidden="true" />;
}
