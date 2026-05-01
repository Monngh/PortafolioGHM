import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useScroll, useTransform } from 'framer-motion';

function Sword({ targetX }: { targetX: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Rotación constante para mostrar el brillo metálico
      groupRef.current.rotation.x += 0.005;
      groupRef.current.rotation.y += 0.01;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
      // Suavizado de la posición X (Lerp)
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.1);
      
      // Efecto de flotación mágica
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.4;
    }
  });

  return (
    <group ref={groupRef} scale={1.2} rotation={[0, 0, Math.PI / 4]}>
      {/* Blade (Hoja) */}
      <mesh position={[0, 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.4, 4, 0.1]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Blade Tip (Punta) */}
      <mesh position={[0, 4.25, 0]} rotation={[0, Math.PI / 4, 0]} castShadow receiveShadow>
        {/* Usamos un cono de 4 lados rotado para hacer la punta plana como una espada */}
        <coneGeometry args={[0.28, 0.5, 4]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Crossguard (Guardamano) */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.5, 0.3, 0.4]} />
        <meshStandardMaterial color="#fbbf24" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Crossguard details (Gemas o detalles laterales) */}
      <mesh position={[0.6, 0, 0.2]} castShadow>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#ef4444" metalness={0.4} roughness={0.2} emissive="#ef4444" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[-0.6, 0, 0.2]} castShadow>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#ef4444" metalness={0.4} roughness={0.2} emissive="#ef4444" emissiveIntensity={0.5} />
      </mesh>

      {/* Grip (Mango) */}
      <mesh position={[0, -0.8, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.15, 0.15, 1.3, 16]} />
        <meshStandardMaterial color="#1e293b" roughness={0.9} />
      </mesh>

      {/* Pommel (Pomo) */}
      <mesh position={[0, -1.6, 0]} castShadow receiveShadow>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#fbbf24" metalness={0.7} roughness={0.3} />
      </mesh>
    </group>
  );
}

// Puente entre Framer Motion (2D) y Three.js (3D)
function SceneContent({ scrollYProgress }: { scrollYProgress: any }) {
  // Mapeamos el progreso del scroll a posiciones X específicas
  const x = useTransform(scrollYProgress, [0, 0.25, 0.45, 0.65, 0.85, 1], [0, 0, -5, 5, 5, 5]);
  const [val, setVal] = useState(0);

  useFrame(() => {
    setVal(x.get());
  });

  return <Sword targetX={val} />;
}

export function VolleyballExample() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-slate-950 font-inter">
      {/* Contenedor Sticky para el Canvas */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Capas de Texto (Z-Index 10) */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          
          {/* SECCIÓN 1: Centro */}
          <motion.div 
            style={{ 
              opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]),
              scale: useTransform(scrollYProgress, [0, 0.2], [1, 0.8])
            }}
            className="h-full flex flex-col items-center justify-center text-center px-6"
          >
            <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-white tracking-tighter uppercase italic leading-none drop-shadow-2xl">
              Forged in <br /> <span className="text-red-500">Fire</span>
            </h2>
            <div className="mt-8 flex flex-col items-center">
              <span className="text-white/40 text-sm uppercase tracking-widest animate-bounce">Scroll Down</span>
            </div>
          </motion.div>

          {/* SECCIÓN 2: Texto a la derecha (Espada a la izquierda) */}
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.3, 0.45, 0.6], [0, 1, 0]) }}
            className="h-full flex items-center justify-end px-12 md:px-32 lg:px-48"
          >
            <div className="max-w-lg text-right">
              <h3 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Master the <span className="text-blue-400">Blade</span>
              </h3>
              <p className="text-white/50 text-xl md:text-2xl leading-relaxed">
                Cada ángulo y reflejo cuenta la historia de un acero impecable, forjado para leyendas.
              </p>
            </div>
          </motion.div>

          {/* SECCIÓN 3: Texto a la izquierda (Espada a la derecha) */}
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.7, 0.85, 1], [0, 1, 1]) }}
            className="h-full flex items-center justify-start px-12 md:px-32 lg:px-48"
          >
            <div className="max-w-lg text-left">
              <h3 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Legendary <span className="text-yellow-400">Relic</span>
              </h3>
              <p className="text-white/50 text-xl md:text-2xl leading-relaxed">
                Despierta el poder interior. El equilibrio perfecto entre arte visual y renderizado 3D.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Canvas 3D */}
        <div className="w-full h-full cursor-grab active:cursor-grabbing bg-gradient-to-b from-slate-950 to-slate-900">
          <Canvas camera={{ position: [0, 0, 10], fov: 45 }} shadows>
            <React.Suspense fallback={null}>
              <ambientLight intensity={0.4} />
              <spotLight position={[10, 15, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
              <pointLight position={[-10, -5, -5]} intensity={1.5} color="#3b82f6" />
              <directionalLight position={[0, 5, 5]} intensity={1} color="#fbbf24" />

              {/* Contenido de la escena con el puente de scroll */}
              <SceneContent scrollYProgress={scrollYProgress} />

              <OrbitControls enableZoom={false} enablePan={false} />
            </React.Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
}
