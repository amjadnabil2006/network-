import React, { useEffect, useRef } from 'react';

export function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes for high-speed fiber constellation
    const particleCount = Math.min(Math.floor((width * height) / 18000), 55);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
    }> = [];

    const colors = ['#00F2FE', '#4FACFE', '#38BDF8', '#818CF8'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle fiber optic connection lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0) p1.x = width;
        else if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        else if (p1.y > height) p1.y = 0;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * 0.18;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 242, 254, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.globalAlpha = p1.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p1.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Obsidian Background with Dynamic Mesh Gradients */}
      <div className="absolute inset-0 bg-[#050811]" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px]" />
      <div className="absolute -bottom-40 left-1/3 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px]" />

      {/* Cyber Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#00F2FE 1px, transparent 1px), linear-gradient(90deg, #00F2FE 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Canvas for Live Fiber Nodes */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
