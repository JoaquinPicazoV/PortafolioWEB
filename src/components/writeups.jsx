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
import IGNITE from '../assets/machines/ignite.png';
import BLUE from '../assets/machines/blue.gif';
import ROOTME from '../assets/machines/rootme.png';
import ICE from '../assets/machines/ice.png';
import BLASTER from '../assets/machines/blaster.png';

import DOCKERLABSDEFAULT from '../assets/machines/DockerLabs/dockerlabsdefault.png';
import TPROOT from '../assets/machines/DockerLabs/tproot.webp';
import BALULERO from '../assets/machines/DockerLabs/balulero.jpg';
import JENKHACK from '../assets/machines/DockerLabs/jenkhack.jpg';
import PRESSENTER from '../assets/machines/DockerLabs/pressenter.png';
import STELLARJWT from '../assets/machines/DockerLabs/Stellarjwt.jpg';
import VERDEJO from '../assets/machines/DockerLabs/verdejo.jpg';
import VULNVAULT from '../assets/machines/DockerLabs/vulnvault.jpg';



function WRITEUPS() {
  const proyectos = [
    {
      imagen: MRROBOT,
      titulo: 'Máquina "Mr Robot CTF"',
      dificultad: "Media",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/writeups/THM/Mr Robot CTF.pdf"
    },
    {
      imagen: BLOG,
      titulo: 'Máquina "Blog"',
      dificultad: "Media",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/writeups/THM/Blog.pdf"
    },
    {
      imagen: STELLARJWT,
      titulo: 'Máquina "Stellarjwt"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Stellarjwt.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Domain"',
      dificultad: "Media",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Domain.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "ChocolateFire"',
      dificultad: "Media",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/ChocolateFire.pdf"
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
    {
      imagen: BOLT,
      titulo: 'Máquina "Bolt"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/writeups/THM/Bolt.pdf"
    },
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
      imagen: ICE,
      titulo: 'Máquina "Ice"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Windows",
      pdf: "/writeups/THM/ICE.pdf"
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

    {
      imagen: IGNITE,
      titulo: 'Máquina "Ignite"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Linux",
      pdf: "/writeups/THM/Ignite.pdf"
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
      imagen: BLASTER,
      titulo: 'Máquina "Blaster"',
      dificultad: "Fácil",
      plataforma: "TryHackMe",
      sistemaOperativo: "Windows",
      pdf: "/writeups/THM/Blaster.pdf"
    },
    {
      imagen: VULNVAULT,
      titulo: 'Máquina "Vulnvault"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Vulnvault.pdf"
    },
    {
      imagen: PRESSENTER,
      titulo: 'Máquina "Pressenter"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Pressenter.pdf"
    },
    {
      imagen: JENKHACK,
      titulo: 'Máquina "JenkHack"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/JenkHack.pdf"
    },
    {
      imagen: VERDEJO,
      titulo: 'Máquina "Verdejo"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Verdejo.pdf"
    },
    {
      imagen: BALULERO,
      titulo: 'Máquina "Balulero"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Balulero.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Psycho"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Psycho.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "AguaDeMayo"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/AguaDeMayo.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Amor"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Amor.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "AnonymousPingu"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Anonymouspingu.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "ConsoleLog"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/ConsoleLog.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "DockerLabs"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Dockerlabs.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Escolares"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Escolares.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Pntopntobarra"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Pntopntobarra.pdf"
    },

    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "NodeClimb"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/NodeClimb.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Picadilly"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Picadilly.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "ShowTime"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/ShowTime.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Upload"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Upload.pdf"
    },

    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "WalkingCMS"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/WalkingCMS.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "WhereIsMyWebShell"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/WhereIsMyWebShell.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Whoiam"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Whoiam.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Winterfell"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Winterfell.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "-Pn"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/-Pn.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Mirame"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Mirame.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Backend"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Backend.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Paradise"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Paradise.pdf"
    },

    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Pequeñas Mentirosas"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Pequeñas-Mentirosas.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Allien"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Allien.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "FindYourStyle"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/FindYourStyle.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "File"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/File.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Elevator"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Elevator.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Extraviado"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Extraviado.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Patriaquerida"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Patriaquerida.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Internship"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Internship.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Walking Dead"',
      dificultad: "Fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Walking Dead.pdf"
    },
    {
      imagen: TPROOT,
      titulo: 'Máquina "Tproot"',
      dificultad: "Muy fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Tproot.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Injection"',
      dificultad: "Muy fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Injection.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "BorazuwarahCTF"',
      dificultad: "Muy fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/BorazuwarahCTF.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "BreakMySSH"',
      dificultad: "Muy fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/BreakMySSH.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "FirstHacking"',
      dificultad: "Muy fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/FirstHacking.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Obsession"',
      dificultad: "Muy fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Obsession.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Trust"',
      dificultad: "Muy fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Trust.pdf"
    },
    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "Vacaciones"',
      dificultad: "Muy fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/Vacaciones.pdf"
    },

    {
      imagen: DOCKERLABSDEFAULT,
      titulo: 'Máquina "HedgeHog"',
      dificultad: "Muy fácil",
      plataforma: "DockerLabs",
      sistemaOperativo: "Linux",
      pdf: "/writeups/Dockerlabs/HedgeHog.pdf"
    },


  ];

  return (
    <div className="w-full flex justify-center items-center py-20 bg-slate-900 relative border-t border-slate-800">

      <div className="w-full md:w-5/6 z-10">
        <div className="flex flex-col justify-center items-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Writeups</h1>
          <div className="h-1 w-20 bg-red-500 rounded-full"></div>
        </div>

        <div className="w-full overflow-x-auto pb-8 custom-scrollbar">
          <div className="flex gap-6 justify-start px-4">
            {proyectos.map((proyecto, indice) => (
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
