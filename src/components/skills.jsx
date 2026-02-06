import { React, useState } from 'react';

import HTML from '../assets/logos/html.png';
import CSS from '../assets/logos/css.png';
import JS from '../assets/logos/js.png';
import GITHUB from '../assets/logos/github.png';
import NODE from '../assets/logos/node.png';
import POSTGRESQL from '../assets/logos/postgresql.png';
import TAILWINDCSS from '../assets/logos/tailwindcss.png';

import C from '../assets/logos/c.png';
import NMAP from '../assets/logos/nmap.png';
import HYDRA from '../assets/logos/hydra.png';
import METASPLOIT from '../assets/logos/metasploit.png';
import PYTHON from '../assets/logos/python.png';
import JOHN from '../assets/logos/john.png';
import PACKET from '../assets/logos/packet.png';

import BASH from '../assets/logos/bash.png';
import BURPSUITE from '../assets/logos/burpsuite.png';
import SQLMAP from '../assets/logos/sqlmap.png';
import ReactIcon from '../assets/logos/react.svg';


function SKILLS() {
    const dominated = [
        { nombre: "HTML", url: HTML },
        { nombre: "CSS", url: CSS },
        { nombre: "Javascript", url: JS },
        { nombre: "GitHub", url: GITHUB },
        { nombre: "Node.js", url: NODE },
        { nombre: "PostgreSQL", url: POSTGRESQL },
        { nombre: "Tailwindcss", url: TAILWINDCSS }
    ];
    const known = [
        { nombre: "C", url: C },
        { nombre: "Nmap", url: NMAP },
        { nombre: "Hydra", url: HYDRA },
        { nombre: "Metasploit", url: METASPLOIT },
        { nombre: "Python", url: PYTHON },
        { nombre: "John The Ripper", url: JOHN },
        { nombre: "SQLmap", url: SQLMAP },
        { nombre: "Packet Tracer", url: PACKET },
    ];
    const learning = [
        { nombre: "Bash", url: BASH },
        { nombre: "BurpSuite", url: BURPSUITE },
        { nombre: "React", url: ReactIcon },
    ];

    const [selectedCategory, setSelectedCategory] = useState('dominated');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const getImages = () => {
        switch (selectedCategory) {
            case 'dominated':
                return dominated;
            case 'known':
                return known;
            case 'learning':
                return learning;
            default:
                return [];
        }
    };

    return (

        <div className="w-full justify-center items-center bg-slate-900 p-10 relative overflow-hidden">

            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="flex flex-col justify-center items-center mb-10 z-10 relative">
                <h1 className="text-4xl font-bold text-white mb-2">Habilidades</h1>
                <div className="h-1 w-20 bg-red-500 rounded-full"></div>
            </div>

            <div className="grid justify-center items-center w-full max-w-6xl mx-auto z-10 relative">
                <div className="flex justify-center items-center mb-10">
                    <div className="flex space-x-2 bg-slate-800/50 p-1 rounded-xl backdrop-blur-sm border border-slate-700">
                        <button
                            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${selectedCategory === 'dominated' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
                            onClick={() => handleCategoryChange('dominated')}
                        >
                            Dominados
                        </button>
                        <button
                            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${selectedCategory === 'known' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
                            onClick={() => handleCategoryChange('known')}
                        >
                            Conocidos
                        </button>
                        <button
                            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${selectedCategory === 'learning' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
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
