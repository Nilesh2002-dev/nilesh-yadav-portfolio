import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
   DiJava, DiReact
} from 'react-icons/di';
import {
   SiSpringboot, 
  SiTailwindcss,  SiPostman, SiLaravel, SiDotnet, SiMysql,SiSelenium
} from 'react-icons/si';
import { FaPhp } from "react-icons/fa";
import SnowParticles from './SnowParticle';
const skills = [
  { 
    name: 'HTML', icon: <i className="devicon-html5-plain colored text-3xl sm:text-7xl" /> },
  { name: 'CSS', icon: <i className="devicon-css3-plain colored text-3xl sm:text-7xl" /> },
  { name: 'JavaScript', icon: <i className="devicon-javascript-plain colored text-3xl sm:text-7xl" /> },
  {
    name: 'Java',
    icon: <DiJava className="text-3xl sm:text-6xl text-[#ED8B00]" />,
  },
  {
    name: 'Spring Boot',
    icon: <SiSpringboot className="text-3xl sm:text-6xl text-[#6DB33F]" />,
  },
  {
  name: 'PHP',
  icon: <FaPhp className="text-3xl sm:text-6xl text-[#777BB4]" />,
  },
  {
  name: 'Laravel',
  icon: <SiLaravel className="text-3xl sm:text-6xl text-[#FF2D20]" />,
  },
  {
    name: '.NET',
    icon: <SiDotnet className="text-3xl sm:text-6xl text-[#512BD4]" />,
  },
  {
  name: 'ASP.NET Core',
  icon: <SiDotnet className="text-3xl sm:text-6xl text-[#512BD4]" />,
  },
  {
    name: 'React',
    icon: <DiReact className="text-3xl sm:text-6xl text-[#61DAFB]" />,
  },
  {
  name: 'MySQL',
  icon: <SiMysql className="text-3xl sm:text-6xl text-[#4479A1]" />,
  },
  {
    name: 'GitHub',
    icon: <i className="devicon-github-original colored text-3xl sm:text-7xl" />,
  },
  {
    name: 'Tailwind',
    icon: <SiTailwindcss className="text-3xl sm:text-6xl text-[#38BDF8]" />,
  },
  {
    name: 'Postman',
    icon: <SiPostman className="text-3xl sm:text-6xl text-[#FF6C37]" />,
  },
  {
  name: 'Selenium',
  icon: <SiSelenium className="text-3xl sm:text-7xl" />,
  },

  
];

export default function Skills() {
  return (
    <section id="Skills" className="relative py-20 px-6 min-h-screen overflow-hidden bg-gradient-to-br from-[#0A2647] via-[#144272] to-[#205295] text-white">
      <SnowParticles />

      <div className="max-w-7xl w-full mx-auto px-4">
        <motion.h2
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className=" text-3xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#8a6de0] to-[#4a9fe0] text-transparent bg-clip-text pulse-glow"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {skills.map((skill) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { margin: '-50px 0px', amount: 0.5 });

            return (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="group flex flex-col items-center justify-center p-4 h-[120px] w-[100px] sm:h-[160px] sm:w-[220px] rounded-xl bg-gradient-to-br from-[#0f1a3c]/20 to-[#1d2a57]/20 backdrop-blur-md border border-[#4a55c7]/30 shadow-md hover:shadow-[#4a9fe0]/20 transition-all overflow-hidden"
              >
                
                <div className="absolute w-40 h-40 bg-gradient-to-r from-[#8a6de0]/20 to-[#4a9fe0]/20 blur-[80px] opacity-0 group-hover:opacity-30 transition-all duration-500 -z-10" />

                <motion.div
                  className="mb-3 transition-colors duration-300 group-hover:drop-shadow-[0_0_10px_currentColor]"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {skill.icon}
                </motion.div>

                <h3 className="text-md font-semibold text-white/80 group-hover:text-white transition-colors text-center">
                  {skill.name}
                </h3>

                <div ref={ref} className="w-full h-1 mt-2 bg-[#4a55c7]/20 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ scaleX: isInView ? 1 : 0 }}
                    initial={{ scaleX: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="h-full  bg-gradient-to-r from-[#8a6de0] to-[#4a9fe0] origin-left"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}