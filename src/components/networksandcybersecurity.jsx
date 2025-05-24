import React from 'react';
import IconoReact from '../assets/react.svg';
import MRROBOT from '../assets/machines/mrrobot.jpeg';
import COLDDBOX from '../assets/machines/colddbox.png';
import BASICPENTESTING from '../assets/machines/basicpentesting.png';
import BOLT from '../assets/machines/bolt.png';

function CYBERPROJECTS() {
  const proyectos = [
    {
      imagen: MRROBOT,
      titulo: 'Máquina "Mr Robot CTF"',
      dificultad: "Media",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: COLDDBOX,
      titulo: 'Máquina "Colddbox: Easy"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: BASICPENTESTING,
      titulo: 'Máquina "Basic Pentesting"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: BOLT,
      titulo: 'Máquina "Bolt"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: IconoReact,
      titulo: 'Máquina "Vulnversity"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: IconoReact,
      titulo: 'Máquina "Pickle Rick"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: IconoReact,
      titulo: 'Máquina "TakeOver"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: IconoReact,
      titulo: 'Máquina "Startup"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: IconoReact,
      titulo: 'Máquina "Chocolate Factory"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: IconoReact,
      titulo: 'Máquina "Chill hack"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: IconoReact,
      titulo: 'Máquina "Easy Peasy"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: IconoReact,
      titulo: 'Máquina "Blog"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: IconoReact,
      titulo: 'Máquina "Corridor"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: IconoReact,
      titulo: 'Máquina "Ignite"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: IconoReact,
      titulo: 'Máquina "Blue"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Windows",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: IconoReact,
      titulo: 'Máquina "Root Me"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: IconoReact,
      titulo: 'Máquina "Ice"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Windows",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: IconoReact,
      titulo: 'Máquina "Blaster"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Windows",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: IconoReact,
      titulo: 'Máquina "Psycho"',
      dificultad: "Fácil",
      plataforma: "Dockerlabs",
      sistemaOperativo: "Linux",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: IconoReact,
      titulo: 'Máquina "Injection"',
      dificultad: "Muy fácil",
      plataforma: "Dockerlabs",
      sistemaOperativo: "Linux",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: IconoReact,
      titulo: 'Máquina "BorazuwarahCTF"',
      dificultad: "Muy fácil",
      plataforma: "Dockerlabs",
      sistemaOperativo: "Linux",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: IconoReact,
      titulo: 'Máquina "BreakMySSH"',
      dificultad: "Muy fácil",
      plataforma: "Dockerlabs",
      sistemaOperativo: "Linux",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: IconoReact,
      titulo: 'Máquina "FirstHacking"',
      dificultad: "Muy fácil",
      plataforma: "Dockerlabs",
      sistemaOperativo: "Linux",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: IconoReact,
      titulo: 'Máquina "Obsession"',
      dificultad: "Muy fácil",
      plataforma: "Dockerlabs",
      sistemaOperativo: "Linux",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: IconoReact,
      titulo: 'Máquina "Trust"',
      dificultad: "Muy fácil",
      plataforma: "Dockerlabs",
      sistemaOperativo: "Linux",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: IconoReact,
      titulo: 'Máquina "Vacaciones"',
      dificultad: "Muy fácil",
      plataforma: "Dockerlabs",
      sistemaOperativo: "Linux",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: IconoReact,
      titulo: 'Máquina "Tproot"',
      dificultad: "Muy fácil",
      plataforma: "Dockerlabs",
      sistemaOperativo: "Linux",
      pdf: "/pdf/archivo.pdf"
    },
    {
      imagen: IconoReact,
      titulo: 'Máquina "HedgeHog"',
      dificultad: "Muy fácil",
      plataforma: "Dockerlabs",
      sistemaOperativo: "Linux",
      pdf: "/pdf/archivo.pdf"
    },
    

  ];

  return (
    <div className="w-full flex justify-center items-center py-8">
      <div className="w-full md:w-2/3">
        <div className="flex justify-center items-center mb-4">
          <h1 className="bg-blue-100 p-1 text-[rgba(4,105,161,1)] font-bold inline-block">Proyectos - Redes y Ciberseguridad</h1>
        </div>
        <div className="w-full overflow-x-auto flex gap-4 p-4">
          <div className="flex gap-4 justify-start">
            {proyectos.map((proyecto, indice) => (
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-lg w-[300px]" key={indice}>
                <img src={proyecto.imagen} className="h-24 w-full object-contain mb-2" alt="Vista del proyecto" />
                <h3 className="text-xl font-bold text-gray-800">{proyecto.titulo}</h3>
                <p className="text-gray-600 mt-2 text-sm"><strong>Dificultad:</strong> {proyecto.dificultad}</p>
                <p className="text-gray-600 text-sm"><strong>Plataforma:</strong> {proyecto.plataforma}</p>
                <p className="text-gray-600 text-sm"><strong>Sistema Operativo:</strong> {proyecto.sistemaOperativo}</p>
                <div className="mt-4">
                  <a
                    href={proyecto.pdf}
                    download
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                  >
                    Descargar Write-Up
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

export default CYBERPROJECTS;
