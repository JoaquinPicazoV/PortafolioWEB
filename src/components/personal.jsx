import { React } from 'react'

function PERSONALINFORMATION() {
    return (
        <div className="w-full bg-slate-900 p-10 grid lg:flex gap-16 items-center relative">
            <div className="lg:w-1/2 space-y-8 z-10">
                <div className="relative">
                    <h1 className="text-4xl font-bold text-white mb-2 relative z-10">Sobre mí</h1>
                    <div className="h-2 w-20 bg-red-500 rounded-full mt-2"></div>
                </div>
                <p className="text-slate-400 leading-relaxed text-lg">
                    Soy estudiante de quinto año de Ingeniería Civil en Informática en la Universidad de Los Lagos.
                    A lo largo de mi formación académica, he desarrollado y fortalecido diversas habilidades blandas, como la organización,
                    la comunicación, la flexibilidad, gestión de tiempo, la responsabilidad, el trabajo en equipo y la perseverancia, entre otras.
                </p>
                <p className="text-slate-400 leading-relaxed text-lg">
                    Si bien cuento con muchos conocimientos en desarrollo, principalmente en el ámbito web,
                    mi interés personal se enfoca en ciberseguridad ofensiva, disciplina que estudio con entusiasmo
                    y complemento de manera autodidacta. Aunque aún no he tenido experiencia laboral en esta área,
                    practico en entornos controlados simulando escenarios reales de pentesting.
                </p>
            </div>

            <div className="lg:w-1/2 flex justify-center items-center z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg">
                    <div className="group bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:border-red-500/50 hover:-translate-y-1 transition-all duration-300 shadow-xl">
                        <h2 className="text-slate-400 font-medium text-sm uppercase tracking-wide mb-2">Interés</h2>
                        <p className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">Ciberseguridad</p>
                        <p className="text-slate-500 text-sm mt-1">Ofensiva</p>
                    </div>
                    <div className="group bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:border-red-500/50 hover:-translate-y-1 transition-all duration-300 shadow-xl">
                        <h2 className="text-slate-400 font-medium text-sm uppercase tracking-wide mb-2">Proyectos</h2>
                        <p className="text-3xl font-bold text-white group-hover:text-red-400 transition-colors">5+</p>
                        <p className="text-slate-500 text-sm mt-1">Realizados</p>
                    </div>
                    <div className="group bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:border-red-500/50 hover:-translate-y-1 transition-all duration-300 shadow-xl">
                        <h2 className="text-slate-400 font-medium text-sm uppercase tracking-wide mb-2">Máquinas</h2>
                        <p className="text-3xl font-bold text-white group-hover:text-red-400 transition-colors">50+</p>
                        <p className="text-slate-500 text-sm mt-1">Vulneradas</p>
                    </div>
                    <div className="group bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:border-red-500/50 hover:-translate-y-1 transition-all duration-300 shadow-xl">
                        <h2 className="text-slate-400 font-medium text-sm uppercase tracking-wide mb-2">Educación</h2>
                        <p className="text-lg font-bold text-white text-center group-hover:text-red-400 transition-colors">
                            Ing. Civil Informática
                        </p>
                        <p className="text-slate-500 text-sm mt-1">En curso</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PERSONALINFORMATION;
