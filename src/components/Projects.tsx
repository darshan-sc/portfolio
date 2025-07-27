import { AiFillGithub } from "react-icons/ai";

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      about: "A command‑line tool to automate X workflows",
      description:
        "Built a reusable CLI with Node.js and yargs to streamline tasks across teams.",
      skills: ["Node.js", "TypeScript", "CLI", "Testing"],
      repo: "https://github.com/your‑username/project‑one",
      date: "Jan 2024 – Mar 2024",
    },
    {
      title: "Project Two",
      about: "Real‑time dashboard for monitoring Y metrics",
      description:
        "Designed a React + D3 dashboard, integrated with a .NET Core Web API backend.",
      skills: ["React", "D3.js", ".NET Core", "WebSockets"],
      repo: "https://github.com/your‑username/project‑two",
      date: "Apr 2024 – Jun 2024",
    },
    {
      title: "Project Three",
      about: "Mobile‑friendly PWA for Z users",
      description:
        "Created a PWA with offline support, service workers, and push notifications.",
      skills: ["PWA", "Service Workers", "Tailwind CSS", "Vite"],
      repo: "https://github.com/your‑username/project‑three",
      date: "Jul 2024 – Sep 2024",
    },
  ];

  return (
    <section id="projects" className="bg-bg py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-4xl text-text mb-6 text-center border-b-2 border-text pb-2">Projects</h2>

        <ul className="space-y-8">
          {projects.map((p) => (
            <li key={p.title}>
              <div className="flex justify-between items-baseline">
                <h3 className="font-heading text-xl text-text">{p.title}</h3>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-muted hover:text-text transition flex items-center"
                  aria-label={`View ${p.title} on GitHub`}
                >
                  <AiFillGithub className="mr-1" />
                  {p.date}
                </a>
              </div>
              <p className="font-body text-text/80 italic mb-1">{p.about}</p>
              <p className="font-body text-text/90 mb-1">{p.description}</p>
              <p className="font-body text-muted">
                <strong>Tech:</strong> {p.skills.join(", ")}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
