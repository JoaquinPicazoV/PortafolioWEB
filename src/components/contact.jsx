import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function CONTACT() {
    return (
        <div id="contacto" className="text-center py-12 md:py-20 bg-transparent relative border-t border-slate-800">
            <div className="flex flex-col justify-center items-center mb-8 md:mb-12 border-b border-white/10 pb-4 px-2">
                <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-white font-mono uppercase tracking-widest text-center cyber-glitch-hover cursor-default w-fit mx-auto flex flex-row flex-wrap items-center justify-center gap-2 md:gap-3 max-w-full"><span className="text-emerald-500 shrink-0">{'>'}</span> <span className="text-center">[ CONTACTO ]</span></h1>
            </div>

            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 mb-10 px-6">
                <div className="group cyber-shine bg-black/80 backdrop-blur-md border border-white/10 border-l-4 border-l-transparent text-left p-4 md:p-6 hover:border-l-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] w-full md:w-[350px] transition-all duration-300 relative animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    <div className="absolute top-0 right-0 p-2 font-mono text-xs text-slate-600 group-hover:text-emerald-500/50">+C_1</div>
                    <h1 className="text-white font-bold mb-4 text-xl flex items-center gap-3">
                        <div className="p-2 bg-white/5 border border-white/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                            <FontAwesomeIcon icon={faLinkedin} className='text-emerald-500' />
                        </div>
                        LinkedIn
                    </h1>
                    <p className="text-slate-300 font-medium mb-1">Joaquín Picazo Velasco</p>
                    <p className="text-slate-500 text-sm mb-6">Contactar por LinkedIn</p>
                    <a href="https://www.linkedin.com/in/joaqu%C3%ADn-picazo-velasco-aa4458380" target="_blank" rel="noopener noreferrer" className="block">
                        <button className="w-full bg-white/5 text-white px-4 py-3 hover:bg-emerald-600 transition-colors cursor-pointer font-mono font-bold uppercase text-sm border border-white/10 active:scale-95 duration-150">
                            [ VISITAR LINKEDIN ]
                        </button>
                    </a>
                </div>

                <div className="group cyber-shine bg-black/80 backdrop-blur-md border border-white/10 border-l-4 border-l-transparent text-left p-4 md:p-6 hover:border-l-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] w-full md:w-[350px] transition-all duration-300 relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    <div className="absolute top-0 right-0 p-2 font-mono text-xs text-slate-600 group-hover:text-emerald-500/50">+C_2</div>
                    <h1 className="text-white font-bold mb-4 text-xl flex items-center gap-3">
                        <div className="p-2 bg-white/5 border border-white/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                            <FontAwesomeIcon icon={faGithub} className='text-emerald-500' />
                        </div>
                        GitHub
                    </h1>
                    <p className="text-slate-300 font-medium mb-1">JoaquinPicazoV</p>
                    <p className="text-slate-500 text-sm mb-6">Explorar repositorio</p>
                    <a href="https://github.com/JoaquinPicazoV" target="_blank" rel="noopener noreferrer" className="block">
                        <button className="w-full bg-white/5 text-white px-4 py-3 hover:bg-emerald-600 transition-colors cursor-pointer font-mono font-bold uppercase text-sm border border-white/10 active:scale-95 duration-150">
                            [ VER GITHUB ]
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CONTACT;
