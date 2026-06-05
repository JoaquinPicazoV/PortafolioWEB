import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function FOOTER() {
    return (
        <footer className="w-full border-t border-white/5 bg-slate-950/80 backdrop-blur-md py-8 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <div className="text-xl font-bold text-white mb-2">Joaquín <span className="text-emerald-400">Picazo</span></div>
                        <p className="text-slate-500 text-sm">Estudiante de Ingeniería Civil Informática</p>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://github.com/JoaquinPicazoV" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 border border-white/10 hover:border-emerald-500">
                            <FontAwesomeIcon icon={faGithub} className="text-xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/joaqu%C3%ADn-picazo-velasco-aa4458380" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 border border-white/10 hover:border-emerald-500">
                            <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
                        </a>
                    </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 text-slate-600 text-xs text-center max-w-4xl mx-auto flex flex-col gap-2">
                    <p>⚠️ Todo el contenido tiene fines estrictamente educativos y profesionales. El autor se exime de toda responsabilidad legal por el uso indebido de esta información.</p>
                    <p>© {new Date().getFullYear()} Joaquín Picazo. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default FOOTER;
