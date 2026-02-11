import { React } from 'react';
import { otherProjects } from '../data/projects';

function PROJECTS() {
  return (
    <div className="w-full flex justify-center items-center py-12 md:py-20 bg-slate-900 relative">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-blue-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="w-full md:w-5/6 z-10">
        <div className="flex flex-col justify-center items-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">Otros proyectos</h1>
          <div className="h-1 w-20 bg-red-500 rounded-full"></div>
        </div>

        <div className="w-full overflow-x-auto pb-8 custom-scrollbar">
          <div className="flex gap-6 justify-start px-4">
            {otherProjects.map((project, index) => (
              <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl shadow-xl min-w-[320px] w-[320px] hover:border-red-500/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between" key={index}>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 mt-3 text-sm leading-relaxed">{project.subtitle}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.languages.map((language, i) => (
                      <div key={i} className="flex items-center bg-slate-700/50 px-3 py-1 rounded-full text-xs text-slate-300 border border-slate-600">
                        <img src={language.logo} className={`h-4 w-4 object-contain mr-2 ${language.name === 'Express.js' ? 'invert brightness-0' : ''}`} />
                        <p>{language.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-6 block">
                    <button className="w-full bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 font-medium flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-red-500/20">
                      <span>Ver Proyecto</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PROJECTS;
