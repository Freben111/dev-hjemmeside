function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-sm"
         style={{ backgroundColor: "rgba(15, 17, 23, 0.85)" }}>
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <span style={{ color: "#63b3ed" }} className="text-sm font-medium">
          freben.dev
        </span>
        <div className="flex gap-6">
          {["about", "projects", "skills", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-sm transition-colors"
              style={{ color: "#a0aec0" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#63b3ed")}
              onMouseLeave={e => (e.currentTarget.style.color = "#a0aec0")}
            >
              {section}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar