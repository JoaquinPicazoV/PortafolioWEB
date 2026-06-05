import { React } from 'react';
import { Link } from 'react-router-dom';
import { cybProjects } from '../data/netandcyb';

function NETANDCYB() {
  return (
    <div id="proyectos" className="w-full flex justify-center items-center py-12 md:py-20 bg-transparent relative border-t border-slate-800">

      <div className="w-full md:w-5/6 z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 px-4 border-b border-white/10 pb-4">
          <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-white font-mono uppercase tracking-widest cyber-glitch-hover cursor-default w-fit flex flex-row flex-wrap items-center gap-2 md:gap-3 max-w-full"><span className="text-emerald-500 shrink-0">{'>'}</span> <span>[ CIBERSEGURIDAD ]</span></h1>
          <div className="flex items-center gap-2 mt-4 md:mt-0 font-mono text-sm text-slate-500">
            <span>[</span> DESLIZAR PARA VER <span>]</span>
          </div>
        </div>

        <div className="w-full overflow-x-auto pb-8 custom-scrollbar snap-x snap-mandatory">
          <div className="flex gap-4 md:gap-6 justify-start px-4 md:px-0 w-max md:w-full">
            {cybProjects.map((project, index) => (
              <div className="group cyber-shine bg-black/80 backdrop-blur-md border border-white/10 border-l-4 border-l-transparent hover:border-l-emerald-500 p-5 md:p-6 hover:bg-[#050505] hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all duration-300 flex flex-col justify-between w-[85vw] max-w-[320px] md:w-[320px] shrink-0 snap-center relative animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }} key={index}>
                <div className="absolute top-0 right-0 p-2 font-mono text-xs text-slate-600 group-hover:text-emerald-500/50">+{index + 1}</div>
                <div>
                  <span className="text-xs px-2 py-1 font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">{project.difficulty}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mt-2">{project.title}</h3>
                  <p className="text-slate-400 mt-3 text-sm leading-relaxed">{project.subtitle}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.languages?.map((language, i) => (
                      <div key={i} className="flex items-center bg-white/5 px-3 py-1 text-xs font-mono text-slate-300 border border-white/10">
                        <img src={language.logo} loading="lazy" className={`h-4 sm:h-5 w-auto max-w-[60px] object-contain mr-2 drop-shadow-[0_0_1px_rgba(255,255,255,0.3)] ${language.name === 'Any.Run' ? 'bg-white rounded-sm px-1 py-0.5' : ''}`} />
                        <p>{language.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {project.internalUrl ? (
                  <Link to={project.internalUrl} className="mt-6 block">
                    <button className="w-full bg-white/5 text-white px-4 py-2 rounded-lg border border-white/10 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300 font-medium flex items-center justify-center gap-2">
                      <span>Ver Proyecto</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </Link>
                ) : project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-6 block">
                    <button className="w-full bg-white/5 text-white px-4 py-2 rounded-lg border border-white/10 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300 font-medium flex items-center justify-center gap-2">
                      <span>Ver Proyecto</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NETANDCYB;
