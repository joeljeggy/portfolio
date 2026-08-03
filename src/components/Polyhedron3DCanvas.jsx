import React, { useEffect, useRef } from 'react';

export default function Polyhedron3DCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;

    // Mouse / Touch Rotation Physics
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      isDragging: false
    };

    const handleMouseMove = (e) => {
      const cRect = canvas.getBoundingClientRect();
      const mx = (e.clientX - cRect.left) - width / 2;
      const my = (e.clientY - cRect.top) - height / 2;
      mouse.targetX = (my / height) * Math.PI;
      mouse.targetY = (mx / width) * Math.PI;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const cRect = canvas.getBoundingClientRect();
        const mx = (e.touches[0].clientX - cRect.left) - width / 2;
        const my = (e.touches[0].clientY - cRect.top) - height / 2;
        mouse.targetX = (my / height) * Math.PI;
        mouse.targetY = (mx / width) * Math.PI;
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove);

    // 3D Icosahedron Vertices
    const phi = (1 + Math.sqrt(5)) / 2;
    const size = Math.min(width, height) * 0.24;

    const icosahedronVertices = [
      [-1,  phi, 0], [ 1,  phi, 0], [-1, -phi, 0], [ 1, -phi, 0],
      [ 0, -1,  phi], [ 0,  1,  phi], [ 0, -1, -phi], [ 0,  1, -phi],
      [ phi, 0, -1], [ phi, 0,  1], [-phi, 0, -1], [-phi, 0,  1]
    ].map(([x, y, z]) => {
      const len = Math.sqrt(x*x + y*y + z*z);
      return { x: (x / len) * size, y: (y / len) * size, z: (z / len) * size };
    });

    // 3D Icosahedron Edges
    const icosahedronEdges = [];
    for (let i = 0; i < icosahedronVertices.length; i++) {
      for (let j = i + 1; j < icosahedronVertices.length; j++) {
        const d = Math.hypot(
          icosahedronVertices[i].x - icosahedronVertices[j].x,
          icosahedronVertices[i].y - icosahedronVertices[j].y,
          icosahedronVertices[i].z - icosahedronVertices[j].z
        );
        if (d < size * 1.25) {
          icosahedronEdges.push([i, j]);
        }
      }
    }

    // Secondary Inner Octahedron
    const octahedronVertices = [
      [1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]
    ].map(([x, y, z]) => ({ x: x * size * 0.45, y: y * size * 0.45, z: z * size * 0.45 }));

    const octahedronEdges = [
      [0, 2], [0, 3], [0, 4], [0, 5],
      [1, 2], [1, 3], [1, 4], [1, 5],
      [2, 4], [4, 3], [3, 5], [5, 2]
    ];

    let rotX = 0;
    let rotY = 0;
    let ringAngle = 0;

    const project3D = (point, rx, ry) => {
      // Rotate Y
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const x1 = point.x * cosY + point.z * sinY;
      const z1 = -point.x * sinY + point.z * cosY;

      // Rotate X
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const y2 = point.y * cosX - z1 * sinX;
      const z2 = point.y * sinX + z1 * cosX;

      // Perspective Projection
      const fov = 400;
      const scale = fov / (fov + z2 + 250);

      return {
        x: width / 2 + x1 * scale,
        y: height / 2 + y2 * scale,
        z: z2,
        scale
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse rotation easing
      rotX += (mouse.targetX - rotX) * 0.05 + 0.005;
      rotY += (mouse.targetY - rotY) * 0.05 + 0.008;
      ringAngle += 0.015;

      // 1. Draw 3D Orbital Circles (Gyroscopes)
      const ringRadii = [size * 1.4, size * 1.7, size * 2.0];
      const ringTilts = [0.4, -0.6, 0.8];

      ringRadii.forEach((r, idx) => {
        const tilt = ringTilts[idx];
        const numPts = 60;
        ctx.beginPath();

        for (let i = 0; i <= numPts; i++) {
          const theta = (i / numPts) * Math.PI * 2 + ringAngle * (idx % 2 === 0 ? 1 : -1);
          const px = Math.cos(theta) * r;
          const py = Math.sin(theta) * r * Math.cos(tilt);
          const pz = Math.sin(theta) * r * Math.sin(tilt);

          const projected = project3D({ x: px, y: py, z: pz }, rotX * 0.5, rotY * 0.5);

          if (i === 0) ctx.moveTo(projected.x, projected.y);
          else ctx.lineTo(projected.x, projected.y);
        }

        ctx.strokeStyle = idx === 0 ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = idx === 0 ? 1.5 : 1;
        ctx.setLineDash(idx === 1 ? [4, 6] : []);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // 2. Draw Outer Icosahedron Edges & Nodes
      const projIco = icosahedronVertices.map((v) => project3D(v, rotX, rotY));

      // Draw Edges
      icosahedronEdges.forEach(([i, j]) => {
        const p1 = projIco[i];
        const p2 = projIco[j];
        const alpha = Math.max(0.1, Math.min(0.8, 1 - (p1.z + p2.z) / 400));

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.45})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      });

      // Draw Vertices
      projIco.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(2, 4 * p.scale), 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 3. Draw Inner Rotating Octahedron
      const projOct = octahedronVertices.map((v) => project3D(v, -rotX * 1.5, -rotY * 1.5));

      octahedronEdges.forEach(([i, j]) => {
        const p1 = projOct[i];
        const p2 = projOct[j];

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full h-80 sm:h-96 glass-panel rounded-xl border border-zinc-800 relative overflow-hidden flex items-center justify-center bg-zinc-950 cursor-pointer select-none">
      <div className="absolute top-3 left-4 text-[10px] font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1.5 z-10 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-white animate-ping" />
        <span>3D Wireframe Polyhedron & Orbital Circles — Move to Rotate</span>
      </div>
      <canvas ref={canvasRef} className="w-full h-full block touch-none" />
    </div>
  );
}
