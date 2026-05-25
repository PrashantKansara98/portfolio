import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Hi! I am Prashant 
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              I am a Frontend Developer from Gujarat, India. I recently
              completed my B.Tech in Computer Engineering from G H Patel College
              of Engineering & Technology, CVM University.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              During my 6-month internship at ScalerByte Technologies, I built
              and deployed Ethovant Books - a complete Inventory Management
              System using React, Supabase, and Tailwind CSS.
            </p>
            <a
              href="https://github.com/PrashantKansara98"
              target="_blank"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:opacity-90 transition"
            >
              View GitHub
            </a>
          </motion.div>

          {/* Right - Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { number: "6+", label: "Months Experience" },
              { number: "2+", label: "Projects Built" },
              { number: "1", label: "Live Deployment" },
              { number: "100%", label: "Passion" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500 transition"
              >
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {item.number}
                </p>
                <p className="text-gray-400 text-sm mt-2">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
