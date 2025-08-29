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
      languages: [{ name: "Dart", logo: DART }, { name: "Flutter", logo: FLUTTER }, { name: "PostgreSQL", logo: POSTGRESQL }, { name: "Neon", logo: NEON }],
      url: "https://github.com/JoaquinPicazoV/Sistema-Estacionamiento-Mobile.git"
    },
    {
      image: ReactIcon,
      title: 'Simulador de postulaciones con PAES',
      subtitle: "Simulador de postulaciones a carreras universitarias con puntaje PAES + administración.",
      languages: [{ name: "React", logo: ReactIcon }, { name: "Tailwindcss", logo: TAILWINDCSS }, { name: "Node.js", logo: NODE }, { name: "Express.js", logo: EXPRESS }, { name: "PostgreSQL", logo: POSTGRESQL }, { name: "Neon", logo: NEON }],
      url: "https://github.com/JoaquinPicazoV/Simulador-Postulacion-PAES-Vercel.git"
    },
    {
      image: ReactIcon,
      title: 'Juego memorice "Spaceduo" (mobile)',
      subtitle: "Juego de memorice para android con temática del espacio.",
      languages: [{ name: "Dart", logo: DART }, { name: "Flutter", logo: FLUTTER }, { name: "Firebase", logo: FIREBASE }],
      url: "https://github.com/JoaquinPicazoV/Juego-Memorice-Spaceduo-Mobile.git"
    },
    {
      image: ReactIcon,
      title: 'Juego memorice "Logo Match Game" (web)',
      subtitle: "Juego de memorice web con temática de logos de lenguajes de programación.",
      languages: [{ name: "HTML", logo: HTML }, { name: "CSS", logo: CSS }, { name: "Javascript", logo: JS }, { name: "Node.js", logo: NODE }, { name: "PostgreSQL", logo: POSTGRESQL }],
      url: "https://github.com/JoaquinPicazoV/Juego-Memorice-Logo-Match-Game-WEB.git"
    },
    {
      image: ReactIcon,
      title: "Portafolio",
      subtitle: "Portafolio personal web desplegado con Vercel.",
      languages: [{ name: "React", logo: ReactIcon }, { name: "Tailwindcss", logo: TAILWINDCSS }],
      url: ""
    },
    {
      image: ReactIcon,
      title: "Calculadora de IMC",
      subtitle: "Calculadora de IMC usando peso y altura.",
      languages: [{ name: "HTML", logo: HTML }, { name: "CSS", logo: CSS }, { name: "Javascript", logo: JS }],
      url: "https://github.com/JoaquinPicazoV/Calculadora-IMC.git"
    },
    {
      image: ReactIcon,
      title: "Generador de contraseñas",
      subtitle: "Generador de contraseñas aleatorias en donde se puede elegir el largo y tipos de carácteres (mayúsculas, minúsculas, números, símbolos). También arroja que tan segura es.",
      languages: [{ name: "HTML", logo: HTML }, { name: "CSS", logo: CSS }, { name: "Javascript", logo: JS }],
      url: "https://github.com/JoaquinPicazoV/Generador-Contrasenas.git"
    },
    {
      image: ReactIcon,
      title: "Apuntes de introducción a Javascript",
      subtitle: "Hago apuntes con los fundamentos de Javascript.",
      languages: [{ name: "Javascript", logo: JS }],
      url: "https://github.com/JoaquinPicazoV/Apuntes-Introduccion-Javascript.git"
    },
    {
      image: ReactIcon,
      title: "Calculadora",
      subtitle: "Calculadora para operaciones simples",
      languages: [{ name: "HTML", logo: HTML }, { name: "CSS", logo: CSS }, { name: "Javascript", logo: JS }],
      url: "https://github.com/JoaquinPicazoV/Calculadora-Basica.git"
    },
    {
      image: ReactIcon,
      title: "Teclado interactivo",
      subtitle: "Simula un teclado que detecta la tecla presionada en el teclado físico.",
      languages: [{ name: "HTML", logo: HTML }, { name: "CSS", logo: CSS }, { name: "Javascript", logo: JS }],
      url: "https://github.com/JoaquinPicazoV/Teclado-Interactivo.git"
    },
    {
      image: ReactIcon,
      title: "Sidebar",
      subtitle: "Barra lateral interactiva con redes sociales.",
      languages: [{ name: "HTML", logo: HTML }, { name: "CSS", logo: CSS }, { name: "Javascript", logo: JS }],
      url: "https://github.com/JoaquinPicazoV/Sidebar"
    },
    {
      image: ReactIcon,
      title: "Botón",
      subtitle: "Botón interactivo con movimientos y efectos.",
      languages: [{ name: "HTML", logo: HTML }, { name: "CSS", logo: CSS }, { name: "Javascript", logo: JS }],
      url: "https://github.com/JoaquinPicazoV/Boton.git"
    },
    {
      image: ReactIcon,
      title: "ToggleSwitch",
      subtitle: "ToggleSwitch para modo cambiar modo claro y oscuro.",
      languages: [{ name: "HTML", logo: HTML }, { name: "CSS", logo: CSS }, { name: "Javascript", logo: JS }],
      url: "https://github.com/JoaquinPicazoV/ToggleSwitch.git"
    },
    {
      image: ReactIcon,
      title: "Web comida rápida",
      subtitle: "Landing page de comida rápida.",
      languages: [{ name: "HTML", logo: HTML }, { name: "CSS", logo: CSS }, { name: "Javascript", logo: JS }],
      url: "https://github.com/JoaquinPicazoV/Web-Comida-Rapida.git"
    },
    {
      image: ReactIcon,
      title: "Web producto",
      subtitle: "Página venta de un producto con efectos usando CSS.",
      languages: [{ name: "HTML", logo: HTML }, { name: "CSS", logo: CSS }, { name: "Javascript", logo: JS }],
      url: "https://github.com/JoaquinPicazoV/Web-Producto.git"
    },
    {
      image: ReactIcon,
      title: "Videos",
      subtitle: "Landing page de carreras de ingeniería con videos de su respectiva carrera, interactivo con botones.",
      languages: [{ name: "HTML", logo: HTML }, { name: "CSS", logo: CSS }, { name: "Javascript", logo: JS }],
      url: "https://github.com/JoaquinPicazoV/Videos.git"
    },
    {
      image: ReactIcon,
      title: "Web de carga",
      subtitle: "Interfaz de carga con efectos de onda expansiva mediante CSS.",
      languages: [{ name: "HTML", logo: HTML }, { name: "CSS", logo: CSS }, { name: "Javascript", logo: JS }],
      url: "https://github.com/JoaquinPicazoV/Web-de-carga.git"
    },
    {
      image: ReactIcon,
      title: "Simulador básico de transacciones bancarias",
      subtitle: "Simulador bancario simple de transferencias, depósitos y extracción de dinero mediante clase cliente con su constructor, propiedades y métodos.",
      languages: [{ name: "Javascript", logo: JS }],
      url: "https://github.com/JoaquinPicazoV/Simuladores-Javascript-Basico.git"
    },
    {
      image: ReactIcon,
      title: "Simulador básico de inventario de biblioteca",
      subtitle: "Simulador de biblioteca que permite añadir, listar, buscar y eliminar libros del inventario.",
      languages: [{ name: "Javascript", logo: JS }],
      url: "https://github.com/JoaquinPicazoV/Simuladores-Javascript-Basico.git"
    },
    {
      image: ReactIcon,
      title: "Simulador básico de interacción en RR.SS",
      subtitle: 'Simulador de consola que permite ver perfil de usuario actual, añadir amigo, ver "publicaciones" de otro usuario, realizar "publicaciones" y listar amigos agregados.',
      languages: [{ name: "Javascript", logo: JS }],
      url: "https://github.com/JoaquinPicazoV/Simuladores-Javascript-Basico.git"
    },
  ];

  return (
    <div className="w-full flex justify-center items-center py-8">
      <div className="w-full md:w-2/3">
        <div className="flex justify-center items-center mb-4">
          <h1 className="bg-red-100 p-1 text-[#d32a2a] font-bold inline-block">Otros proyectos - Desarrollo</h1>
        </div>
        <div className="w-full overflow-x-auto flex gap-4 p-4">
          <div className="flex gap-4 justify-start">
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

export default PROJECTS;
