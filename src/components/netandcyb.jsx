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
    <div className="w-full flex justify-center items-center py-8">
      <div className="w-full md:w-2/3">
        <div className="flex justify-center items-center mb-4">
          <h1 className="bg-red-100 p-1 text-[#d32a2a] font-bold inline-block">Proyectos - Ciberseguridad</h1>
        </div>
        <div className="w-full overflow-x-auto flex gap-4 p-4">
          <div className="flex gap-4 justify-start ">
            {projects.map((project, index) => (
              <div className="bg-white p-6 border border-red-200 rounded-lg shadow-lg w-[300px]" key={index}>
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{project.subtitle}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.languages.map((language, i) => (
                    <div key={i} className="flex items-center bg-gray-100 px-2 py-1 rounded-full text-sm">
                      <img src={language.logo} className="h-5 object-contain mr-1" />
                      <p>{language.name}</p>
                    </div>
                  ))}
                </div>
                 {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <button className="mt-4 bg-[#d32a2a] text-white px-3 py-1 rounded hover:bg-red-700 cursor-pointer transition duration-200">
                      Ubicación
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
