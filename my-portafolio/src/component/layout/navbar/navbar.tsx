const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-semibold text-slate-100">
          Sebas
        </a>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-white">Sobre mí</a>
          <a href="#mission" className="transition hover:text-white">Misión</a>
          <a href="#projects" className="transition hover:text-white">Proyectos</a>
          <a href="#contact" className="transition hover:text-white">Contacto</a>
        </nav>
        <a href="#contact" className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-slate-200">
          Contáctame
        </a>
      </div>
    </header>
  );
};

export default Navbar;
