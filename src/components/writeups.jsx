import React from 'react';
import { writeupsData } from '../data/writeups';

function WRITEUPS() {
  return (
    <div className="w-full flex justify-center items-center py-12 md:py-20 bg-slate-900 relative border-t border-slate-800">

      <div className="w-full md:w-5/6 z-10">
        <div className="flex flex-col justify-center items-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Writeups</h1>
          <div className="h-1 w-20 bg-red-500 rounded-full"></div>
        </div>

        <div className="w-full overflow-x-auto pb-8 custom-scrollbar">
          <div className="flex gap-6 justify-start px-4">
            {writeupsData.map((proyecto, indice) => (
              <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-5 rounded-2xl shadow-xl min-w-[300px] w-[300px] hover:border-red-500/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between" key={indice}>
                <div>
                  <div className="rounded-xl overflow-hidden mb-4 border border-slate-700 bg-slate-900/50 group-hover:border-slate-600 transition-colors flex items-center justify-center p-2">
                    <img src={proyecto.imagen} className="h-40 w-full object-contain transform group-hover:scale-105 transition-transform duration-500" alt="Vista del proyecto" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors mb-4">{proyecto.titulo}</h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center bg-slate-700/30 p-2 rounded-lg">
                      <span className="text-xs text-slate-400 font-medium">Dificultad</span>
                      <span className={`text-xs px-2 py-1 rounded-full font-bold ${proyecto.dificultad === 'Fácil' || proyecto.dificultad === 'Muy fácil' ? 'bg-green-500/20 text-green-400' :
                        proyecto.dificultad === 'Media' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-red-500/20 text-red-500'
                        }`}>{proyecto.dificultad}</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-700/30 p-2 rounded-lg">
                      <span className="text-xs text-slate-400 font-medium">Plataforma</span>
                      <span className="text-xs text-slate-200 font-medium">{proyecto.plataforma}</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-700/30 p-2 rounded-lg">
                      <span className="text-xs text-slate-400 font-medium">SO</span>
                      <span className="text-xs text-slate-200 font-medium">{proyecto.sistemaOperativo}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <a href={proyecto.pdf} download className="block">
                    <button className="w-full bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 font-medium flex items-center justify-center gap-2 text-sm group-hover:shadow-lg group-hover:shadow-red-500/20">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Descargar PDF
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WRITEUPS;
