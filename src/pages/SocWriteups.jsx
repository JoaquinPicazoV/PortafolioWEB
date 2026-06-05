import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { socWriteupsData } from '../data/socWriteups';
import FOOTER from '../components/footer';

function SocWriteups() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white flex flex-col">
      <div className="flex-grow pt-12 md:pt-20 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center mb-8 md:mb-12 border-b border-white/10 pb-4 px-2">
          <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-white font-mono uppercase tracking-widest text-center flex flex-row flex-wrap items-center justify-center gap-2 md:gap-3 w-fit mx-auto max-w-full"><span className="text-emerald-500 shrink-0">{'>'}</span> <span className="text-center">[ WRITEUPS: SOC ]</span></h1>
        </div>

        {/* Legal Disclaimer */}
        <div className="bg-red-500/5 border border-red-500/20 p-4 md:p-6 mb-8 text-sm text-slate-400 leading-relaxed relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-red-500/50"></div>
          <div className="flex flex-col sm:flex-row items-start gap-3">
            <span className="text-red-400 font-bold font-mono whitespace-nowrap mt-0.5">⚠️ AVISO LEGAL:</span>
            <p>
              Todo el contenido tiene fines estrictamente <strong>educativos y profesionales</strong>. Las técnicas y herramientas documentadas fueron ejecutadas en entornos de laboratorio controlados y autorizados. El autor se exime de forma absoluta de toda responsabilidad legal, civil o penal por el uso indebido, ilícito o malintencionado que terceros hagan de esta información.
            </p>
          </div>
        </div>
          
          <Link 
            to="/#proyectos"
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-10 md:right-10 bg-black border-l-4 border-l-emerald-500 text-white px-4 py-2 sm:px-6 sm:py-3 hover:bg-[#050505] transition-all duration-300 font-mono text-xs sm:text-sm uppercase font-bold z-50 flex items-center gap-2 border-y border-r border-white/10"
          >
            <span className="text-emerald-500 font-bold">{'<'}</span> [ VOLVER AL INICIO ]
          </Link>

        {/* Content Section */}
        {socWriteupsData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {socWriteupsData.map((simulacion, indice) => (
              <div className="group cyber-shine bg-black/80 backdrop-blur-md border border-white/10 border-l-4 border-l-transparent hover:border-l-emerald-500 p-4 sm:p-5 hover:bg-[#050505] hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all duration-300 flex flex-col justify-between relative animate-fade-in-up" style={{ animationDelay: `${indice * 100}ms` }} key={indice}>
                <div className="absolute top-0 right-0 p-2 font-mono text-xs text-slate-600 group-hover:text-emerald-500/50">+{indice + 1}</div>
                <div>
                  <div className="mb-4 border border-white/5 bg-white/5 flex items-center justify-center p-2">
                    <img src={simulacion.imagen} loading="lazy" className="h-40 w-full object-contain transform group-hover:scale-105 transition-transform duration-500" alt="Vista de la simulación" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mb-4">{simulacion.titulo}</h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center bg-white/5 p-2 rounded-lg">
                      <span className="text-xs text-slate-400 font-medium">Dificultad</span>
                      <span className={`text-xs px-2 py-1 font-mono font-bold border ${simulacion.dificultad === 'Fácil' || simulacion.dificultad === 'Muy fácil' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                        simulacion.dificultad === 'Media' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' : 'bg-red-500/10 text-red-500 border-red-500/20'
                        }`}>{simulacion.dificultad}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-2 border-t border-white/10">
                      <span className="text-xs text-slate-400 font-mono">PLATAFORMA</span>
                      <span className="text-xs text-slate-200 font-medium text-right font-mono">{simulacion.plataforma}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <a href={simulacion.pdf} download className="block">
                    <button className="w-full bg-white/5 text-white px-4 py-2 hover:bg-emerald-600 transition-all duration-300 font-mono text-sm uppercase font-bold flex items-center justify-center gap-2 border border-white/10">
                      [ DESCARGAR PDF ]
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 bg-black/80 border border-white/10 border-l-4 border-l-slate-500 w-full">
            <h3 className="text-xl font-mono text-slate-300 mb-2 font-bold uppercase tracking-widest">[ PROXIMAMENTE ]</h3>
            <p className="text-slate-500 text-center max-w-md font-mono text-sm">
              Actualmente estoy trabajando en simulaciones SOC. Pronto subiré mis reportes y análisis a esta sección.
            </p>
          </div>
        )}
        </div>
      </div>
      <FOOTER />
    </div>
  );
}

export default SocWriteups;
