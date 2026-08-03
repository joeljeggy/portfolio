import React, { useEffect, useRef } from 'react';

export default function WireframeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Scroll Physics State
    let currentScroll = window.scrollY;
    let targetScroll = window.scrollY;

    const handleScroll = () => {
      targetScroll = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // Mouse Tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      mouse.targetX = (e.clientY - height / 2) * 0.0006;
      mouse.targetY = (e.clientX - width / 2) * 0.0006;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Pre-compute 3D Wireframe Sphere Geometries ONCE
    const createSphereGeom = (radius, latCount = 6, lonCount = 8) => {
      const verts = [];
      const edges = [];

      for (let i = 0; i <= latCount; i++) {
        const theta = (i * Math.PI) / latCount;
        const sinT = Math.sin(theta);
        const cosT = Math.cos(theta);

        for (let j = 0; j < lonCount; j++) {
          const phi = (j * 2 * Math.PI) / lonCount;
          verts.push({
            x: radius * sinT * Math.cos(phi),
            y: radius * cosT,
            z: radius * sinT * Math.sin(phi)
          });

          const currentIdx = i * lonCount + j;
          if (i > 0) {
            const aboveIdx = (i - 1) * lonCount + j;
            edges.push([currentIdx, aboveIdx]);
          }
          if (j > 0) {
            edges.push([currentIdx, currentIdx - 1]);
          } else {
            edges.push([currentIdx, i * lonCount + (lonCount - 1)]);
          }
        }
      }
      return { verts, edges };
    };

    // Pre-computed Celestial Body Geometries
    const sunGeom = createSphereGeom(24, 6, 8);
    const jupiterGeom = createSphereGeom(15, 5, 7);
    const saturnGeom = createSphereGeom(12, 5, 7);
    const uranusGeom = createSphereGeom(10, 4, 6);
    const neptuneGeom = createSphereGeom(9, 4, 6);
    const earthGeom = createSphereGeom(9, 4, 6);
    const venusGeom = createSphereGeom(8, 4, 6);
    const marsGeom = createSphereGeom(7, 4, 6);
    const mercuryGeom = createSphereGeom(5, 4, 6);

    // Ultra-calm, serene orbital speeds
    const planetList = [
      { geom: mercuryGeom, dist: 50,  speed: 0.003,   angle: 0 },
      { geom: venusGeom,   dist: 78,  speed: 0.002,   angle: 1.1 },
      { geom: earthGeom,   dist: 112, speed: 0.0015,  angle: 2.3, hasMoon: true },
      { geom: marsGeom,    dist: 148, speed: 0.001,   angle: 3.6 },
      { geom: jupiterGeom, dist: 195, speed: 0.0006,  angle: 4.8 },
      { geom: saturnGeom,  dist: 245, speed: 0.0004,  angle: 0.7, hasRings: true },
      { geom: uranusGeom,  dist: 290, speed: 0.00025, angle: 2.1 },
      { geom: neptuneGeom, dist: 330, speed: 0.00015, angle: 5.2 }
    ];

    let rotX = 0.65;
    let rotY = -0.3;

    const project3D = (point, rx, ry, centerOffset) => {
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const x1 = point.x * cosY + point.z * sinY;
      const z1 = -point.x * sinY + point.z * cosY;

      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const y2 = point.y * cosX - z1 * sinX;
      const z2 = point.y * sinX + z1 * cosX;

      const fov = 550;
      const scale = fov / (fov + z2 + 300);

      return {
        x: centerOffset.x + x1 * scale,
        y: centerOffset.y + y2 * scale,
        z: z2,
        scale
      };
    };

    const drawWireframeGeomAt3DPos = (geom, pos3D, rx, ry, center, scaleFactor = 1, alphaMultiplier = 1) => {
      const projected = geom.verts.map((v) => {
        const pt3D = {
          x: pos3D.x + v.x * scaleFactor,
          y: pos3D.y + v.y * scaleFactor,
          z: pos3D.z + v.z * scaleFactor
        };
        return project3D(pt3D, rx, ry, center);
      });

      geom.edges.forEach(([i, j]) => {
        const p1 = projected[i];
        const p2 = projected[j];
        if (!p1 || !p2) return;

        const a = Math.max(0.05, Math.min(0.65, 1 - (p1.z + p2.z) / 600)) * alphaMultiplier;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${a})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth scroll interpolation
      currentScroll += (targetScroll - currentScroll) * 0.08;

      // Ultra-serene Tilt Angles
      const rx = rotX + (mouse.targetX - rotX) * 0.03;
      const ry = rotY + (mouse.targetY - rotY) * 0.03 + 0.0002;

      // Synchronous Zoom & Fade-Out Physics
      const maxScrollDist = Math.max(1, height * 0.6);
      const scrollRatio = Math.min(currentScroll / maxScrollDist, 1.0);

      const zoomFactor = 1.0 + Math.pow(scrollRatio, 1.4) * 4.8;
      const fadeOpacity = Math.max(0, 1.0 - scrollRatio);

      if (fadeOpacity > 0.008) {
        // Positioned on the RIGHT SIDE
        const rightColumnX = width > 768 ? width * 0.78 : width * 0.72;
        const systemCenter = {
          x: rightColumnX,
          y: height * 0.45
        };

        // 1. Draw Central 3D Wireframe Sun at (0,0,0)
        drawWireframeGeomAt3DPos(sunGeom, { x: 0, y: 0, z: 0 }, rx, ry, systemCenter, zoomFactor, fadeOpacity);

        // 2. Draw Planetary Orbit Rings & Orbiting Planets
        planetList.forEach((p) => {
          p.angle += p.speed;

          const orbitR = p.dist * zoomFactor;

          // Draw Distinct, High-Contrast 3D Orbit Track Ring
          ctx.beginPath();
          const numSegs = 64;
          for (let i = 0; i <= numSegs; i++) {
            const th = (i / numSegs) * Math.PI * 2;
            const pt = project3D({ x: Math.cos(th) * orbitR, y: 0, z: Math.sin(th) * orbitR }, rx, ry, systemCenter);
            if (i === 0) ctx.moveTo(pt.x, pt.y);
            else ctx.lineTo(pt.x, pt.y);
          }
          // Increased opacity from 0.14 to 0.35 for clear visibility
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.35 * fadeOpacity})`;
          ctx.lineWidth = 1.2;
          ctx.setLineDash([3, 3]);
          ctx.stroke();
          ctx.setLineDash([]);

          // 3D Position of Planet EXACTLY ON THE ORBIT TRACK
          const planet3DPos = {
            x: Math.cos(p.angle) * orbitR,
            y: 0,
            z: Math.sin(p.angle) * orbitR
          };

          // Draw Planet Wireframe Sphere at exact 3D position on orbit
          drawWireframeGeomAt3DPos(p.geom, planet3DPos, rx, ry, systemCenter, zoomFactor, fadeOpacity * 0.85);

          // Draw Saturn's 3D Rings
          if (p.hasRings) {
            ctx.beginPath();
            const ringR = 24 * zoomFactor;
            for (let i = 0; i <= 24; i++) {
              const th = (i / 24) * Math.PI * 2;
              const rPt = project3D({
                x: planet3DPos.x + Math.cos(th) * ringR,
                y: planet3DPos.y + Math.sin(th) * ringR * 0.2,
                z: planet3DPos.z + Math.sin(th) * ringR * 0.8
              }, rx, ry, systemCenter);

              if (i === 0) ctx.moveTo(rPt.x, rPt.y);
              else ctx.lineTo(rPt.x, rPt.y);
            }
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.65 * fadeOpacity})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }

          // Draw Earth's Moon Node
          if (p.hasMoon) {
            const moonDist = 16 * zoomFactor;
            const moonAng = p.angle * 3.5;
            const mPt = project3D({
              x: planet3DPos.x + Math.cos(moonAng) * moonDist,
              y: planet3DPos.y,
              z: planet3DPos.z + Math.sin(moonAng) * moonDist
            }, rx, ry, systemCenter);

            ctx.beginPath();
            ctx.arc(mPt.x, mPt.y, 2.2 * mPt.scale, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${0.85 * fadeOpacity})`;
            ctx.fill();
          }
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-85"
    />
  );
}
