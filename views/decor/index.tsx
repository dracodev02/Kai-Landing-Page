"use client";
import SplashCursor from "@/blocks/Animations/SplashCursor/SplashCursor";
import Particles from "@/blocks/Backgrounds/Particles/Particles";

const Decor = () => {
  return (
    <div className="h-screen w-screen fixed top-0 left-0 -z-[1]">
      <div className="max-md:hidden">
        <SplashCursor
          DENSITY_DISSIPATION={10}
          SPLAT_RADIUS={0.1}
          BRIGHTNESS={0.2}
          BACK_COLOR={{ r: 0.2, g: 0.2, b: 0.2 }}
        />
      </div>
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.05}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
        className={"h-full w-full"}
      />
    </div>
  );
};

export default Decor;
