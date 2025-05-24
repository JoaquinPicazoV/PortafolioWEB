import { React } from 'react';
import ReactIcon from '../assets/react.svg';

function PROJECTS() {
  const projects = [
    {
      image: ReactIcon,
      title: "Sistema Estacionamiento (Mobile)",
      subtitle: "Aplicación móvil para realizar y gestionar reservas de estacionamiento.",
      languages: [{ name: "flutter", logo: ReactIcon }, { name: "dart", logo: ReactIcon }]
    },
    {
      image: ReactIcon,
      title: "Sistema Estacionamiento (Mobile)",
      subtitle: "Aplicación móvil para realizar y gestionar reservas de estacionamiento.",
      languages: [{ name: "flutter", logo: ReactIcon }, { name: "dart", logo: ReactIcon }]
    },
    {
      image: ReactIcon,
      title: "Sistema Estacionamiento (Mobile)",
      subtitle: "Aplicación móvil para realizar y gestionar reservas de estacionamiento.",
      languages: [{ name: "flutter", logo: ReactIcon }, { name: "dart", logo: ReactIcon }]
    },
    {
      image: ReactIcon,
      title: "Sistema Estacionamiento (Mobile)",
      subtitle: "Aplicación móvil para realizar y gestionar reservas de estacionamiento.",
      languages: [{ name: "flutter", logo: ReactIcon }, { name: "dart", logo: ReactIcon }]
    },
    {
      image: ReactIcon,
      title: "Sistema Estacionamiento (Mobile)",
      subtitle: "Aplicación móvil para realizar y gestionar reservas de estacionamiento.",
      languages: [{ name: "flutter", logo: ReactIcon }, { name: "dart", logo: ReactIcon }]
    },
    {
      image: ReactIcon,
      title: "Sistema Estacionamiento (Mobile)",
      subtitle: "Aplicación móvil para realizar y gestionar reservas de estacionamiento.",
      languages: [{ name: "flutter", logo: ReactIcon }, { name: "dart", logo: ReactIcon }]
    },
  ];

  return (
    <div className="w-full flex justify-center items-center py-8">
      <div className="w-full md:w-2/3">
        <div className="flex justify-center items-center mb-4">
          <h1 className="bg-blue-100 p-1 text-[rgba(4,105,161,1)] font-bold inline-block">Proyectos</h1>
        </div>
        <div className="w-full overflow-x-auto flex gap-4 p-4">
          <div className="flex gap-4 justify-start ">
            {projects.map((project, index) => (
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-lg w-[300px]" key={index}>
                <img src={project.image} className="h-10 w-full object-contain" />
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{project.subtitle}</p>
                <div className="mt-4 flex">
                  {project.languages.map((language, i) => (
                    <div key={i} className="flex items-center border border-red-500 rounded-4xl pl-2 pr-2">
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
