import SectionHeading from '../../component/common/sectionHeading';

const Mission = () => {  
  return (
    <section id="mission" className="py-24 bg-slate-950 text-slate-100">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          label="Misión"
          title="Aprender, crear y aportar valor"
          description="Mi misión es crecer como desarrollador mientras construyo proyectos que resuelvan problemas reales. Quiero que cada línea de código refleje mi compromiso con el aprendizaje y la mejora constante."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Aprendizaje continuo',
              description: 'Cada proyecto es una oportunidad para aprender algo nuevo, probar tecnologías y mejorar mis habilidades día a día.',
            },
            {
              title: 'Trabajo en equipo',
              description: 'Me motiva colaborar con otros, escuchar ideas diferentes y construir soluciones juntos, porque los mejores resultados nacen del trabajo colectivo.',
            },
            {
              title: 'Adaptabilidad',
              description: 'Me adapto a nuevos entornos y herramientas con facilidad, siempre dispuesto a enfrentar retos y salir de mi zona de confort.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
              <h3 className="text-2xl font-semibold text-cyan-200">{item.title}</h3>
              <p className="mt-4 text-slate-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
