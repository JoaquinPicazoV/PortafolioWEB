import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import fotoPerfil from '../assets/fotoPerfil.png'

function INTRODUCTION() {

  return (
    <div className="w-full grid bg-slate-900 md:flex p-10 min-h-[80vh] items-center relative overflow-hidden">

      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="flex justify-center items-center md:w-1/2 z-10">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex justify-center text-center items-center border-4 border-slate-800 rounded-full p-1 bg-slate-900">
            <img src={fotoPerfil} alt="ImagenPerfil" className="flex w-64 h-64 md:w-80 md:h-80 rounded-full object-cover grayscale-0 hover:grayscale transition-all duration-500"></img>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 z-10">
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          Joaquín <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">Picazo</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-slate-300 font-semibold mb-6">
          Estudiante de <span className="text-red-400">Ingeniería Civil en Informática</span>
        </h2>
        <p className="text-slate-400 mb-5 text-lg leading-relaxed max-w-2xl">
          Mi nombre es Joaquín Picazo y soy estudiante de quinto año de Ingeniería Civil en Informática en la
          Universidad de Los Lagos. En lo personal me gusta el mundo de la ciberseguridad, aunque aún estoy consolidando mis conocimientos en los fundamentos,
          me motiva el aprendizaje continuo y la exploración de nuevos conocimientos.
        </p>
        <p className="text-slate-400 mb-5 text-lg leading-relaxed max-w-2xl">
          Cada vez que puedo intento fortalecer mis habilidades en ciberseguridad ofensiva, complementando mi formación
          académica con cursos, material educativo en YouTube, y diversas plataformas especializadas. En mis tiempos libres, practico principalmente vulnerando máquinas en TryHackMe,
          además de explorar plataformas como Hack The Box y Dockerlabs, que me han permitido desarrollar un enfoque práctico y autodidacta en el área.
        </p>
        <p className="text-slate-400 mb-5 text-lg leading-relaxed max-w-2xl">
          Mi meta es seguir perfeccionándome ciberseguridad ofensiva, actualmente cuento con la certificación eJPT
          (Junior Penetration Tester) de INE Security, pero, a futuro me gustaría seguir estudiando y aprender sobre entornos de Active Directory y nuevas técnicas de pivoting
          para optar por certificaciones más complejas como le eCPPT y a un futuro lejano la OSCP. Estoy comprometido con el aprendizaje continuo y listo para enfrentar nuevos desafíos.
        </p>
      </div>
    </div>
  )
}

export default INTRODUCTION;
