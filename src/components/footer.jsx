import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';

function FOOTER() {
    return (

        <div className="text-center px-6 md:px-10 py-6 bg-slate-950 border-t border-slate-900">
            <div className="mb-5">
                <div className="bg-slate-800 h-[1px]"></div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-left text-center md:text-left">
                    <div className="font-bold flex justify-center md:justify-start items-center text-xl mb-1" >
                        <p className="text-white mr-1">Joaquín</p>
                        <p className="text-red-500">Picazo</p>
                    </div>
                    <p className="text-slate-500 text-sm">Estudiante de Ingeniería Civil Informática</p>
                </div>
                <div className="flex gap-4">
                    <a href="https://github.com/JoaquinPicazoV" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-white transition-colors">
                        <FontAwesomeIcon icon={faGithub} size="xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/joaquín-picazo-velasco-aa4458380" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-white transition-colors">
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>
                </div>
            </div>
            <div className="mt-6 text-slate-600 text-xs text-center">
                © {new Date().getFullYear()} Joaquín Picazo. Todos los derechos reservados.
            </div>
        </div>
    );
}

export default FOOTER;
