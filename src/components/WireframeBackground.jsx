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

    // Direct, Lightweight Physics Easing
    let currentScroll = window.scrollY;
    let targetScroll = window.scrollY;

    const handleScroll = () => {
      targetScroll = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // Direct Mouse Tilt Easing
    let rotX = 0.65;
    let rotY = -0.3;
    let targetRotX = 0.65;
    let targetRotY = -0.3;

    const handleMouseMove = (e) => {
      targetRotX = 0.65 + (e.clientY - height / 2) * 0.0006;
      targetRotY = -0.3 + (e.clientX - width / 2) * 0.0006;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Sun Pulsing Phase
    let sunPulseAngle = 0;

    // Ambient Cosmic Stardust Particles (Lightweight 30 particles)
    const stardustCount = 30;
    const stardust = [];
    for (let i = 0; i < stardustCount; i++) {
      stardust.push({
        x: (Math.random() - 0.5) * width * 1.2,
        y: (Math.random() - 0.5) * height * 1.2,
        z: Math.random() * 300 - 150,
        size: Math.random() * 1.2 + 0.5,
        alpha: Math.random() * 0.35 + 0.1
      });
    }

    // Pre-compute 3D Sphere Wireframe Vertices ONCE
    const createSphereGeom = (radius, latCount = 5, lonCount = 7) => {
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

    // Pre-computed Celestial Bodies
    const sunGeom = createSphereGeom(24, 5, 7);
    const jupiterGeom = createSphereGeom(14, 4, 6);
    const saturnGeom = createSphereGeom(12, 4, 6);
    const uranusGeom = createSphereGeom(10, 4, 6);
    const neptuneGeom = createSphereGeom(9, 4, 6);
    const earthGeom = createSphereGeom(9, 4, 6);
    const venusGeom = createSphereGeom(8, 4, 6);
    const marsGeom = createSphereGeom(7, 4, 6);
    const mercuryGeom = createSphereGeom(5, 4, 6);

    const planetList = [
      { geom: mercuryGeom, dist: 50,  speed: 0.025,  angle: 0 },
      { geom: venusGeom,   dist: 78,  speed: 0.016,  angle: 1.1 },
      { geom: earthGeom,   dist: 112, speed: 0.012,  angle: 2.3, hasMoon: true },
      { geom: marsGeom,    dist: 148, speed: 0.008,  angle: 3.6 },
      { geom: jupiterGeom, dist: 195, speed: 0.005,  angle: 4.8 },
      { geom: saturnGeom,  dist: 245, speed: 0.003,  angle: 0.7, hasRings: true },
      { geom: uranusGeom,  dist: 290, speed: 0.002,  angle: 2.1 },
      { geom: neptuneGeom, dist: 330, speed: 0.0012, angle: 5.2 }
    ];

    // Perspective 3D Projection Engine
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

    let stardustRot = 0;

    const animate = () => {
      // Smooth Scroll Interpolation
      currentScroll += (targetScroll - currentScroll) * 0.08;

      // Extended Fade Range (fades out later over 1.25x viewport height)
      const maxScrollDist = Math.max(1, height * 1.25);
      const scrollRatio = Math.min(currentScroll / maxScrollDist, 1.0);
      const fadeOpacity = Math.max(0, 1.0 - scrollRatio);

      // STRICT SCROLL CULLING: When scrolled past fade distance, clear canvas & stop processing to save 100% CPU!
      if (fadeOpacity <= 0.01) {
        ctx.clearRect(0, 0, width, height);
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      rotX += (targetRotX - rotX) * 0.04;
      rotY += (targetRotY - rotY) * 0.04 + 0.001;
      sunPulseAngle += 0.03;

      const sunPulseScale = 1 + Math.sin(sunPulseAngle) * 0.05;

      // CAPPED ZOOM SCALE (Max 1.8x)
      const zoomFactor = 1.0 + scrollRatio * 2;

      const rightColumnX = width > 768 ? width * 0.78 : width * 0.72;
      const systemCenter = {
        x: rightColumnX,
        y: height * 0.45
      };

      // --- 1. Ambient Stardust ---
      stardustRot += 0.0006;
      const cosR = Math.cos(stardustRot);
      const sinR = Math.sin(stardustRot);

      stardust.forEach((star) => {
        const rxStar = star.x * cosR - star.z * sinR;
        const rzStar = star.x * sinR + star.z * cosR;

        const pStar = project3D({ x: rxStar, y: star.y, z: rzStar }, rotX * 0.3, rotY * 0.3, systemCenter);
        if (pStar.scale > 0) {
          ctx.beginPath();
          ctx.arc(pStar.x, pStar.y, star.size * pStar.scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha * fadeOpacity * 0.5})`;
          ctx.fill();
        }
      });

      // --- 2. Central Sun Radial Corona Halo ---
      const sunCenterProj = project3D({ x: 0, y: 0, z: 0 }, rotX, rotY, systemCenter);
      const sunRadius = 26 * zoomFactor * sunPulseScale * sunCenterProj.scale;

      const haloGrad = ctx.createRadialGradient(
        sunCenterProj.x, sunCenterProj.y, sunRadius * 0.2,
        sunCenterProj.x, sunCenterProj.y, sunRadius * 2.0
      );
      haloGrad.addColorStop(0, `rgba(255, 255, 255, ${0.35 * fadeOpacity})`);
      haloGrad.addColorStop(0.5, `rgba(255, 255, 255, ${0.08 * fadeOpacity})`);
      haloGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.beginPath();
      ctx.arc(sunCenterProj.x, sunCenterProj.y, sunRadius * 2.0, 0, Math.PI * 2);
      ctx.fillStyle = haloGrad;
      ctx.fill();

      // Draw Central Sun 3D Wireframe
      drawWireframeGeomAt3DPos(sunGeom, { x: 0, y: 0, z: 0 }, rotX, rotY, systemCenter, zoomFactor * sunPulseScale, fadeOpacity);

      // --- 3. Orbit Track Rings & Planets ---
      planetList.forEach((p) => {
        p.angle += p.speed;

        const orbitR = p.dist * zoomFactor;

        // Draw Distinct 3D Orbit Ring (Optimized 40 segments)
        ctx.beginPath();
        const numSegs = 40;
        for (let i = 0; i <= numSegs; i++) {
          const th = (i / numSegs) * Math.PI * 2;
          const pt = project3D({ x: Math.cos(th) * orbitR, y: 0, z: Math.sin(th) * orbitR }, rotX, rotY, systemCenter);
          if (i === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.35 * fadeOpacity})`;
        ctx.lineWidth = 1.1;
        ctx.setLineDash([3, 3]);
        ctx.stroke();
        ctx.setLineDash([]);

        // 3D Planet Position
        const planet3DPos = {
          x: Math.cos(p.angle) * orbitR,
          y: 0,
          z: Math.sin(p.angle) * orbitR
        };

        // Draw Planet Wireframe Sphere
        drawWireframeGeomAt3DPos(p.geom, planet3DPos, rotX, rotY, systemCenter, zoomFactor, fadeOpacity * 0.85);

        // Draw Saturn's 3D Rings
        if (p.hasRings) {
          ctx.beginPath();
          const ringR = 24 * zoomFactor;
          for (let i = 0; i <= 20; i++) {
            const th = (i / 20) * Math.PI * 2;
            const rPt = project3D({
              x: planet3DPos.x + Math.cos(th) * ringR,
              y: planet3DPos.y + Math.sin(th) * ringR * 0.2,
              z: planet3DPos.z + Math.sin(th) * ringR * 0.8
            }, rotX, rotY, systemCenter);

            if (i === 0) ctx.moveTo(rPt.x, rPt.y);
            else ctx.lineTo(rPt.x, rPt.y);
          }
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.55 * fadeOpacity})`;
          ctx.lineWidth = 1.1;
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
          }, rotX, rotY, systemCenter);

          ctx.beginPath();
          ctx.arc(mPt.x, mPt.y, 2.2 * mPt.scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${0.85 * fadeOpacity})`;
          ctx.fill();
        }
      });

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
