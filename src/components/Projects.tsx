const projects = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio site built with React and TypeScript. Deployed on Cloudflare Pages with a custom .dev domain.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://freben.dev",
  },
  {
    title: "Project Two",
    description:
      "A short description of what it does, what problem it solves and why you built it.",
    tags: ["C#", "ASP.NET Core", "SQL Server"],
    github: "https://github.com/yourusername/project-two",
    live: "",
  },
  {
    title: "Project Three",
    description:
      "A short description of what it does, what problem it solves and why you built it.",
    tags: ["REST API", "Docker", "PostgreSQL"],
    github: "https://github.com/yourusername/project-three",
    live: "",
  },
]

function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-sm mb-4" style={{ color: "#63b3ed" }}>// projects</p>
      <h2 className="text-3xl font-medium mb-12" style={{ color: "#f7fafc" }}>
        Things I have built
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col p-6 rounded-lg border"
            style={{ backgroundColor: "#1a202c", borderColor: "#2d3748" }}
          >
            <h3 className="text-base font-medium mb-2" style={{ color: "#f7fafc" }}>
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "#718096" }}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full"
                  style={{ backgroundColor: "#2d3748", color: "#63b3ed" }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs border px-3 py-1 rounded transition-colors"
                  style={{ color: "#a0aec0", borderColor: "#2d3748" }}
                >
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs border px-3 py-1 rounded transition-colors"
                  style={{ color: "#a0aec0", borderColor: "#2d3748" }}
                >
                  Live site
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects