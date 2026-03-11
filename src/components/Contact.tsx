import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-32 sm:py-48 bg-bg border-t border-black/10">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-heading text-5xl sm:text-7xl text-text font-bold mb-16 tracking-tighter"
        >
          Let's connect.
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex justify-center items-center space-x-12 sm:space-x-20"
        >
          <a
            href="https://www.linkedin.com/in/darshan-se/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-text hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin className="text-5xl sm:text-6xl mb-4 group-hover:-translate-y-2 transition-transform duration-300" />
            <span className="font-mono text-xs uppercase tracking-widest font-bold">LinkedIn</span>
          </a>
          
          <a
            href="mailto:darshanjainc@gmail.com"
            className="group flex flex-col items-center text-text hover:text-accent transition-colors"
          >
            <AiOutlineMail className="text-5xl sm:text-6xl mb-4 group-hover:-translate-y-2 transition-transform duration-300" />
            <span className="font-mono text-xs uppercase tracking-widest font-bold">Email</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
