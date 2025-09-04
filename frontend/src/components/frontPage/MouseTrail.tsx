"use client";
import { hexToRgb } from "@/utils/hexToRgb";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  alpha: number;
  color: string;
}

const colors = ["#a52c55", "#f8bbd0", "#b7476e", "#ffcdde"];

const MouseTrail = () => {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      particles.current.push({
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 3 + 2,
        alpha: 0.2, 
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      if (!ctx) return;

      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.09)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      particles.current.forEach((p, i) => {
        p.alpha -= 0.019; // desaparece más rápido
        p.size *= 0.95;

        // Partículas difusas
        ctx.fillStyle = `rgba(${hexToRgb(p.color)},${p.alpha})`;
        ctx.shadowBlur = 1;
        ctx.shadowColor = p.color;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.alpha <= 0.01 || p.size <= 0.5) particles.current.splice(i, 1);
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default MouseTrail;
