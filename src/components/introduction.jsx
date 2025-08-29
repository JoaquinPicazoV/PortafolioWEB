import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import fotoPerfil from '../assets/fotoPerfil.png'

function INTRODUCTION() {

  return (
    <div className="w-full grid bg-gradient-to-r from-white to-red-200 md:flex p-5">
      <div className="flex justify-center items-center md:w-1/2">
        <div className="flex justify-center text-center items-center border border-red-500 rounded-full mb-8">
          <img src={fotoPerfil} alt="ImagenPerfil" class="flex w-80 h-80 rounded-full"></img>
        </div>
      </div>
      <div className="md:w-1/2">
        <h1 className="text-[rgba(2,8,24,1)] text-5xl font-bold mb-5">Joaquín Picazo</h1>
        {/* <h1 className="text-2xl text-[rgba(4,105,161,1)] font-bold mb-5">Estudiante de Ingeniería Civil en Informática</h1> */}
        <h1 className="text-2xl text-[#d32a2a] font-bold mb-5">Estudiante de Ingeniería Civil en Informática</h1>
        <p className="text-[rgba(123,138,156,1)] mb-5">Mi nombre es Joaquín Picazo y soy estudiante de quinto año de Ingeniería Civil en Informática en la 
          Universidad de Los Lagos. En lo personal me gusta el mundo de la ciberseguridad, aunque aún estoy consolidando mis conocimientos en los fundamentos, 
          me motiva el aprendizaje continuo y la exploración de nuevos conocimientos.</p>
        <p className="text-[rgba(123,138,156,1)] mb-5">Cada vez que puedo intento fortalecer mis habilidades en ciberseguridad ofensiva, complementando mi formación 
          académica con cursos, material educativo en YouTube, y diversas plataformas especializadas. En mis tiempos libres, practico principalmente vulnerando máquinas en TryHackMe, 
          además de explorar plataformas como Hack The Box y Dockerlabs, que me han permitido desarrollar un enfoque práctico y autodidacta en el área.</p>
        <p className="text-[rgba(123,138,156,1)] mb-5">Mi meta es seguir perfeccionándome ciberseguridad ofensiva, actualmente cuento con la certificación eJPT 
          (Junior Penetration Tester) de INE Security, pero, a futuro me gustaría seguir estudiando y aprender sobre entornos de Active Directory y nuevas técnicas de pivoting
          para optar por certificaciones más complejas como le eCPPT y a un futuro lejano la OSCP. Estoy comprometido con el aprendizaje continuo y listo para enfrentar nuevos desafíos.</p>
      </div>

    </div>
  )
}

export default INTRODUCTION;
