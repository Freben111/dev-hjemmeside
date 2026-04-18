function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center max-w-4xl mx-auto px-6"
             style={{ paddingTop: "80px" }}>
      <p className="text-sm mb-2" style={{ color: "#63b3ed" }}>// hello world</p>
      <h1 className="text-5xl font-medium mb-3" style={{ color: "#f7fafc" }}>
        Frederik Bengtson
      </h1>
      <h2 className="text-2xl mb-6" style={{ color: "#63b3ed" }}>
        Full-Stack Developer
      </h2>
      <p className="text-sm leading-relaxed mb-8 max-w-lg" style={{ color: "#718096" }}>
        I build clean, reliable backend systems with C# and .NET.
        Currently open to new opportunities in the Vejle area.
      </p>
      <div className="flex gap-3">
        <a href="#projects"
           className="px-5 py-2 rounded text-sm font-medium"
           style={{ backgroundColor: "#63b3ed", color: "#0f1117" }}>
          View my work
        </a>
        <a href="#contact"
           className="px-5 py-2 rounded text-sm border"
           style={{ color: "#63b3ed", borderColor: "#63b3ed" }}>
          Contact me
        </a>
      </div>
    </section>
  )
}

export default Hero