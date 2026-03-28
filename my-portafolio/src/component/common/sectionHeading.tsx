interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ label, title, description }: SectionHeadingProps) => {
  return (
    <div className="mb-12 text-center">
      <span className="text-sm uppercase tracking-[0.35em] text-cyan-300">{label}</span>
      <h2 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-300">{description}</p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
