import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function CONTACT() {
    const handleCopyEmail = () => {
        navigator.clipboard.writeText("joaquinpicazovelasco@gmail.com");
    };

    return (
        <div className="text-center mb-10">
            <div className="mb-5">
                <h1 className="bg-red-100 p-1 text-[#d32a2a] font-bold inline-block">Contacto</h1>
            </div>
            <div className="grid justify-center items-center gap-6 mb-10 md:flex">
                <div className="shadow grid text-left border border-red-200 p-4 rounded justify-center w-[300px]">
                    <h1 className="text-black font-bold mb-4 text-xl">
                        <FontAwesomeIcon icon={faEnvelope} className='h-[20px] text-[#d32a2a]' /> Correo electrónico
                    </h1>
                    <p className="text-black font-bold">joaquinpicazovelasco@gmail.com</p>
                    <p className="text-[rgba(123,138,156,1)] mb-4">Respuesta en 24-48 horas</p>
                    <button onClick={handleCopyEmail} className="shadow border border-gray-300 bg-gray-100 w-full p-2 rounded hover:bg-gray-200 transition cursor-pointer">
                        Copiar correo electrónico
                    </button>
                </div>
                <div className="shadow text-left border border-red-200 p-4 rounded justify-center w-[300px]">
                    <h1 className="text-black font-bold mb-4 text-xl">
                        <FontAwesomeIcon icon={faLinkedin} className='h-[20px] text-[#d32a2a]' /> LinkedIn
                    </h1>
                    <p className="text-black font-bold">Joaquín Picazo Velasco</p>
                    <p className="text-[rgba(123,138,156,1)] mb-4">Contactar por LinkedIn</p>
                    <a href="https://www.linkedin.com/in/joaquín-picazo-velasco-aa4458380" target="_blank" rel="noopener noreferrer" className="block">
                        <button className="shadow border border-gray-300 bg-gray-100 p-2 rounded w-full hover:bg-gray-200 transition cursor-pointer">
                            Visitar perfil
                        </button>
                    </a>
                </div>

                <div className="shadow text-left border border-red-200 p-4 rounded justify-center w-[300px]">
                    <h1 className="text-black font-bold mb-4 text-xl">
                        <FontAwesomeIcon icon={faGithub} className='h-[20px] text-[#d32a2a]' /> GitHub
                    </h1>
                    <p className="text-black font-bold">JoaquinPicazoV</p>
                    <p className="text-[rgba(123,138,156,1)] mb-4">Explorar repositorio</p>
                    <a href="https://github.com/JoaquinPicazoV" target="_blank" rel="noopener noreferrer" className="block">
                        <button className="shadow border border-gray-300 bg-gray-100 p-2 rounded w-full hover:bg-gray-200 transition cursor-pointer">
                            Ver GitHub
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CONTACT;
