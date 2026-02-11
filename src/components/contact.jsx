import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function CONTACT() {
    const handleCopyEmail = () => {
        navigator.clipboard.writeText("joaquinpicazovelasco@gmail.com");
    };

    return (

        <div className="text-center py-12 md:py-20 bg-slate-900 relative border-t border-slate-800">
            <div className="flex flex-col justify-center items-center mb-8 md:mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Contacto</h1>
                <div className="h-1 w-20 bg-red-500 rounded-full"></div>
            </div>

            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 mb-10 px-6">
                <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-left p-6 rounded-2xl shadow-xl w-full md:w-[350px] hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1">
                    <h1 className="text-white font-bold mb-4 text-xl flex items-center gap-3">
                        <div className="p-2 bg-slate-700 rounded-lg group-hover:bg-red-500/20 transition-colors">
                            <FontAwesomeIcon icon={faEnvelope} className='text-red-500' />
                        </div>
                        Correo electrónico
                    </h1>
                    <p className="text-slate-300 font-medium mb-1">joaquinpicazovelasco@gmail.com</p>
                    <p className="text-slate-500 text-sm mb-6">Respuesta en 24-48 horas</p>
                    <button onClick={handleCopyEmail} className="w-full bg-slate-700 text-white px-4 py-3 rounded-xl hover:bg-slate-600 transition-colors cursor-pointer font-medium border border-slate-600 active:scale-95 duration-150">
                        Copiar correo electrónico
                    </button>
                </div>

                <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-left p-6 rounded-2xl shadow-xl w-full md:w-[350px] hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1">
                    <h1 className="text-white font-bold mb-4 text-xl flex items-center gap-3">
                        <div className="p-2 bg-slate-700 rounded-lg group-hover:bg-red-500/20 transition-colors">
                            <FontAwesomeIcon icon={faLinkedin} className='text-red-500' />
                        </div>
                        LinkedIn
                    </h1>
                    <p className="text-slate-300 font-medium mb-1">Joaquín Picazo Velasco</p>
                    <p className="text-slate-500 text-sm mb-6">Contactar por LinkedIn</p>
                    <a href="https://www.linkedin.com/in/joaquín-picazo-velasco-aa4458380" target="_blank" rel="noopener noreferrer" className="block">
                        <button className="w-full bg-slate-700 text-white px-4 py-3 rounded-xl hover:bg-slate-600 transition-colors cursor-pointer font-medium border border-slate-600 active:scale-95 duration-150">
                            Visitar perfil
                        </button>
                    </a>
                </div>

                <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-left p-6 rounded-2xl shadow-xl w-full md:w-[350px] hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1">
                    <h1 className="text-white font-bold mb-4 text-xl flex items-center gap-3">
                        <div className="p-2 bg-slate-700 rounded-lg group-hover:bg-red-500/20 transition-colors">
                            <FontAwesomeIcon icon={faGithub} className='text-red-500' />
                        </div>
                        GitHub
                    </h1>
                    <p className="text-slate-300 font-medium mb-1">JoaquinPicazoV</p>
                    <p className="text-slate-500 text-sm mb-6">Explorar repositorio</p>
                    <a href="https://github.com/JoaquinPicazoV" target="_blank" rel="noopener noreferrer" className="block">
                        <button className="w-full bg-slate-700 text-white px-4 py-3 rounded-xl hover:bg-slate-600 transition-colors cursor-pointer font-medium border border-slate-600 active:scale-95 duration-150">
                            Ver GitHub
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CONTACT;
