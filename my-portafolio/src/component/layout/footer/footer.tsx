const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Sebas. Todos los derechos reservados.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#home" className="transition hover:text-slate-100">Inicio</a>
          <a href="#about" className="transition hover:text-slate-100">Sobre mí</a>
          <a href="#contact" className="transition hover:text-slate-100">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
