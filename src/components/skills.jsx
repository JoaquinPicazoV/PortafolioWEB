import { React, useState } from 'react';
import { cyberSkills, devSkills } from '../data/skills';

function SKILLS() {
    const [selectedCategory, setSelectedCategory] = useState('ciberseguridad');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const getImages = () => {
        switch (selectedCategory) {
            case 'ciberseguridad':
                return cyberSkills;
            case 'desarrollo':
                return devSkills;
            default:
                return [];
        }
    };

    return (

        <div className="w-full justify-center items-center bg-transparent p-6 md:p-10 relative overflow-hidden">

            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="flex flex-col justify-center items-center mb-10 z-10 relative border-b border-white/10 pb-4">
                <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white font-mono uppercase tracking-widest text-center cyber-glitch-hover cursor-default w-fit mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0 max-w-full flex-wrap"><span className="text-emerald-500">{'>'}</span> <span>[ HABILIDADES ]</span></h1>
            </div>

            <div className="grid justify-center items-center w-full max-w-6xl mx-auto z-10 relative">
                <div className="flex justify-center items-center mb-10">
                    <div className="flex flex-wrap justify-center gap-2 bg-black/80 p-2 border border-white/10 w-full sm:w-auto">
                        <button
                            className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 font-mono uppercase text-sm sm:text-base transition-all duration-300 border ${selectedCategory === 'ciberseguridad' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' : 'text-slate-400 border-transparent hover:text-white hover:bg-white/5'}`}
                            onClick={() => handleCategoryChange('ciberseguridad')}
                        >
                            [ Ciberseguridad ]
                        </button>
                        <button
                            className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 font-mono uppercase text-sm sm:text-base transition-all duration-300 border ${selectedCategory === 'desarrollo' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' : 'text-slate-400 border-transparent hover:text-white hover:bg-white/5'}`}
                            onClick={() => handleCategoryChange('desarrollo')}
                        >
                            [ Desarrollo ]
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center items-center w-full">
                    {getImages().map((image, index) => (
                        <div key={index} className="group flex flex-col justify-center items-center bg-black/80 border border-white/10 p-4 h-[140px] w-full hover:border-emerald-500/50 hover:bg-emerald-500/5 cyber-shine transition-all duration-300 hover:-translate-y-1 cursor-default">
                            <div className="h-16 w-16 flex items-center justify-center p-2 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-300">
                                <img src={image.url} loading="lazy" alt={image.nombre} className="h-full w-full object-contain" />
                            </div>
                            <p className="text-center mt-3 text-slate-300 font-medium font-mono text-sm group-hover:text-emerald-400 transition-colors">{image.nombre}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default SKILLS;
