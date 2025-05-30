import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload, faUserSecret } from '@fortawesome/free-solid-svg-icons';

function CONTACT() {
    return (
        <div className="text-center mb-10">
            <div className="mb-5">
                <h1 className="bg-red-100 p-1 text-[#d32a2a] font-bold inline-block">Contacto</h1>
            </div>
            <div className="grid justify-center items-center gap-6 mb-10 md:flex">
                <div className="shadow grid text-left border border-red-200 p-4 rounded justify-center w-[300px]">
                    <h1 className="text-black font-bold mb-4 text-xl"><FontAwesomeIcon icon={faEnvelope} className='h-[20px] text-[#d32a2a]'/> Correo electrónico</h1>
                    <p className="text-black font-bold">joaquinpicazovelasco@gmail.com</p>
                    <p className="text-[rgba(123,138,156,1)] mb-4">Respuesta en 24-48 horas</p>
                    <button className="shadow border border-gray-300 bg-gray-100 w-full p-2 rounded">Copiar correo electrónico</button>
                </div>
                <div className="shadow text-left border border-red-200 p-4 rounded justify-center w-[300px]">
                    <h1 className="text-black font-bold mb-4 text-xl"><FontAwesomeIcon icon={faLinkedin} className='h-[20px] text-[#d32a2a]'/> LinkedIn</h1>
                    <p className="text-black font-bold">/DIRECCION_WEB</p>
                    <p className="text-[rgba(123,138,156,1)] mb-4">Contactar por LinkedIn</p>
                    <button className="shadow border border-gray-300 bg-gray-100 p-2 rounded w-full">Visitar perfil</button>

                </div>
                <div className="shadow text-left border border-red-200 p-4 rounded justify-center w-[300px]">
                    <h1 className="text-black font-bold mb-4 text-xl"><FontAwesomeIcon icon={faGithub} className='h-[20px] text-[#d32a2a]'/> GitHub</h1>
                    <p className="text-black font-bold">/DIRECCION_WEB</p>
                    <p className="text-[rgba(123,138,156,1)] mb-4">Explorar repositorio</p>
                    <button className="shadow border border-gray-300 bg-gray-100 p-2 rounded w-full">Ver GitHub</button>
                </div>
            </div>
        </div>
    );
}

export default CONTACT;
