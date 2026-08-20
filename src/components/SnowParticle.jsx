import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function SnowParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="snow"
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },

            particles: {
              number: {
                value: 160,
                density: {
                  enable: true,
                  area: 800,
                },
              },

              color: {
                value: ["#00FF99", "#00c6ff", "#38BDF8"],
              },

              shape: {
                type: "circle",
              },

              opacity: {
                value: 1,
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.3,
                  sync: false,
                },
              },

              size: {
                value: 1.5,
                random: true,
              },

              move: {
                enable: true,
                speed: 0.2,
                direction: "none",
                straight: false,
                outModes: {
                  default: "out",
                },
              },
            },

            detectRetina: true,
          }}
        />
      )}
    </>
  );
}