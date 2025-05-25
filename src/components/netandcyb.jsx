import { React } from 'react';
import PACKET from '../assets/logos/packet.png';

function NETANDCYB() {
  const projects = [
    {
      title: "Conexión LAN-WAN",
      subtitle: "Redes LAN interconectadas por WAN entre ciudades (sin medidas de seguridad).",
      languages: [{ name: "Packet Tracer", logo: PACKET }]
    }
    

  ];

  return (
    <div className="w-full flex justify-center items-center py-8">
      <div className="w-full md:w-2/3">
        <div className="flex justify-center items-center mb-4">
          <h1 className="bg-blue-100 p-1 text-[rgba(4,105,161,1)] font-bold inline-block">Proyectos - Redes y Ciberseguridad</h1>
        </div>
        <div className="w-full overflow-x-auto flex gap-4 p-4">
          <div className="flex gap-4 justify-start ">
            {projects.map((project, index) => (
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-lg w-[300px]" key={index}>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NETANDCYB;
