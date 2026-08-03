import React, { useEffect } from 'react';
import gsap from 'gsap';

export default function GSAPEffects() {
  useEffect(() => {
    // 1. GSAP Magnetic Buttons & Interactive Elements Effect
    const magneticElements = document.querySelectorAll('.gsap-magnetic');

    const handleMouseMove = (e) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * 0.35;
      const deltaY = (e.clientY - centerY) * 0.35;

      gsap.to(el, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = (e) => {
      const el = e.currentTarget;
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.4)'
      });
    };

    magneticElements.forEach((el) => {
      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // 2. GSAP 3D Interactive Card Tilt Physics
    const tiltCards = document.querySelectorAll('.gsap-tilt');

    const handleCardTilt = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotX = ((y - rect.height / 2) / (rect.height / 2)) * -8;
      const rotY = ((x - rect.width / 2) / (rect.width / 2)) * 8;

      gsap.to(card, {
        rotationX: rotX,
        rotationY: rotY,
        transformPerspective: 1000,
        scale: 1.02,
        duration: 0.4,
        ease: 'power1.out'
      });
    };

    const handleCardReset = (e) => {
      const card = e.currentTarget;
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out'
      });
    };

    tiltCards.forEach((card) => {
      card.addEventListener('mousemove', handleCardTilt);
      card.addEventListener('mouseleave', handleCardReset);
    });

    // Cleanup listeners
    return () => {
      magneticElements.forEach((el) => {
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });

      tiltCards.forEach((card) => {
        card.removeEventListener('mousemove', handleCardTilt);
        card.removeEventListener('mouseleave', handleCardReset);
      });
    };
  }, []);

  return null;
}
