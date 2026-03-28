import React from "react";
import PixelBlast from "../../component/ui/pixelBlast/PixelBlast";

const Landing: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 overflow-hidden">
      {/* PixelBlast Background */}
      <div className="absolute inset-0 z-0">
        <PixelBlast
          variant="square"
          color="#0b6e74"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* Welcome Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <div className="text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_8px_24px_rgba(0,245,255,0.12)]">
            Welcome to My Portfolio
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-2xl mx-auto">
            Exploring to my
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#about"
              className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-400/30"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border-2 border-cyan-400 hover:border-cyan-300 text-cyan-100 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-8 h-8 text-purple-300"
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
