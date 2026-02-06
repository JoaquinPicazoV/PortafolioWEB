import { React } from 'react';
import NMAP from '../assets/logos/nmap.png';
import HYDRA from '../assets/logos/hydra.png';
import METASPLOIT from '../assets/logos/metasploit.png';
import JOHN from '../assets/logos/john.png';
import MAS from '../assets/logos/mas.png';
import KALI from '../assets/logos/kali.png';
import REACT from '../assets/logos/react.svg';
import TAILWINDCSS from '../assets/logos/tailwindcss.png';
import JS from '../assets/logos/js.png';
import HTML from '../assets/logos/html.png';
import EXCEL from '../assets/logos/excel.png';

function NETANDCYB() {
  const projects = [
    {
      title: "Writeups máquinas vulneradas para eJPTv2 (+50)",
      subtitle: "Realizo mis propios writeups de las máquinas vulneradas en entornos controlados para preparación de la certificación eJPTv2.",
      url: "https://github.com/JoaquinPicazoV/Writeups-Maquinas-eJPTv2",
      languages: [
        { name: "Kali Linux", logo: KALI },
        { name: "Nmap", logo: NMAP },
        { name: "Hydra", logo: HYDRA },
        { name: "Metasploit", logo: METASPLOIT },
        { name: "John", logo: JOHN },
        { name: "Otras herramientas", logo: MAS }
      ]
    },
    {
      title: "Buscador de Vulnerabilidades CVE",
      subtitle: "Buscador de CVEs mediante el uso de la API de NVD. Además de acceder al CVE, podría mostrar detalles relevantes para un pentester, como una breve descripción, severidad, vector de ataque CVSS, CWE asociado, detalles de ataque (medio de ataque, complejidad y si requiere privilegios), entre otros.",
      url: "https://github.com/JoaquinPicazoV/Buscador-CVEs",
      languages: [
        { name: "React", logo: REACT },
        { name: "Tailwindcss", logo: TAILWINDCSS },
        { name: "JS", logo: JS },
        { name: "HTML", logo: HTML },
      ]
    },
    {
      title: "Excel técnicas y vulnerabilidades máquinas para eJPTv2",
      subtitle: "Listado de máquinas para eJPTv2 de forma detallada: dificultad, sistema operativo, técnicas y vulnerabilidades.",
      url: "https://docs.google.com/spreadsheets/d/1gsqUpy1JD9BvEVzW6hf2StR2F8PbDi50OESjaN-8K_E/edit?usp=sharing",
      languages: [
        { name: "Excel", logo: EXCEL },
      ]
    },

  ];

  return (
    <div className="w-full flex justify-center items-center py-20 bg-slate-900 relative border-t border-slate-800">

      <div className="w-full md:w-5/6 z-10">
        <div className="flex flex-col justify-center items-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Proyectos</h1>
          <div className="h-1 w-20 bg-red-500 rounded-full"></div>
        </div>

        <div className="w-full overflow-x-auto pb-8 custom-scrollbar">
          <div className="flex gap-6 justify-start px-4">
            {projects.map((project, index) => (
              <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl shadow-xl min-w-[320px] w-[320px] hover:border-red-500/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between" key={index}>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 mt-3 text-sm leading-relaxed">{project.subtitle}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.languages.map((language, i) => (
                      <div key={i} className="flex items-center bg-slate-700/50 px-3 py-1 rounded-full text-xs text-slate-300 border border-slate-600">
                        <img src={language.logo} className="h-4 w-4 object-contain mr-2" />
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

export default NETANDCYB;
