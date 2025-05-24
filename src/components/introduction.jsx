import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowRight } from '@fortawesome/free-solid-svg-icons';


function INTRODUCTION() {

  return (
    <div className="w-full grid bg-gradient-to-r from-white to-blue-100 md:flex p-5">
      <div className="flex justify-center items-center md:w-1/2">
        <div className="flex justify-center text-center items-center border border-blue-500 rounded-full mb-8">
          <img src="" alt="Imagen" class="flex w-80 h-80 rounded-full"></img>
        </div>
      </div>
      <div className="md:w-1/2">
        <h1 className="text-[rgba(2,8,24,1)] text-5xl font-bold mb-5">Joaquín Picazo</h1>
        <h1 className="text-2xl text-[rgba(4,105,161,1)] font-bold mb-5">Estudiante de Ingeniería Civil en Informática</h1>
        <p className="text-[rgba(123,138,156,1)] mb-5">Mi nombre es Joaquín Picazo y soy estudiante de quinto año de Ingeniería Civil en Informática en la 
          Universidad de Los Lagos. En lo personal me gusta el mundo de las redes y la ciberseguridad, aunque aún estoy consolidando mis conocimientos en los fundamentos, 
          me motiva el aprendizaje continuo y la exploración de nuevos conocimientos.</p>
        <p className="text-[rgba(123,138,156,1)] mb-5">Aprovecho cada oportunidad para fortalecer mis habilidades en ciberseguridad, complementando mi formación 
          académica con cursos gratuitos de CISCO, material educativo en YouTube, y diversas plataformas especializadas. He completado el curso "Junior Penetration Tester" 
          en Try Hack Me y tengo el objetivo de realizar el de "Red Teaming" en el futuro. En mis tiempos libres, practico principalmente vulnerando máquinas en Try Hack Me, 
          además de explorar plataformas como Hack The Box y Dockerlabs, que me han permitido desarrollar un enfoque práctico y autodidacta en el área.</p>
        <p className="text-[rgba(123,138,156,1)] mb-5">Mi meta es seguir perfeccionándome en redes y ciberseguridad ofensiva cada vez que tenga la oportunidad, adquiriendo
          experiencia y conocimientos que me permitan aportar significativamente. Estoy comprometido con el aprendizaje continuo y listo para enfrentar nuevos desafíos.</p>
        <div className='flex'>
          <button className="shadow bg-[rgba(4,105,161,1)] text-white p-4 rounded-full mr-8"><FontAwesomeIcon className="mr-4" icon={faDownload}/>Descargar CV</button>
        </div>
      </div>

    </div>
  )
}

export default INTRODUCTION;
