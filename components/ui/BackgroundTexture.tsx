"use client";
import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const BackgroundTexture = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring config for that premium Framer feel
    const springConfig = { damping: 30, stiffness: 80, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Map mouse position to subtle skew and translation
    // creating a parallax/perspective distortion effect
    const skewX = useTransform(springX, [0, 2000], [-3, 3]);
    const skewY = useTransform(springY, [0, 1000], [-1, 1]);
    const translateX = useTransform(springX, [0, 2000], [-15, 15]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <motion.svg
                className="absolute inset-[-10%] w-[120%] h-[120%] origin-center"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                style={{ 
                    skewX, 
                    skewY,
                    x: translateX
                }}
            >
                <defs>
                    <pattern id="lines-hero" x="0" y="0" width="10" height="1" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="0" y2="10000" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#lines-hero)" />
            </motion.svg>
        </div>
    );
};