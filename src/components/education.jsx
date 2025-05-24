import { React } from 'react';

function EDUCATION() {
    return (
        <div className="grid text-center justify-center items-center mb-5">
            <div>
                <h1 className="bg-blue-100 p-1 text-[rgba(4,105,161,1)] font-bold inline-block mb-4">Educación</h1>
            </div>

            {/* Contenedor principal con disposición simétrica */}
            <div className="grid md:flex md:justify-between gap-6 md:gap-12 justify-center items-start w-full px-6">
                {/* Tarjeta de Ingeniería Civil Informática */}
                <div className="border border-blue-200 bg-white text-left p-5 shadow rounded w-full md:w-1/2">
                    <h1 className="font-bold text-xl">Ingeniería Civil Informática</h1>
                    <p className="text-[rgba(123,138,156,1)] mb-4">Universidad de Los Lagos</p>
                    <div className="flex items-center">
                        <p className="mr-5 bg-blue-100 p-1 text-[rgba(4,105,161,1)] font-bold text-base rounded">2021 - Presente</p>
                        <p className="text-[rgba(123,138,156,1)]">En curso</p>
                    </div>
                </div>

                {/* Tarjeta de Cursos */}
                <div className="border border-blue-200 bg-white text-left p-5 shadow rounded w-full md:w-1/2">
                    <h1 className="font-bold text-xl">Cursos</h1>
                    <p className="text-[rgba(123,138,156,1)] mb-4">Formación complementaria</p>
                    <div className="grid">
                        <h3 className="font-bold">Curso de Java Básico</h3>
                        <div className="flex items-center">
                            <p className="mr-5 bg-blue-100 p-1 text-[rgba(4,105,161,1)] font-bold text-base rounded">2022</p>
                            <p className="text-[rgba(123,138,156,1)]">OpenBootcamp</p>
                        </div>
                        <p className="text-[rgba(123,138,156,1)] mb-4">Fundamentos de Java. Sintaxis, condiciones, bucles, etc...</p>
                    </div>
                    <div className="grid">
                        <h3 className="font-bold">Curso de Liderazgo</h3>
                        <div className="flex items-center">
                            <p className="mr-5 bg-blue-100 p-1 text-[rgba(4,105,161,1)] font-bold text-base rounded">2024</p>
                            <p className="text-[rgba(123,138,156,1)]">Santander Open Academy</p>
                        </div>
                        <p className="text-[rgba(123,138,156,1)] mb-4">Tipos de liderazgo y como usarlos en cada situación.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EDUCATION;

