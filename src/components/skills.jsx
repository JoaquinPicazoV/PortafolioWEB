import { React, useState } from 'react';
import ReactIcon from '../assets/react.svg';

function SKILLS() {
    const dominated = [
        { nombre: "HTML", url: ReactIcon },
        { nombre: "CSS", url: ReactIcon },
        { nombre: "Javascript", url: ReactIcon },
        { nombre: "Git", url: ReactIcon },
        { nombre: "Node.js", url: ReactIcon },
        { nombre: "SQL", url: ReactIcon }
    ];
    const known = [
        { nombre: "Java", url: ReactIcon },
        { nombre: "C", url: ReactIcon },
        { nombre: "K 3", url: ReactIcon }
    ];
    const learning = [
        { nombre: "L 1", url: ReactIcon },
        { nombre: "L 2", url: ReactIcon },
        { nombre: "L 3", url: ReactIcon }
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
                <h1 className="bg-blue-100 p-1 text-[rgba(4,105,161,1)] font-bold inline-block">Mis habilidades</h1>
            </div>
            <div className="grid justify-center items-center w-full">
                <div className="flex justify-center items-center mb-6 bg-gray-100 p-1">
                    <div className="w-full flex space-x-4 justify-between items-center">
                        <button
                            className="bg-white p-2 rounded shadow-md w-full"
                            onClick={() => handleCategoryChange('dominated')}
                        >
                            Dominados
                        </button>
                        <button
                            className="bg-white p-2 rounded shadow-md w-full"
                            onClick={() => handleCategoryChange('known')}
                        >
                            Conocidos
                        </button>
                        <button
                            className="bg-white p-2 rounded shadow-md w-full"
                            onClick={() => handleCategoryChange('learning')}
                        >
                            Aprendiendo
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 md:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 justify-center items-center w-full">
                    {getImages().map((image, index) => (
                        <div key={index} className="grid justify-center items-center shadow-md bg-[rgba(241,244,249,1)] p-2 rounded h-[100px] w-[100px]">
                            <img src={image.url} alt={image.nombre} className="h-10 w-full object-contain"/>
                            <p className="text-center mt-2 w-full">{image.nombre}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SKILLS;
