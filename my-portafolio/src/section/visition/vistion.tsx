import SectionHeading from '../../component/common/sectionHeading';

const Visition = () => {
  return (
    <section id="vision" className="py-24 bg-slate-950 text-slate-100">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          label="Visión"
          title="Convertirme en un desarrollador que marca la diferencia"
          description="Aspiro a crecer profesionalmente, dominar nuevas tecnologías y contribuir a proyectos que tengan un impacto positivo en las personas y en la industria."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-fuchsia-500/10 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-fuchsia-200">Crecimiento profesional</h3>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Quiero seguir aprendiendo, enfrentar nuevos desafíos y convertir cada proyecto en una oportunidad para mejorar como desarrollador.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-blue-500/10 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-cyan-200">Impacto real</h3>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Mi visión es crear soluciones que no solo funcionen bien, sino que realmente ayuden a las personas a resolver sus problemas del día a día.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-cyan-200">Colaboración y equipo</h3>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Sueño con trabajar en equipos donde podamos aprender unos de otros, compartir conocimiento y construir cosas increíbles juntos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visition;
