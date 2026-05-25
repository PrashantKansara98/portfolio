import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiReact, SiSupabase, SiTailwindcss, SiVite } from "react-icons/si";

const projects = [
  {
    title: "Ethovant Books",
    description:
      "A complete cloud-based Inventory Management System with authentication, product management, PDF invoice generation, and real-time stock tracking.",
    tags: [
      { name: "React", icon: <SiReact color="#61DAFB" /> },
      { name: "Supabase", icon: <SiSupabase color="#3ECF8E" /> },
      { name: "Tailwind", icon: <SiTailwindcss color="#38BDF8" /> },
      { name: "Vite", icon: <SiVite color="#646CFF" /> },
    ],
    live: "https://ethovant-books.vercel.app",
    github: "https://github.com/PrashantKansara98/ethovant-books",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Dubai Mall Sales Deck",
    description:
      "An interactive multi-page animated sales presentation built as a React web app with smooth navigation and responsive layout.",
    tags: [
      { name: "React", icon: <SiReact color="#61DAFB" /> },
      { name: "Tailwind", icon: <SiTailwindcss color="#38BDF8" /> },
      { name: "Vite", icon: <SiVite color="#646CFF" /> },
    ],
    live: "https://dubai-mall-deck-khaki.vercel.app/",
    github: "https://github.com/PrashantKansara98",
    gradient: "from-orange-500 to-pink-500",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500 transition group"
            >
              {/* Top gradient bar */}
              <div className={"h-2 bg-gradient-to-r " + project.gradient} />

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full text-xs text-gray-300"
                    >
                      <span className="text-sm">{tag.icon}</span>
                      {tag.name}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-semibold hover:opacity-90 transition"
                    >
                      <FaExternalLinkAlt size={12} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full text-gray-300 text-sm hover:border-purple-500 hover:text-white transition"
                  >
                    <FaGithub size={14} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
