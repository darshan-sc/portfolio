import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Parallel File System",
      about: "Distributed File System in Go",
      description:
        "Implemented a distributed file system built in Go that stripes data across independent storage nodes for parallel I/O. A dedicated metadata server handles coordination — locking, routing, and cache invalidation — while file servers handle raw block storage.",
      skills: ["Go", "gRPC", "Protobuf", "Distributed Systems"],
      repo: "https://github.com/darshan-sc/parallel-file-system",
      date: "Feb 2026 - Mar 2026",
    },
    {
      title: "LLM NLP Expert",
      about: "Fine-tuning LLMs to be an NLP expert",
      description:
        "Explored multiple fine-tuning strategies (SFT, LoRA, QLoRA) on Gemma and LLaMA models using a custom 3.2k-example ArXiv dataset, achieving best performance with SFT on LLaMA.",
      skills: ["Python", "LLM", "Fine-Tuning", "NLP"],
      repo: "https://github.com/darshan-sc/NLPResearchAgent",
      date: "May 2025 - Jun 2025",
    },
    {
      title: "Research Nexus",
      about: "Intelligent Research Workspace",
      description: "Architected a full-stack research platform unifying experiment logs and literature using Supabase Auth. Engineered a RAG pipeline with PostgreSQL + pgvector for vector search. Orchestrated multi-container services via Docker Compose for FastAPI and PostgreSQL with 100% environment parity.",
      skills: ["Python", "FastAPI", "React", "PostgreSQL", "Docker", "OpenAI"],
      repo: "https://github.com/darshan-sc/lab-assistant",
      date: "2025",
    },
    {
      title: "Mini Shell",
      about: "A Custom Posix-Style Shell",
      description:
        `A POSIX-style command-line shell in C, featuring tokenization, environment-variable expansion, and support for built-ins (cd, pwd, exit), inline variable assignment, and error handling.`,
      skills: ["C", "Shell", "Operating Systems"],
      date: "Feb 2025 - Mar 2025",
    },
  ];

  return (
    <section id="projects" className="bg-bg py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-heading text-5xl sm:text-6xl text-text font-bold mb-16 tracking-tighter"
        >
          Selected Works
        </motion.h2>

        <div className="flex flex-col">
          {projects.map((p, index) => (
            <motion.div 
              key={p.title} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group border-t border-black/10 py-12 first:border-t-0 flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8"
            >
              <div className="lg:w-1/3">
                <h3 className="font-heading text-3xl sm:text-4xl text-text font-bold tracking-tight mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
                <p className="font-body text-muted text-sm uppercase tracking-widest font-semibold mb-4">{p.about}</p>
                <div className="flex items-center text-sm font-mono text-muted">
                  {p.date}
                </div>
              </div>
              
              <div className="lg:w-7/12">
                <p className="font-body text-lg text-text/90 leading-relaxed mb-8">{p.description}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
                  {p.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="font-mono text-[11px] uppercase tracking-widest text-text font-bold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 font-mono text-sm uppercase tracking-widest text-text hover:text-accent font-bold transition-colors"
                    aria-label={`View ${p.title} on GitHub`}
                  >
                    <AiFillGithub className="text-xl" />
                    <span>Repository</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
