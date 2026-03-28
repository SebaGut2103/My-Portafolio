import React from "react";
import PixelBlast from "../../component/ui/pixelBlast/PixelBlast";

const Landing: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-slate-950 overflow-hidden">
      {/* PixelBlast Background — ocupa todo y recibe los eventos */}
      <div className="absolute inset-0 z-0">
        <PixelBlast
          variant="square"
          color="#22d3ee"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0.3}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* Capa de contenido: pointer-events-none para que los clicks pasen al canvas */}
      <div className="pointer-events-none relative z-10 flex flex-col items-center justify-center h-full px-4 text-slate-100">
        <div className="text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-cyan-300 via-sky-400 to-cyan-500 bg-clip-text text-transparent">
            Bienvenido a mi Portafolio
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300/90 mb-10 max-w-2xl mx-auto">
            Desarrollador de Software Junior
          </p>

          {/* CTA Buttons — re-habilitar pointer-events solo en los botones */}
          <div className="pointer-events-auto flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
            >
              Ver mi trabajo
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border-2 border-cyan-400/70 hover:border-cyan-300 text-cyan-100 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contactarme
            </a>
          </div>
        </div>

      

        {/* Scroll Indicator */}
        <div className="pointer-events-auto absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-8 h-8 text-cyan-400/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Landing;
