import { React } from 'react'

function PERSONALINFORMATION() {
    return (
        <div className="w-full bg-white p-6 grid lg:flex gap-10">
            <div className="lg:w-1/2 space-y-5">
                <div>
                    <h1 className="bg-red-100 text-[#d32a2a] font-bold inline-block px-3 py-1 rounded-md">
                        Sobre mí
                    </h1>
                </div>
                <p className="text-gray-600 leading-relaxed">
                    Soy estudiante de quinto año de Ingeniería Civil en Informática en la Universidad de Los Lagos.
                    A lo largo de mi formación académica, he desarrollado y fortalecido diversas habilidades blandas, como la organización,
                    la comunicación, la flexibilidad, gestión de tiempo, la responsabilidad, el trabajo en equipo y la perseverancia, entre otras.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    Si bien cuento con muchos conocimientos en desarrollo, principalmente en el ámbito web, 
                    mi interés personal se enfoca en ciberseguridad ofensiva, disciplina que estudio con entusiasmo
                    y complemento de manera autodidacta. Aunque aún no he tenido experiencia laboral en esta área, 
                    practico en entornos controlados simulando escenarios reales de pentesting.
                </p>
            </div>

            <div className="lg:w-1/2 flex justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg">
                    <div className="shadow-md bg-red-100 rounded-2xl border border-red-200 p-5 flex flex-col justify-center items-center text-center">
                        <h2 className="text-gray-800 font-semibold text-lg">Área</h2>
                        <p className="text-xl font-bold text-black">Ciberseguridad</p>
                        <p className="text-gray-500">Ofensiva</p>
                    </div>
                    <div className="shadow-md bg-red-100 rounded-2xl border border-red-200 p-5 flex flex-col justify-center items-center text-center">
                        <h2 className="text-gray-800 font-semibold text-lg">Proyectos</h2>
                        <p className="text-xl font-bold text-black">5+</p>
                        <p className="text-gray-500">Realizados</p>
                    </div>
                    <div className="shadow-md bg-red-100 rounded-2xl border border-red-200 p-5 flex flex-col justify-center items-center text-center">
                        <h2 className="text-gray-800 font-semibold text-lg">Máquinas</h2>
                        <p className="text-xl font-bold text-black">50+</p>
                        <p className="text-gray-500">Vulneradas</p>
                    </div>
                    <div className="shadow-md bg-red-100 rounded-2xl border border-red-200 p-5 flex flex-col justify-center items-center text-center">
                        <h2 className="text-gray-800 font-semibold text-lg">Educación</h2>
                        <p className="text-lg font-bold text-black text-center">
                            Ing. Civil Informática
                        </p>
                        <p className="text-gray-500">En curso</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PERSONALINFORMATION;
