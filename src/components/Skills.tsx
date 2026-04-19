const skills = [
  {
    category: "Backend",
    items: ["C#", ".NET / ASP.NET Core", "REST APIs", "Microservices"],
  },
  {
    category: "Database",
    items: ["SQL Server", "Entity Framework", "PostgreSQL"],
  },
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    category: "Tools & other",
    items: ["Git / GitHub", "Docker", "Umbraco CMS", "Visual Studio / VS Code"],
  },
]

function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-sm mb-4" style={{ color: "#63b3ed" }}>// skills</p>
      <h2 className="text-3xl font-medium mb-12" style={{ color: "#f7fafc" }}>
        What I work with
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {skills.map((group) => (
          <div
            key={group.category}
            className="p-6 rounded-lg border"
            style={{ backgroundColor: "#1a202c", borderColor: "#2d3748" }}
          >
            <h3 className="text-sm font-medium mb-4" style={{ color: "#63b3ed" }}>
              {group.category}
            </h3>
            <ul className="flex flex-col gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-sm flex items-center gap-2"
                  style={{ color: "#a0aec0" }}
                >
                  <span style={{ color: "#63b3ed" }}>▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills