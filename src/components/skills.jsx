import { React, useState } from 'react';

import HTML from '../assets/logos/html.png';
import CSS from '../assets/logos/css.png';
import JS from '../assets/logos/js.png';
import GITHUB from '../assets/logos/github.png';
import NODE from '../assets/logos/node.png';
import POSTGRESQL from '../assets/logos/postgresql.png';
import TAILWINDCSS from '../assets/logos/tailwindcss.png';

import JAVA from '../assets/logos/java.png';
import C from '../assets/logos/c.png';
import NMAP from '../assets/logos/nmap.png';
import HYDRA from '../assets/logos/hydra.png';
import METASPLOIT from '../assets/logos/metasploit.png';
import PYTHON from '../assets/logos/python.png';
import JOHN from '../assets/logos/john.png';
import PACKET from '../assets/logos/packet.png';

import BASH from '../assets/logos/bash.png';
import BURPSUITE from '../assets/logos/burpsuite.png';
import WIRESHARK from '../assets/logos/wireshark.png';
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
        { nombre: "Java", url: JAVA },
        { nombre: "C", url: C },
        { nombre: "Nmap", url: NMAP },
        { nombre: "Hydra", url: HYDRA },
        { nombre: "Metasploit", url: METASPLOIT },
        { nombre: "Python", url: PYTHON },
        { nombre: "John The Ripper", url: JOHN },
        { nombre: "Packet Tracer", url: PACKET },
    ];
    const learning = [
        { nombre: "Bash", url: BASH },
        { nombre: "BurpSuite", url: BURPSUITE },
        { nombre: "Wireshark", url: WIRESHARK },
        { nombre: "SQLmap", url: SQLMAP },
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
        <div className="w-full justify-center items-center bg-white p-5">
            <div className="flex justify-center items-center mb-4">
                <h1 className="bg-red-100 p-1 text-[#d32a2a] font-bold inline-block">Lenguajes y herramientas</h1>
            </div>
            <div className="grid justify-center items-center w-full">
                <div className="flex justify-center items-center mb-6 bg-gray-100 p-1">
                    <div className="w-full flex space-x-4 justify-between items-center">
                        <button
                            className={`p-2 rounded shadow-md w-full ${selectedCategory === 'dominated' ? 'bg-red-500 text-white' : 'bg-white text-black'}`}
                            onClick={() => handleCategoryChange('dominated')}
                        >
                            Dominados
                        </button>
                        <button
                            className={`p-2 rounded shadow-md w-full ${selectedCategory === 'known' ? 'bg-red-500 text-white' : 'bg-white text-black'}`}
                            onClick={() => handleCategoryChange('known')}
                        >
                            Conocidos
                        </button>
                        <button
                            className={`p-2 rounded shadow-md w-full ${selectedCategory === 'learning' ? 'bg-red-500 text-white' : 'bg-white text-black'}`}
                            onClick={() => handleCategoryChange('learning')}
                        >
                            Aprendiendo
                        </button>
                    </div>
                </div>


                <div className="grid grid-cols-3 gap-4 md:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 justify-center items-center w-full">
                    {getImages().map((image, index) => (
                        <div key={index} className="grid justify-center items-center shadow-md bg-[rgba(241,244,249,1)] p-2 rounded h-[110px] w-[100px]">
                            <img src={image.url} alt={image.nombre} className="h-10 w-full object-contain" />
                            <p className="text-center mt-2 w-full">{image.nombre}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SKILLS;
