function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-sm mb-4" style={{ color: "#63b3ed" }}>// contact</p>
      <h2 className="text-3xl font-medium mb-6" style={{ color: "#f7fafc" }}>
        Get in touch
      </h2>
      <p className="text-sm leading-relaxed mb-12 max-w-lg" style={{ color: "#a0aec0" }}>
        I am currently open to new opportunities. Whether you have a position 
        in mind or just want to connect, my inbox is always open.
      </p>
      <div className="grid grid-cols-3 gap-4 mb-16">
        {[
          {
            label: "Email",
            value: "frederikbengtson0@gmail.com",
            href: "mailto:frederikbengtson0@gmail.com",
          },
          {
            label: "LinkedIn",
            value: "linkedin.com/in/frederik-bengtson",
            href: "https://linkedin.com/in/frederik-bengtson",
          },
          {
            label: "GitHub",
            value: "github.com/Freben111",
            href: "https://github.com/Freben111",
          },
        ].map(({ label, value, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col p-6 rounded-lg border transition-colors"
            style={{ backgroundColor: "#1a202c", borderColor: "#2d3748" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "#63b3ed")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "#2d3748")}
          >
            <span className="text-xs mb-2" style={{ color: "#63b3ed" }}>{label}</span>
            <span className="text-sm" style={{ color: "#a0aec0" }}>{value}</span>
          </a>
        ))}
      </div>
      <footer className="border-t pt-8 text-center" style={{ borderColor: "#2d3748" }}>
        <p className="text-xs" style={{ color: "#4a5568" }}>
          Designed & built by Frederik Bengtson · {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  )
}

export default Contact