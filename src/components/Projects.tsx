import { AiFillGithub } from "react-icons/ai";

export default function Projects() {
  const projects = [
    {
      title: "LLM NLP Expert",
      about: "Fine-tuning LLMs to be an NLP expert",
      description:
        "Explored multiple fine-tuning strategies (SFT, LoRA, QLoRA) on Gemma and LLaMA models using a custom 3.2k-example ArXiv dataset, achieving best performance with SFT on LLaMA.",
      skills: ["Python", "LLM", "Fine-Tuning", "NLP"],
      repo: "https://github.com/darshan-sc/NLPResearchAgent",
      date: "May 2025 - Jun 2025",
    },
    // {
    //   title: "Project Two",
    //   about: "Real-time dashboard for monitoring Y metrics",
    //   description:
    //     "Designed a React + D3 dashboard, integrated with a .NET Core Web API backend.",
    //   skills: ["React", "D3.js", ".NET Core", "WebSockets"],
    //   repo: "https://github.com/your-username/project-two",
    //   date: "Apr 2024 - Jun 2024",
    // },
    {
      title: "Mini Shell",
      about: "A Custom Posix-Style Shell",
      description:
        `A POSIX-style command-line shell in C, featuring tokenization, environment-variable expansion, and
        support for built-ins (cd, pwd, exit), inline variable assignment, and error handling.`,
      skills: ["C", "Shell", "Operating Systems"],
      // repo: "https://github.com/darshan-sc/mini-shell",
      date: "Feb 2025 - Mar 2025",
    },
  ];

  return (
    <section id="projects" className="bg-bg py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-4xl text-text mb-8 text-center border-b-2 border-text pb-2">Projects</h2>

        <div className="space-y-6">
          {projects.map((p, index) => (
            <div key={p.title} className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-heading text-xl text-text font-semibold">{p.title}</h3>
                {index !== 2 ? (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-hover transition flex items-center"
                    aria-label={`View ${p.title} on GitHub`}
                  >
                    <AiFillGithub className="mr-1" />
                    {p.date}
                  </a>
                ) : (
                  <div className="text-sm text-muted transition flex items-center">
                    <AiFillGithub className="mr-1" />
                    {p.date}
                  </div>
                )}
              </div>
              <p className="font-body text-text/80 italic mb-3 text-sm">{p.about}</p>
              <p className="font-body text-text/90 mb-4 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-100 text-text/80 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
