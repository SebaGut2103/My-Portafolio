import SectionHeading from '../../component/common/sectionHeading';

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-slate-950 text-slate-100 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-fuchsia-500/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          label="Sobre mí"
          title="Diseño y desarrollo con propósito"
          description="Soy desarrollador de software junior con experiencia en construir proyectos claros, funcionales y escalables."
        />

        {/* Top row: image + quien soy */}
        <div className="grid gap-6 lg:grid-cols-[340px_1fr] mb-6">
          {/* Image card — matches card style */}
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl flex flex-col items-center justify-center gap-4">
            <div className="w-full overflow-hidden rounded-2xl border border-cyan-400/20 shadow-[0_8px_32px_-8px_rgba(14,165,233,0.35)]">
              <img
                src="/img-me.jpeg"
                alt="Imagen de presentación"
                className="w-full h-72 object-cover object-top transition duration-500 hover:scale-105"
              />
            </div>
            {/* Optional name/badge under photo */}
            <div className="text-center pb-1">
              <p className="text-sm font-medium text-cyan-200 tracking-wide">
                Desarrollador de Software
              </p>
              <p className="text-xs text-slate-400 mt-1 tracking-[0.15em] uppercase">
                Junior · Full Stack
              </p>
            </div>
          </div>

          {/* ¿Quién soy? */}
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-cyan-200">
              ¿Quién soy?
            </h3>
            <div className="mt-2 mb-5 h-px w-10 bg-cyan-400/40 rounded-full" />
            <p className="text-slate-300 leading-relaxed">
              Desarrollador de software junior con sólidos conocimientos de
              programación y desarrollo de aplicaciones. Interesado en el
              aprendizaje continuo y resolución de problemas. Capaz de trabajar
              en equipo y adaptarse a nuevos entornos tecnológicos. Con
              experiencia en creación de proyectos con base en JavaScript, MySQL
              y Java.
            </p>
          </div>
        </div>

        {/* Bottom row: enfoque + habilidades */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          {/* Mi enfoque */}
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-fuchsia-500/10 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-fuchsia-200">
              Mi enfoque
            </h3>
            <div className="mt-2 mb-5 h-px w-10 bg-fuchsia-400/40 rounded-full" />
            <p className="text-slate-300 leading-relaxed">
              Mi enfoque es el constante aprendizaje tanto en habilidades
              técnicas como sociales, aportar mis conocimientos, trabajar en
              equipo y adaptarme a cualquier entorno tecnológico.
            </p>
          </div>

          {/* Habilidades clave */}
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-blue-500/10 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-cyan-200 mb-5">
              Habilidades clave
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Java",
                "JavaScript",
                "MySQL",
                "Spring Boot",
                "Python",
                "Git",
                "PostgreSQL",
                "Node.js",
              ].map((skill) => (
                <span
                  key={skill}
                  className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100 transition duration-200 hover:border-cyan-400/50 hover:bg-cyan-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
