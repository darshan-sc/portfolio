import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";


export default function Hero() {
  return (
    <section id="hero" className="bg-bg py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Greeting */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-text mb-4 text-left">
          Hello, I’m Darshan.
        </h1>

        {/* About */}
        <p className="font-body text-base sm:text-lg text-muted mb-8 leading-relaxed text-left">
          I’m currently pursuing my MS in Computer Science at Penn State.  
          I have experience in building microservices, React micro‑frontends, and I'm currently exploring AI/ML research.  
          I like to watch movies, and read books when I'm not working!
        </p>

        {/* Social links */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/darshan-se/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-hover transition"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/darshan-sc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-hover transition"
            aria-label="GitHub"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
