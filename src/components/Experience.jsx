import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Experience = () => {
  return (
    <section className="relative py-24 px-6 text-white bg-gradient-to-br from-[#0A2647] via-[#144272] to-[#205295] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8a6de0] to-[#4a9fe0]">
            Experience
          </h2>

          <p className="text-white/70 mt-4">
            My professional journey
          </p>

          <div className="w-24 h-[3px] bg-gradient-to-r from-[#8a6de0] to-[#4a9fe0] mx-auto mt-5 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-white/20" />

          {/* Timeline Icon */}
          <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center border-4 border-[#0A2647] shadow-lg shadow-blue-500/30">
            <FaBriefcase className="text-white text-sm" />
          </div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="ml-16"
          >
            <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">

              {/* Job Title */}
              <h3 className="text-2xl sm:text-3xl font-bold">
                Application Support Intern
              </h3>

              {/* Company */}
              <p className="text-blue-400 text-lg font-semibold mt-1">
                Systemic Altruism Co. Ltd
              </p>

              {/* Job Details */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 text-white/60 text-sm">

                <span className="flex items-center gap-2">
                  <FaCalendarAlt className="text-blue-400" />
                  Jun 2026 – Sep 2026
                </span>

                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-blue-400" />
                  Thane, India
                </span>

              </div>

              {/* Description */}
              <ul className="mt-7 space-y-4 text-white/80">

                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">▹</span>
                  <span>
                    Engineered 5+ responsive web pages using HTML, CSS, and JavaScript, 
                    optimizing layouts for cross-browser and multi-device compatibility while improving overall usability and performance.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">▹</span>
                  <span>
                    Developed client-side validation for 8+ forms, reducing user input errors by 30% 
                    and improving data accuracy and overall user experience.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">▹</span>
                  <span>
                   Developed and enhanced backend functionalities using Java and Spring Boot, 
                   collaborating with a 3-member team to build scalable and maintainable application features.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">▹</span>
                  <span>
                    Used Git for version control and maintained a structured
                    development workflow.
                  </span>
                </li>

              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-8">

                {[
                  "Java",
                  "Spring Boot",
                  "HTML5",
                  "CSS3",
                  "JavaScript",
                  "React.js",
                  "Git",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full text-sm text-blue-300 bg-blue-500/10 border border-blue-400/20"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;