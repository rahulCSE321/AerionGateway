import React, { useEffect, useRef } from 'react';

const NetworkBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        let particles = [];
        const particleCount = 60; // Slightly reduced for cleaner look
        const connectionDistance = 150;
        const mouseDistance = 200;

        let mouse = { x: null, y: null };

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5; // Slower movement
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse interaction
                // if (mouse.x != null) {
                //     let dx = mouse.x - this.x;
                //     let dy = mouse.y - this.y;
                //     let distance = Math.sqrt(dx * dx + dy * dy);
                //     if (distance < mouseDistance) {
                //         const forceDirectionX = dx / distance;
                //         const forceDirectionY = dy / distance;
                //         const force = (mouseDistance - distance) / mouseDistance;
                //         const directionX = forceDirectionX * force * 0.05;
                //         const directionY = forceDirectionY * force * 0.05;
                //         this.vx += directionX;
                //         this.vy += directionY;
                //     }
                // }
            }

            draw() {
                ctx.fillStyle = 'rgba(6, 182, 212, 0.5)'; // Cyan-500 with opacity
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function init() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);

            // Gradient Background
            const gradient = ctx.createLinearGradient(0, 0, width, height);
            gradient.addColorStop(0, '#0f172a'); // Slate-900
            gradient.addColorStop(1, '#1e293b'); // Slate-800
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                // Connect particles
                for (let j = i; j < particles.length; j++) {
                    let dx = particles[i].x - particles[j].x;
                    let dy = particles[i].y - particles[j].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(6, 182, 212, ${1 - distance / connectionDistance})`; // Cyan connecting lines
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animate);
        }

        function handleResize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            init();
        }

        /* 
        function handleMouseMove(e) {
             const rect = canvas.getBoundingClientRect();
             mouse.x = e.clientX - rect.left;
             mouse.y = e.clientY - rect.top;
         }
         
         function handleMouseLeave() {
             mouse.x = null;
             mouse.y = null;
         }
         */

        init();
        animate();

        window.addEventListener('resize', handleResize);
        // canvas.addEventListener('mousemove', handleMouseMove);
        // canvas.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('resize', handleResize);
            // canvas.removeEventListener('mousemove', handleMouseMove);
            // canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
        />
    );
};

export default NetworkBackground;
