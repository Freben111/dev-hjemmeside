function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-sm mb-4" style={{ color: "#63b3ed" }}>// about me</p>
      <div className="grid grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-medium mb-6" style={{ color: "#f7fafc" }}>
            Who I am
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#a0aec0" }}>
            I recently graduated with an AP in Computer Science (Datamatiker) 
            from UCL Vejle. I enjoy building solid, well-structured backend 
            systems APIs, microservices, and databases are where I feel at home.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#a0aec0" }}>
            During my internship I worked extensively with frontend development 
            using Umbraco CMS, which gave me a full-stack perspective on how 
            applications come together. I am currently looking for my first 
            full-time position in the Vejle area.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-medium mb-6" style={{ color: "#f7fafc" }}>
            Quick facts
          </h2>
          <div className="flex flex-col gap-3">
            {[
              { label: "Location", value: "Vejle, Denmark" },
              { label: "Education", value: "AP Computer Science (Datamatiker)" },
              { label: "Focus", value: "Full-stack development" },
              { label: "Status", value: "Open to work" },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-3 text-sm">
                <span className="w-24 shrink-0" style={{ color: "#63b3ed" }}>{label}</span>
                <span style={{ color: "#a0aec0" }}>{value}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-8">
            <a
              href="/CV_Frederik_Bengtson.pdf"
              download
              className="px-4 py-2 rounded text-sm"
              style={{ backgroundColor: "#63b3ed", color: "#0f1117" }}
            >
              Download CV
            </a>
            <a
              href="https://linkedin.com/in/frederik-bengtson"
              className="px-4 py-2 rounded text-sm border"
              style={{ color: "#63b3ed", borderColor: "#63b3ed" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About