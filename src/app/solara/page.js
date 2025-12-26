"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TextureLoader } from "three";

const SolarSystem = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      10000
    );
    camera.position.set(0, 400, 800);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);
    const sunLight = new THREE.PointLight(0xffffff, 3, 5000);
    scene.add(sunLight);

    const loader = new TextureLoader();

    // Sun
    const sunGeo = new THREE.SphereGeometry(50, 64, 64);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xFDB813 });
    const sun = new THREE.Mesh(sunGeo, sunMat);
    scene.add(sun);

    // Planets data
    const planetsData = [
      { name: "Mercury", size: 4, distance: 70, color: 0xaaaaaa, speed: 0.04, moons: 0 },
      { name: "Venus", size: 7, distance: 100, color: 0xffcc88, speed: 0.015, moons: 0 },
      { name: "Earth", size: 8, distance: 140, color: 0x2233ff, speed: 0.01, moons: 1, texture: "/textures/earth.jpg" },
      { name: "Mars", size: 6, distance: 180, color: 0xff3333, speed: 0.008, moons: 2, texture: "/textures/mars.jpg" },
      { name: "Jupiter", size: 20, distance: 250, color: 0xffaa55, speed: 0.005, moons: 4, texture: "/textures/jupiter.jpg" },
      { name: "Saturn", size: 17, distance: 330, color: 0xffddaa, speed: 0.003, ring: true, texture: "/textures/saturn.jpg", ringTexture: "/textures/saturn_ring.png", moons: 7 },
      { name: "Uranus", size: 14, distance: 420, color: 0x00ffff, speed: 0.002, ring: true, texture: "/textures/uranus.jpg", ringTexture: "/textures/uranus_ring.png", moons: 5 },
      { name: "Neptune", size: 14, distance: 500, color: 0x0000ff, speed: 0.001, moons: 3, texture: "/textures/neptune.jpg" },
      { name: "Pluto", size: 3, distance: 580, color: 0x999999, speed: 0.0005, moons: 1 },
    ];

    const planets = [];

    // Create planets
    planetsData.forEach((p) => {
      const geo = new THREE.SphereGeometry(p.size, 32, 32);
      const mat = p.texture
        ? new THREE.MeshStandardMaterial({ map: loader.load(p.texture) })
        : new THREE.MeshStandardMaterial({ color: p.color });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.x = p.distance;
      scene.add(mesh);

      // Rings
      if (p.ring) {
        const ringGeo = new THREE.RingGeometry(p.size + 2, p.size + 6, 64);
        const ringMat = new THREE.MeshBasicMaterial({
          map: loader.load(p.ringTexture),
          side: THREE.DoubleSide,
          transparent: true,
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = -Math.PI / 2;
        mesh.add(ring);
      }

      // Moons
      if (p.moons) {
        for (let i = 0; i < p.moons; i++) {
          const moonGeo = new THREE.SphereGeometry(p.size / 4, 16, 16);
          const moonMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
          const moon = new THREE.Mesh(moonGeo, moonMat);
          moon.position.x = p.size + 10 + i * 8;
          mesh.add(moon);
        }
      }

      planets.push({ ...p, mesh });
    });

    // Asteroid belt (huge)
    for (let i = 0; i < 3000; i++) {
      const geo = new THREE.SphereGeometry(Math.random() * 1.5, 8, 8);
      const mat = new THREE.MeshStandardMaterial({ color: 0x888888 });
      const asteroid = new THREE.Mesh(geo, mat);
      const angle = Math.random() * Math.PI * 2;
      const radius = 210 + Math.random() * 60;
      asteroid.position.x = Math.cos(angle) * radius;
      asteroid.position.z = Math.sin(angle) * radius;
      asteroid.position.y = (Math.random() - 0.5) * 10;
      scene.add(asteroid);
    }

    // Starfield (huge)
    const starsGeo = new THREE.BufferGeometry();
    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      starVertices.push(
        THREE.MathUtils.randFloatSpread(6000),
        THREE.MathUtils.randFloatSpread(6000),
        THREE.MathUtils.randFloatSpread(6000)
      );
    }
    starsGeo.setAttribute("position", new THREE.Float32BufferAttribute(starVertices, 3));
    const starsMat = new THREE.PointsMaterial({ color: 0xffffff });
    const stars = new THREE.Points(starsGeo, starsMat);
    scene.add(stars);

    // Comets
    const comets = [];
    for (let i = 0; i < 50; i++) {
      const geo = new THREE.SphereGeometry(1, 8, 8);
      const mat = new THREE.MeshStandardMaterial({ color: 0xffaa00 });
      const comet = new THREE.Mesh(geo, mat);
      comet.position.set(Math.random() * 1000 - 500, Math.random() * 500, Math.random() * 1000 - 500);
      scene.add(comet);
      comets.push(comet);
    }

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);

      planets.forEach((p) => {
        const angle = performance.now() * 0.0001 * p.speed * 100;
        p.mesh.position.x = Math.cos(angle) * p.distance;
        p.mesh.position.z = Math.sin(angle) * p.distance;
        p.mesh.rotation.y += 0.002;
      });

      // Move comets
      comets.forEach((c) => {
        c.position.x -= 1;
        if (c.position.x < -1000) c.position.x = 1000;
      });

      sun.rotation.y += 0.001;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-[1600px] md:h-[2000px]"></div>;
};

export default SolarSystem;
