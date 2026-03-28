import SectionHeading from "../../component/common/sectionHeading";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-slate-100">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          label="Contacto"
          title="¿Tienes algo en mente?"
          description="Si tienes un proyecto, una idea o simplemente quieres conversar, con gusto te escucho. Estoy abierto a nuevas oportunidades y colaboraciones."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          {/* Info card */}
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-cyan-200">
              Ponte en contacto
            </h3>
            <div className="mt-2 mb-5 h-px w-10 bg-cyan-400/40 rounded-full" />
            <p className="text-slate-300 leading-relaxed">
              Puedes escribirme por cualquiera de estos medios. Intento
              responder lo antes posible y con gusto conversamos sobre lo que
              necesitas.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10">
                  <svg
                    className="h-4 w-4 text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-slate-200">juansefernando.guti2103@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10">
                  <svg
                    className="h-4 w-4 text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">
                    Teléfono
                  </p>
                  <p className="text-slate-200">+57 300 355 4331</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10">
                  <svg
                    className="h-4 w-4 text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">
                    Ubicación
                  </p>
                  <p className="text-slate-200">Colombia - Bucaramanga</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form card */}
          <form
            onSubmit={(event) => void event.preventDefault()}
            className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-fuchsia-500/5 backdrop-blur-xl"
          >
            <div className="grid gap-5">
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Nombre
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="rounded-2xl border border-white/10 bg-slate-950/80 px-5 py-3 text-slate-100 placeholder-slate-500 outline-none transition focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/20"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Correo electrónico
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="rounded-2xl border border-white/10 bg-slate-950/80 px-5 py-3 text-slate-100 placeholder-slate-500 outline-none transition focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/20"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Mensaje
                <textarea
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto o lo que tengas en mente..."
                  className="resize-none rounded-2xl border border-white/10 bg-slate-950/80 px-5 py-3 text-slate-100 placeholder-slate-500 outline-none transition focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/20"
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 active:scale-95"
              >
                Enviar mensaje
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
