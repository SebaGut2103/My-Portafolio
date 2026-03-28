import { useState } from "react";
import SectionHeading from "../../component/common/sectionHeading";

const EMAILJS_SERVICE_ID = "service_6xhfyoo";
const EMAILJS_TEMPLATE_ID = "template_qyuv1r3";
const EMAILJS_PUBLIC_KEY = "AcmVb6apZ7Qhu7PK9";

const INITIAL = { name: "", email: "", message: "" };
const ERRORS_INITIAL = { name: "", email: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState(ERRORS_INITIAL);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const validate = () => {
    const e = { name: "", email: "", message: "" };
    if (!form.name.trim()) e.name = "El nombre es requerido.";
    if (!form.email.trim()) e.email = "El correo es requerido.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Ingresa un correo válido.";
    if (!form.message.trim()) e.message = "El mensaje no puede estar vacío.";
    setErrors(e);
    return !e.name && !e.email && !e.message;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            to_name: "Juan Sebastian",
          },
        }),
      });

      if (!res.ok) throw new Error(`EmailJS error: ${res.status}`);

      setStatus("success");
      setForm(INITIAL);
    } catch (err) {
      console.error("Error al enviar:", err);
      setStatus("error");
    }
  };

  const resetStatus = () => setStatus("idle");

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
              <ContactItem
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                }
                label="Email"
                value="juansefernando.guti2103@gmail.com"
              />
              <ContactItem
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                }
                label="Teléfono"
                value="+57 300 355 4331"
              />
              <ContactItem
                icon={
                  <>
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
                  </>
                }
                label="Ubicación"
                value="Colombia — Bucaramanga"
              />
            </div>
          </div>

          {/* Form card */}
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-fuchsia-500/5 backdrop-blur-xl">
            {status === "success" && (
              <FeedbackPanel
                type="success"
                title="¡Mensaje enviado!"
                body="Gracias por escribirme. Te responderé lo antes posible."
                onReset={resetStatus}
                resetLabel="Enviar otro mensaje"
              />
            )}

            {status === "error" && (
              <FeedbackPanel
                type="error"
                title="Algo salió mal"
                body="No pude enviar tu mensaje. Intenta de nuevo o escríbeme directamente al correo."
                onReset={resetStatus}
                resetLabel="Intentar de nuevo"
              />
            )}

            {(status === "idle" || status === "loading") && (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5">
                  <Field label="Nombre" error={errors.name}>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      disabled={status === "loading"}
                      className={inputCls(errors.name)}
                    />
                  </Field>

                  <Field label="Correo electrónico" error={errors.email}>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      disabled={status === "loading"}
                      className={inputCls(errors.email)}
                    />
                  </Field>

                  <Field label="Mensaje" error={errors.message}>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Cuéntame sobre tu proyecto o lo que tengas en mente..."
                      disabled={status === "loading"}
                      className={`resize-none ${inputCls(errors.message)}`}
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
                  >
                    {status === "loading" ? (
                      <>
                        <Spinner />
                        Enviando…
                      </>
                    ) : (
                      <>
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
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Helpers ── */

const inputCls = (error: string) =>
  `rounded-2xl border ${
    error
      ? "border-red-400/60 focus:ring-red-400/20"
      : "border-white/10 focus:border-cyan-400/60 focus:ring-cyan-400/20"
  } bg-slate-950/80 px-5 py-3 text-slate-100 placeholder-slate-500 outline-none transition focus:ring-1`;

const Field = ({
  label,
  error,
  children,
}: {
  label: string;
  error: string;
  children: React.ReactNode;
}) => (
  <label className="flex flex-col gap-1.5 text-sm text-slate-300">
    {label}
    {children}
    {error && (
      <span className="text-xs text-red-400 flex items-center gap-1">
        <svg
          className="h-3 w-3 shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        {error}
      </span>
    )}
  </label>
);

const ContactItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-4">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10">
      <svg
        className="h-4 w-4 text-cyan-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {icon}
      </svg>
    </div>
    <div>
      <p className="text-xs text-slate-400 uppercase tracking-wider">{label}</p>
      <p className="text-slate-200">{value}</p>
    </div>
  </div>
);

const FeedbackPanel = ({
  type,
  title,
  body,
  onReset,
  resetLabel,
}: {
  type: "success" | "error";
  title: string;
  body: string;
  onReset: () => void;
  resetLabel: string;
}) => {
  const isSuccess = type === "success";
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center gap-5">
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-full border ${isSuccess ? "border-cyan-400/30 bg-cyan-500/10" : "border-red-400/30 bg-red-500/10"}`}
      >
        {isSuccess ? (
          <svg
            className="h-8 w-8 text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : (
          <svg
            className="h-8 w-8 text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>
      <div>
        <h4
          className={`text-xl font-semibold ${isSuccess ? "text-cyan-200" : "text-red-300"}`}
        >
          {title}
        </h4>
        <p className="mt-2 text-slate-400 text-sm leading-relaxed max-w-xs">
          {body}
        </p>
      </div>
      <button
        onClick={onReset}
        className={`mt-2 rounded-full px-6 py-2.5 text-sm font-semibold transition active:scale-95 ${
          isSuccess
            ? "bg-cyan-500/15 text-cyan-300 border border-cyan-400/25 hover:bg-cyan-500/25"
            : "bg-red-500/15 text-red-300 border border-red-400/25 hover:bg-red-500/25"
        }`}
      >
        {resetLabel}
      </button>
    </div>
  );
};

const Spinner = () => (
  <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    />
  </svg>
);

export default Contact;
