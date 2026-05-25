import { motion } from "framer-motion";
import {
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiSupabase,
  SiVite,
} from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact color="#61DAFB" />, level: 75 },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" />, level: 70 },
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" />, level: 90 },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" />, level: 85 },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" />, level: 80 },
  { name: "Supabase", icon: <SiSupabase color="#3ECF8E" />, level: 60 },
  { name: "Git", icon: <FaGitAlt color="#F05032" />, level: 75 },
  { name: "Vite", icon: <SiVite color="#646CFF" />, level: 80 },
];

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500 transition"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-white font-semibold">{skill.name}</span>
                </div>
                <span className="text-purple-400 font-bold">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level + "%" }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
