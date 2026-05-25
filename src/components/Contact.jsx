import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-2xl mx-auto w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-400 mb-12 text-lg"
        >
          I am currently looking for remote Frontend Developer roles. Feel free
          to reach out!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 mb-12"
        >
          <a
            href="https://mail.google.com/mail/u/0/?to=prashant.kansara98@gmail.com%22&fs=1&tf=cm"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-purple-500 transition text-gray-300 hover:text-white"
          >
            <FaEnvelope size={20} color="#ec4899" />
            prashant.kansara98@gmail.com
          </a>

          <a
            href="https://linkedin.com/in/prashant-kansara-915a742b3"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-purple-500 transition text-gray-300 hover:text-white"
          >
            <FaLinkedin size={20} color="#0A66C2" />
            linkedin.com/in/prashant-kansara-915a742b3
          </a>

          <a
            href="https://github.com/PrashantKansara98"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-purple-500 transition text-gray-300 hover:text-white"
          >
            <FaGithub size={20} color="#ffffff" />
            github.com/PrashantKansara98
          </a>
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          href="https://mail.google.com/mail/?view=cm&to=prashant.kansara98@gmail.com"
          className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-lg hover:opacity-90 transition"
        >
          Say Hello
        </motion.a>

        <p className="text-gray-600 text-sm mt-16">
          Designed & Built by Prashant Kansara
        </p>
      </div>
    </section>
  );
}

export default Contact;
