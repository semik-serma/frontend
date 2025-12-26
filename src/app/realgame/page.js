"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ShootingGame = () => {
  const canvasRef = useRef(null);
  const scoreRef = useRef(0);
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 600;

    const player = { x: 180, y: 550, width: 40, height: 40, dx: 0, dy: 0 };
    const bullets = [];
    const enemies = [];
    const explosions = [];
    const keys = {};

    const stars = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
    }));

    const enemyFrequency = 1000;
    let shootCooldown = 0;

    const spawnEnemy = () => {
      const x = Math.random() * (canvas.width - 40);
      const speed = Math.random() * 1.5 + 0.5;
      enemies.push({ x, y: 0, width: 40, height: 40, speed });
    };
    const enemyInterval = setInterval(spawnEnemy, enemyFrequency);

    const handleKeyDown = (e) => {
      keys[e.key.toLowerCase()] = true;
    };
    const handleKeyUp = (e) => {
      keys[e.key.toLowerCase()] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    const gameLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background stars
      ctx.fillStyle = "white";
      stars.forEach((star) => {
        star.y += 0.5;
        if (star.y > canvas.height) star.y = 0;
        ctx.fillRect(star.x, star.y, star.size, star.size);
      });

      // Player movement
      player.dx = 0;
      player.dy = 0;
      if (keys["arrowleft"] || keys["a"]) player.dx = -5;
      if (keys["arrowright"] || keys["d"]) player.dx = 5;
      if (keys["arrowup"] || keys["w"]) player.dy = -5;
      if (keys["arrowdown"] || keys["s"]) player.dy = 5;

      player.x += player.dx;
      player.y += player.dy;

      if (player.x < 0) player.x = 0;
      if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
      if (player.y < 0) player.y = 0;
      if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;

      // Shoot bullets
      if (keys[" "]) {
        if (shootCooldown <= 0) {
          bullets.push({ x: player.x + 18, y: player.y, width: 4, height: 15 });
          shootCooldown = 5;
        }
      }
      if (shootCooldown > 0) shootCooldown--;

      // Draw player
      const playerGradient = ctx.createLinearGradient(player.x, player.y, player.x + player.width, player.y + player.height);
      playerGradient.addColorStop(0, "#00f");
      playerGradient.addColorStop(1, "#0ff");
      ctx.fillStyle = playerGradient;
      ctx.fillRect(player.x, player.y, player.width, player.height);

      // Bullets
      bullets.forEach((b, i) => {
        b.y -= 8;
        ctx.fillStyle = "red";
        ctx.shadowColor = "orange";
        ctx.shadowBlur = 10;
        ctx.fillRect(b.x, b.y, b.width, b.height);
        ctx.shadowBlur = 0;
        if (b.y + b.height < 0) bullets.splice(i, 1);
      });

      // Enemies
      enemies.forEach((en, i) => {
        en.y += en.speed;
        const enemyGradient = ctx.createLinearGradient(en.x, en.y, en.x + en.width, en.y + en.height);
        enemyGradient.addColorStop(0, "#0f0");
        enemyGradient.addColorStop(1, "#0a0");
        ctx.fillStyle = enemyGradient;
        ctx.fillRect(en.x, en.y, en.width, en.height);

        bullets.forEach((b, j) => {
          if (
            b.x < en.x + en.width &&
            b.x + b.width > en.x &&
            b.y < en.y + en.height &&
            b.y + b.height > en.y
          ) {
            bullets.splice(j, 1);
            enemies.splice(i, 1);
            scoreRef.current += 1;
            setDisplayScore(scoreRef.current);
            explosions.push({ x: en.x + en.width / 2, y: en.y + en.height / 2, radius: 0, maxRadius: 15 });
          }
        });

        if (en.y + en.height > canvas.height) {
          alert("Game Over! Score: " + scoreRef.current);
          enemies.splice(i, 1);
          scoreRef.current = 0;
          setDisplayScore(0);
        }
      });

      // Explosions
      explosions.forEach((ex, idx) => {
        ctx.beginPath();
        ctx.arc(ex.x, ex.y, ex.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 165, 0, ${1 - ex.radius / ex.maxRadius})`;
        ctx.fill();
        ex.radius += 1;
        if (ex.radius > ex.maxRadius) explosions.splice(idx, 1);
      });

      requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      clearInterval(enemyInterval);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 py-8">
        <h1 className="text-3xl text-white mb-4">Shooting Game</h1>
        <p className="text-white mb-4">Score: {displayScore}</p>
        <canvas ref={canvasRef} className="border-2 border-white bg-black" />
        <p className="text-white mt-4">Use Arrow/WASD to Move, Hold Space to Shoot</p>
      </main>
      <Footer />
    </div>
  );
};

export default ShootingGame;
