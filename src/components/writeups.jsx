import React from 'react';
import IconoReact from '../assets/logos/react.svg';
import MRROBOT from '../assets/machines/mrrobot.jpeg';
import COLDDBOX from '../assets/machines/colddbox.png';
import BASICPENTESTING from '../assets/machines/basicpentesting.png';
import BOLT from '../assets/machines/bolt.png';
import VULN from '../assets/machines/vulnversity.png';
import PICKLE from '../assets/machines/picklerick.jpeg';
import TAKEOVER from '../assets/machines/takeover.png';
import STARTUP from '../assets/machines/startup.png';
import CHOCOLATE from '../assets/machines/chocolatefactory.jpeg';
import CHILLHACK from '../assets/machines/chillhack.png';
import EASYPEASY from '../assets/machines/easypeasy.png';
import BLOG from '../assets/machines/blog.png';
import CORRIDOR from '../assets/machines/corridor.png';
import IGNITE from '../assets/machines/ignite.png';
import BLUE from '../assets/machines/blue.gif';
import ROOTME from '../assets/machines/rootme.png';
import ICE from '../assets/machines/ice.png';
import BLASTER from '../assets/machines/blaster.png';
import DOCKERLABSDEFAULT from '../assets/machines/dockerlabsdefault.png';
import TPROOT from '../assets/machines/tproot.webp';



function WRITEUPS() {
  const proyectos = [
    // {
    //   imagen: MRROBOT,
    //   titulo: 'Máquina "Mr Robot CTF"',
    //   dificultad: "Media",
    //   plataforma: "TryHackMe",
    //   sistemaOperativo: "Linux",
    //   pdf: "/writeups/THM/.pdf"
    // },
    {
      imagen: COLDDBOX,
      titulo: 'Máquina "Colddbox: Easy"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/writeups/THM/ColddBox_Easy.pdf"
    },
    {
      imagen: BASICPENTESTING,
      titulo: 'Máquina "Basic Pentesting"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/writeups/THM/Basic_Pentesting.pdf"
    },
    // {
    //   imagen: BOLT,
    //   titulo: 'Máquina "Bolt"',
    //   dificultad: "Fácil",
    //   plataforma: "TryHackMe",
    //   sistemaOperativo: "Linux",
    //   pdf: "/writeups/THM/.pdf"
    // },
    {
      imagen: VULN,
      titulo: 'Máquina "Vulnversity"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/writeups/THM/Vulnversity.pdf"
    },
    {
      imagen: PICKLE,
      titulo: 'Máquina "Pickle Rick"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/writeups/THM/Pickle_Rick.pdf"
    },
    {
      imagen: TAKEOVER,
      titulo: 'Máquina "TakeOver"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/writeups/THM/TakeOver.pdf"
    },
    {
      imagen: STARTUP,
      titulo: 'Máquina "Startup"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/writeups/THM/Startup.pdf"
    },
    {
      imagen: CHOCOLATE,
      titulo: 'Máquina "Chocolate Factory"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/writeups/THM/Chocolate_Factory.pdf"
    },
    {
      imagen: CHILLHACK,
      titulo: 'Máquina "Chill hack"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/writeups/THM/Chill_Hack.pdf"
    },
    {
      imagen: EASYPEASY,
      titulo: 'Máquina "Easy Peasy"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/writeups/THM/Easy_Peasy.pdf"
    },
    // {
    //   imagen: BLOG,
    //   titulo: 'Máquina "Blog"',
    //   dificultad: "Fácil",
    //   plataforma: "TryHackMe",
    //   sistemaOperativo: "Linux",
    //   pdf: "/writeups/THM/.pdf"
    // },
    // {
    //   imagen: CORRIDOR,
    //   titulo: 'Máquina "Corridor"',
    //   dificultad: "Fácil",
    //   plataforma: "TryHackMe",
    //   sistemaOperativo: "Linux",
    //   pdf: "/writeups/THM/.pdf"
    // },
    {
      imagen: IGNITE,
      titulo: 'Máquina "Ignite"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/writeups/THM/Ignite.pdf"
    },
    {
      imagen: BLUE,
      titulo: 'Máquina "Blue"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Windows",
      pdf: "/writeups/THM/Blue.pdf"
    },
    {
      imagen: ROOTME,
      titulo: 'Máquina "RootMe"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/writeups/THM/Root_Me.pdf"
    },
    {
      imagen: ICE,
      titulo: 'Máquina "Ice"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Windows",
      pdf: "/writeups/THM/ICE.pdf"
    },
    // {
    //   imagen: BLASTER,
    //   titulo: 'Máquina "Blaster"',
    //   dificultad: "Fácil",
    //   plataforma: "TryHackMe",
    //   sistemaOperativo: "Windows",
    //   pdf: "/writeups/THM/.pdf"
    // },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Psycho"',
      dificultad: "Fácil",
      plataforma: "Dockerlabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Psycho.pdf"
    },
    // {
    //   imagen: DOCKERLABSDEFAULT,
    //   titulo: 'Máquina "Injection"',
    //   dificultad: "Muy fácil",
    //   plataforma: "Dockerlabs",
    //   sistemaOperativo: "Linux",
    //   pdf: "/writeups/Dockerlabs/.pdf"
    // },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "BorazuwarahCTF"',
      dificultad: "Muy fácil",
      plataforma: "Dockerlabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/BorazuwarahCTF.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "BreakMySSH"',
      dificultad: "Muy fácil",
      plataforma: "Dockerlabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/BreakMySSH.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "FirstHacking"',
      dificultad: "Muy fácil",
      plataforma: "Dockerlabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/FirstHacking.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Obsession"',
      dificultad: "Muy fácil",
      plataforma: "Dockerlabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Obsession.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Trust"',
      dificultad: "Muy fácil",
      plataforma: "Dockerlabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Trust.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Vacaciones"',
      dificultad: "Muy fácil",
      plataforma: "Dockerlabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Vacaciones.pdf"
    },
    {
      imagen: TPROOT,
      titulo: 'Máquina "Tproot"',
      dificultad: "Muy fácil",
      plataforma: "Dockerlabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Tproot.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "HedgeHog"',
      dificultad: "Muy fácil",
      plataforma: "Dockerlabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/HedgeHog.pdf"
    },
    

  ];

  return (
    <div className="w-full flex justify-center items-center py-8">
      <div className="w-full md:w-2/3">
        <div className="flex justify-center items-center mb-4">
          <h1 className="bg-blue-100 p-1 text-[rgba(4,105,161,1)] font-bold inline-block">Mis writeups - Pentesting</h1>
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

export default WRITEUPS;
