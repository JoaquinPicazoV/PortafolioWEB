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
        <p className="text-[rgba(123,138,156,1)] mb-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perferendis ab adipisci in illum numquam nam, neque nulla,
          veritatis id ad iusto quos, dolorum quaerat repellat recusandae fugiat iure officia. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Veniam magnam sequi dignissimos magni numquam placeat sint perspiciatis natus blanditiis vitae, doloribus,
          atque nobis. Tempora est fugit sit in, minus veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nulla.
          Accusantium ipsam unde ut natus perferendis itaque doloremque debitis consequatur cupiditate nostrum, expedita quae quasi dolore
          similique voluptatibus perspiciatis animi?</p>
        <div className='flex'>
          <button className="shadow bg-[rgba(4,105,161,1)] text-white p-4 rounded-full mr-8"><FontAwesomeIcon className="mr-4" icon={faDownload}/>Descargar CV</button>
          <button className='shadow bg-[rgba(249,250,252,1)] text-black p-4 rounded-full'>Contactar<FontAwesomeIcon className="ml-4" icon={faArrowRight} /> </button>
        </div>
      </div>

    </div>
  )
}

export default INTRODUCTION;
