import { React } from 'react';
import ReactIcon from '../assets/logos/react.svg';
import HTML from '../assets/logos/html.png';
import CSS from '../assets/logos/css.png';
import JS from '../assets/logos/js.png';
import TAILWINDCSS from '../assets/logos/tailwindcss.png';
import NODE from '../assets/logos/node.png';
import POSTGRESQL from '../assets/logos/postgresql.png';
import FLUTTER from '../assets/logos/flutter.png';
import DART from '../assets/logos/dart.png';
import FIREBASE from '../assets/logos/firebase.png';
import EXPRESS from '../assets/logos/express.png';
import NEON from '../assets/logos/neon.png';

function PROJECTS() {
  const projects = [
    {
      image: ReactIcon,
      title: "Sistema Estacionamiento (Mobile)",
      subtitle: "Aplicación móvil para realizar y gestionar reservas de estacionamiento.",
      languages: [{ name: "Dart", logo: DART }, { name: "Flutter", logo: FLUTTER }, { name: "PostgreSQL", logo: POSTGRESQL }, { name: "Neon", logo: NEON }]
    },
    {
      image: ReactIcon,
      title: 'Simulador de postulaciones con PAES',
      subtitle: "[TENGO QUE HACER MINI DESCR.]",
      languages: [{ name: "React", logo: ReactIcon }, { name: "Tailwindcss", logo: TAILWINDCSS }, { name: "Node.js", logo: NODE }, { name: "Express.js", logo: EXPRESS }, { name: "PostgreSQL", logo: POSTGRESQL }, { name: "Neon", logo: NEON }]
    },
    {
      image: ReactIcon,
      title: 'Juego memorice "Spaceduo" (mobile)',
      subtitle: "[TENGO QUE HACER MINI DESCR.]",
      languages: [{ name: "Dart", logo: DART }, { name: "Flutter", logo: FLUTTER }, { name: "Firebase", logo: FIREBASE }]
    },
    {
      image: ReactIcon,
      title: 'Juego memorice "Logo Match Game" (web)',
      subtitle: "[TENGO QUE HACER MINI DESCR.]",
      languages: [{ name: "HTML", logo: HTML }, { name: "CSS", logo: CSS }, { name: "Javascript", logo: JS }, { name: "Node.js", logo: NODE }, { name: "PostgreSQL", logo: POSTGRESQL }]
    },
    {
      image: ReactIcon,
      title: "Portafolio",
      subtitle: "Portafolio web desplegado con Vercel.",
      languages: [{ name: "React", logo: ReactIcon }, { name: "Tailwindcss", logo: TAILWINDCSS }]
    },
    {
      image: ReactIcon,
      title: "Calculadora de IMC",
      subtitle: "[TENGO QUE HACER MINI DESCR.]",
      languages: [{ name: "HTML", logo: HTML }, { name: "CSS", logo: CSS }, { name: "Javascript", logo: JS }]
    },
    {
      image: ReactIcon,
      title: "Generador de contraseñas",
      subtitle: "[TENGO QUE HACER MINI DESCR.]",
      languages: [{ name: "HTML", logo: HTML }, { name: "CSS", logo: CSS }, { name: "Javascript", logo: JS }]
    },
    {
      image: ReactIcon,
      title: "Apuntes de introducción a Javascript",
      subtitle: "Hago apuntes con los fundamentos de Javascript.",
      languages: [{ name: "Javascript", logo: JS }]
    },
    {
      image: ReactIcon,
      title: "Calculadora",
      subtitle: "[TENGO QUE HACER MINI DESCR.]",
      languages: [{ name: "HTML", logo: HTML }, { name: "CSS", logo: CSS }, { name: "Javascript", logo: JS }]
    },
    {
      image: ReactIcon,
      title: "Teclado interactivo",
      subtitle: "[TENGO QUE HACER MINI DESCR.]",
      languages: [{ name: "HTML", logo: HTML }, { name: "CSS", logo: CSS }, { name: "Javascript", logo: JS }]
    },
    {
      image: ReactIcon,
      title: "Sidebar",
      subtitle: "[TENGO QUE HACER MINI DESCR.]",
      languages: [{ name: "HTML", logo: HTML }, { name: "CSS", logo: CSS }, { name: "Javascript", logo: JS }]
    },
    {
      image: ReactIcon,
      title: "Botón",
      subtitle: "[TENGO QUE HACER MINI DESCR.]",
      languages: [{ name: "HTML", logo: HTML }, { name: "CSS", logo: CSS }, { name: "Javascript", logo: JS }]
    },
    {
      image: ReactIcon,
      title: "ToggleSwitch",
      subtitle: "[TENGO QUE HACER MINI DESCR.]",
      languages: [{ name: "HTML", logo: HTML }, { name: "CSS", logo: CSS }, { name: "Javascript", logo: JS }]
    },
    {
      image: ReactIcon,
      title: "Web comida rápida",
      subtitle: "[TENGO QUE HACER MINI DESCR.]",
      languages: [{ name: "HTML", logo: HTML }, { name: "CSS", logo: CSS }, { name: "Javascript", logo: JS }]
    },
    {
      image: ReactIcon,
      title: "Web producto",
      subtitle: "[TENGO QUE HACER MINI DESCR.]",
      languages: [{ name: "HTML", logo: HTML }, { name: "CSS", logo: CSS }, { name: "Javascript", logo: JS }]
    },
    {
      image: ReactIcon,
      title: "Background",
      subtitle: "[TENGO QUE HACER MINI DESCR.]",
      languages: [{ name: "HTML", logo: HTML }, { name: "CSS", logo: CSS }, { name: "Javascript", logo: JS }]
    },
    {
      image: ReactIcon,
      title: "Videos",
      subtitle: "[TENGO QUE HACER MINI DESCR.]",
      languages: [{ name: "HTML", logo: HTML }, { name: "CSS", logo: CSS }, { name: "Javascript", logo: JS }]
    },
    {
      image: ReactIcon,
      title: "Web de carga",
      subtitle: "[TENGO QUE HACER MINI DESCR.]",
      languages: [{ name: "HTML", logo: HTML }, { name: "CSS", logo: CSS }, { name: "Javascript", logo: JS }]
    },
    {
      image: ReactIcon,
      title: "Simulador básico de transacciones bancarias",
      subtitle: "[TENGO QUE HACER MINI DESCR.]",
      languages: [{ name: "Javascript", logo: JS }]
    },
    {
      image: ReactIcon,
      title: "Simulador básico de inventario de biblioteca",
      subtitle: "[TENGO QUE HACER MINI DESCR.]",
      languages: [{ name: "Javascript", logo: JS }]
    },
    {
      image: ReactIcon,
      title: "Simulador básico de interacción en RR.SS",
      subtitle: "[TENGO QUE HACER MINI DESCR.]",
      languages: [{ name: "Javascript", logo: JS }]
    },
    

  ];

  return (
    <div className="w-full flex justify-center items-center py-8">
      <div className="w-full md:w-2/3">
        <div className="flex justify-center items-center mb-4">
          <h1 className="bg-blue-100 p-1 text-[rgba(4,105,161,1)] font-bold inline-block">Proyectos - Desarrollo</h1>
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

export default PROJECTS;
