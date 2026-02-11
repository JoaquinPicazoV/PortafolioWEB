import { React, useState } from 'react';
import { dominatedSkills, knownSkills, learningSkills } from '../data/skills';

function SKILLS() {
    const [selectedCategory, setSelectedCategory] = useState('dominated');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const getImages = () => {
        switch (selectedCategory) {
            case 'dominated':
                return dominatedSkills;
            case 'known':
                return knownSkills;
            case 'learning':
                return learningSkills;
            default:
                return [];
        }
    };

    return (

        <div className="w-full justify-center items-center bg-slate-900 p-6 md:p-10 relative overflow-hidden">

            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="flex flex-col justify-center items-center mb-10 z-10 relative">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Habilidades</h1>
                <div className="h-1 w-20 bg-red-500 rounded-full"></div>
            </div>

            <div className="grid justify-center items-center w-full max-w-6xl mx-auto z-10 relative">
                <div className="flex justify-center items-center mb-10">
                    <div className="flex flex-wrap justify-center gap-2 bg-slate-800/50 p-2 rounded-xl backdrop-blur-sm border border-slate-700 w-full sm:w-auto">
                        <button
                            className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${selectedCategory === 'dominated' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
                            onClick={() => handleCategoryChange('dominated')}
                        >
                            Dominados
                        </button>
                        <button
                            className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${selectedCategory === 'known' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
                            onClick={() => handleCategoryChange('known')}
                        >
                            Conocidos
                        </button>
                        <button
                            className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${selectedCategory === 'learning' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
                            onClick={() => handleCategoryChange('learning')}
                        >
                            Aprendiendo
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center items-center w-full">
                    {getImages().map((image, index) => (
                        <div key={index} className="group flex flex-col justify-center items-center bg-slate-800/50 border border-slate-700 p-4 rounded-xl h-[140px] w-full hover:border-red-500/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/10 cursor-default">
                            <div className="h-16 w-16 flex items-center justify-center p-2 bg-slate-700/30 rounded-full group-hover:scale-110 transition-transform duration-300">
                                <img src={image.url} alt={image.nombre} className="h-full w-full object-contain" />
                            </div>
                            <p className="text-center mt-3 text-slate-300 font-medium group-hover:text-white transition-colors">{image.nombre}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default SKILLS;
