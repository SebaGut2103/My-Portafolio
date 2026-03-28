import SectionHeading from '../../component/common/sectionHeading';

interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: ProjectItem[] = [
  {
    title: 'Portafolio interactivo',
    description: 'Sitio web personal con animaciones suaves, navegación clara y diseño responsive.',
    tags: ['React', 'Tailwind', 'UI'],
    link: '#contact',
  },
  {
    title: 'Landing de producto',
    description: 'Página de lanzamiento optimizada para conversiones con elementos visuales modernos.',
    tags: ['Web', 'Marketing', 'Responsive'],
    link: '#contact',
  },
  {
    title: 'Dashboard de datos',
    description: 'Interfaz de administración con componentes modulares y visualización de métricas claves.',
    tags: ['UX', 'Dashboard', 'Data'],
    link: '#contact',
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          label="Proyectos"
          title="Ideas convertidas en productos reales"
          description="Estos son algunos ejemplos de cómo combino diseño, rendimiento y atención al detalle en cada entrega."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-cyan-400/20">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-slate-300 leading-relaxed">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-200">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.link} className="mt-8 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500 hover:text-slate-950">
                Ver detalles
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
