import { React } from 'react';
import fotoPerfil from '../assets/fotoPerfil.png'

function INTRODUCTION() {

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center bg-transparent p-4 md:p-10 relative overflow-hidden">

      {/* Decorative background grid is now handled globally */}

      <div className="w-full md:w-1/2 flex justify-center items-center z-10 mb-8 md:mb-0">
        <div className="relative group">
          <div className="relative flex justify-center text-center items-center bg-black border border-emerald-500/30 p-2 group-hover:border-emerald-500 transition-all duration-500">
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-emerald-500"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-emerald-500"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-emerald-500"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-emerald-500"></div>
            <img src={fotoPerfil} alt="ImagenPerfil" className="flex w-32 h-32 sm:w-48 sm:h-48 md:w-80 md:h-80 object-cover object-top transition-all duration-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]"></img>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0 z-10 text-left">
        <div className="font-mono text-emerald-500 mb-2 font-bold flex items-center text-sm md:text-base">
          <div><span className="text-slate-500">guest@portfolio:~$</span> whoami</div>
        </div>
        <div>
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-mono tracking-tighter uppercase cyber-glitch-hover inline-block cursor-default">
            Joaquín Picazo
          </h1>
          <h2 className="text-base sm:text-lg md:text-2xl text-slate-300 font-mono mb-8 border-l-4 border-emerald-500 pl-4 bg-emerald-500/5 py-2">
            [<span className="text-emerald-400">ROLE</span>: Estudiante Ing. Civil Informática]
          </h2>
          <p className="text-slate-400 mb-5 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
            Soy estudiante de último semestre de Ingeniería Civil en Informática, especializándome en <strong>Ciberseguridad</strong> y con la certificación <strong>eJPTv2</strong>. Mi base en desarrollo y redes me permite analizar arquitecturas con una mentalidad tanto de defensor como de atacante.
          </p>
          <p className="text-slate-400 mb-5 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
            He vulnerado y documentado más de 50 máquinas (entornos controlados). En la actualidad me preparo para la certificación <strong>CRTA</strong>, complementando mi perfil con formación activa en normativas <strong>GRC y estrategias de detección y defensa</strong>, incluyendo prácticas en simulaciones de centros de operaciones de seguridad (<strong>SOC</strong>).
          </p>
        </div>
      </div>
    </div>
  )
}

export default INTRODUCTION;
