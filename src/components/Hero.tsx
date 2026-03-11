import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-sm sm:text-base uppercase tracking-widest text-accent font-bold mb-6"
        >
          Darshan Chudiwal
        </motion.p>

        {/* Greeting */}
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-text mb-8 text-left leading-[1.1]"
        >
          Software Engineer building scalable systems<span className="text-accent">.</span>
        </motion.h1>

        {/* About */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-lg sm:text-xl md:text-2xl text-muted mb-12 max-w-3xl leading-relaxed text-left"
        >
          I’ve spent 2+ years building software that handles real stakes — payment workflows, fraud systems, and product interfaces people rely on daily. I work across the stack, care about writing software that holds up under pressure, and I’m currently pursuing my MS in Computer Science at Penn State.
        </motion.p>

        {/* Social links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex space-x-8"
        >
          <a
            href="https://www.linkedin.com/in/darshan-se/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl sm:text-4xl text-text hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/darshan-sc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl sm:text-4xl text-text hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <AiFillGithub />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
