import { useState } from "react";
import SectionHeading from "../../component/common/sectionHeading";

interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

const workProjects: ProjectItem[] = [
  {
    title: "APEX - IA Academy",
    description:
      "APEX es una plataforma de gestión de asistencia y control de acceso basada en inteligencia artificial, diseñada para optimizar la administración de eventos y espacios. Utiliza tecnologías avanzadas para ofrecer soluciones eficientes y seguras en el seguimiento de la asistencia, mejorando la experiencia tanto para organizadores como para participantes.",
    tags: ["Dashboard", "React"],
    link: "https://apex.ia-academy.com.co/attendance/;",
    image: "/Campus.jpeg",
  },
  {
    title: "Landing Page - IA Academy",
    description:
      "Campuslands IA Academy es una plataforma educativa enfocada intensivamente en Inteligencia Artificial y tecnologías digitales. que hace parte del ecosistema de Campuslands. Ofrece cursos y programas de diseños para potenciar habilidades en IA.",
    tags: ["Web", "Marketing", "Cursos"],
    link: "https://campuslands.ia-academy.com.co/",
    image: "/Landing_ia.png",
  },
  {
    title: "KAI",
    description:
      "Kai es un asistente virtual integrado en WhatsApp, especializado en la automatización de procesos y tareas repetitivas mediante inteligencia artificial. Proporciona ideas, herramientas y soluciones orientadas a optimizar flujos de trabajo y aumentar la eficiencia operativa.",
    tags: ["Agente-IA", "WhatsApp", "Automatización"],
    link: "https://wa.me/573002062014",
    image: "/images/projects/kai.png",
  },
  {
    title: "SeEncuentra.com",
    description:
      "SeEncuentra es una tienda virtual enfocada en la economía popular y solidaria,  especialmente la  región Santandereana (Colombia). La plataforma funciona para  visibilizar y conectar con emprendedores  proyectos comunitarios y pequeñas iniciativas económicas, con el objetivo de fortalecer redes productivas, promover la participación solidaria y apoyar el desarrollo socioeconómico local desde la base comunitaria. Su enfoque está en fomentar la solidaridad, la colaboración y la inclusión económica de microemprendedores y actores de la economía popular",
    tags: ["Marketplace", "E-commerce", "Servicios"],
    link: "https://seencuentra.com/",
    image: "/Seencuentra.png",
  },
];

/* const academicProjects: ProjectItem[] = [
  {
    title: "Proyecto de fin de carrera",
    description:
      "Plataforma académica con recurso interactivo para estudiantes y evaluación automatizada.",
    tags: ["Educación", "React", "API"],
    link: "#contact",
    image: "/images/projects/academic1.png",
  },
  {
    title: "Aplicación de aprendizaje",
    description:
      "Herramienta didáctica para practicar conceptos clave con seguimiento de progreso.",
    tags: ["UX", "Interactividad", "Mobile"],
    link: "#contact",
    image: "/images/projects/academic2.png",
  },
]; */

interface ProjectCardProps {
  project: ProjectItem;
}

const MAX_LENGTH = 100;

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = project.description.length > MAX_LENGTH;

  return (
    <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-cyan-400/20 overflow-hidden">
      {/* Imagen del proyecto */}
      <div className="aspect-[16/9] w-full overflow-hidden bg-slate-800 shrink-0">
        <img
          src={project.image}
          alt={`Imagen del proyecto ${project.title}`}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://placehold.co/600x360/1e293b/67e8f9?text=Proyecto";
          }}
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>

        {/* Descripción con ver más / ver menos */}
        <div className="mt-3">
          <p className="text-slate-300 leading-relaxed text-sm">
            {isLong && !expanded
              ? `${project.description.slice(0, MAX_LENGTH).trimEnd()}…`
              : project.description}
          </p>
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition"
            >
              {expanded ? "Ver menos ↑" : "Ver más ↓"}
            </button>
          )}
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Botón siempre al fondo */}
        <div className="mt-auto pt-5">
          <a
            href={project.link}
            className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500 hover:text-slate-950"
          >
            Ver detalles
          </a>
        </div>
      </div>
    </article>
  );
};

const Project = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          label="Proyectos"
          title="Ideas convertidas en productos reales"
          description="Aquí verás dos apartados: proyectos laborales con foco en soluciones reales y proyectos académicos con enfoque formativo."
        />

        <div className="space-y-16">
          {/* Proyectos laborales */}
          <div>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
                  Proyectos laborales
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Trabajos y entregas profesionales
                </h2>
              </div>
              <p className="max-w-2xl text-slate-300">
                Soluciones orientadas a clientes, productos y experiencias
                reales que demuestran un enfoque profesional y colaborativo.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-stretch">
              {workProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>

          {/* Proyectos académicos
          <div>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
                  Proyectos académicos
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Proyectos formativos e investigativos
                </h2>
              </div>
              <p className="max-w-2xl text-slate-300">
                Trabajos de estudio y prototipos conceptuales que reflejan
                aprendizaje técnico, creatividad y manejo de herramientas
                modernas.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-stretch">
              {academicProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default Project;
