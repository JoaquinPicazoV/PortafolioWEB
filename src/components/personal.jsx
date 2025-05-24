import { React } from 'react'

function PERSONALINFORMATION() {

    return (
        <div className="w-full grid bg-white p-5 md:flex">
            <div className="grid justify-center items-center md:w-1/2 lg:ml-50">
                <div className='flex'>
                    <h1 className="bg-blue-100 p-1 text-[rgba(4,105,161,1)] font-bold inline-block">Sobre mí</h1>
                </div>
                <p className="text-[rgba(123,138,156,1)] mb-5">Soy estudiante de quinto año de Ingeniería Civil en Informática en la Universidad de Los Lagos.
                    A lo largo de mi formación académica, he desarrollado y fortalecido diversas habilidades blandas, como la organización, la comunicación, 
                    la flexibilidad, gestión de tiempo, la responsabilidad, el trabajo en equipo y la perseverancia, entre otras.
                    Todo esto me motiva enfrentar nuevos retos y buscar constantemente formas de mejorar, lo que me ha llevado a aumentar o perfeccionar mis
                    conocimientos.</p>
                <p className="text-[rgba(123,138,156,1)] mb-5">Si bien cuento con muchos conocimientos en desarrollo, 
                    principalmente en el ámbito web (tengo conocimientos desde la gestión del proyecto hasta su implementación), 
                    mi interés personal se enfoca en redes y ciberseguridad, disciplinas que estudio con entusiasmo en la universidad 
                    y las complemento de manera autodidacta. Aunque aún no he tenido experiencia laboral específica en estas áreas, 
                    tengo una gran disposición para aplicar lo aprendido y generar un impacto positivo en la empresa u organización en 
                    la que me desempeñe. Mi objetivo es contribuir con soluciones, seguir adquiriendo conocimientos y crecer tanto a
                    nivel profesional como personal.</p>

            </div>
            <div className="md:w-1/2 flex justify-center items-center">
                <div className="grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-1 md:grid-rows-4 xl:grid-cols-2 xl:grid-rows-2">
                    <div className="shadow bg-blue-100 grid items-center rounded border border-blue-200 p-3 md:w-[200px] md:h-[150px]">
                        <h1 className="text-black font-bold">Experiencia</h1>
                        <div>
                            <p className="text-black text-xl font-bold">Sin experiencia</p>
                            <p className="text-[rgba(123,138,156,1)]">Desarrollo</p>
                        </div>

                    </div>
                    <div className="shadow bg-blue-100 grid items-center rounded border border-blue-200 p-3 md:w-[200px] md:h-[150px]">
                        <h1 className="text-black font-bold">Proyectos</h1>
                        <div>
                            <p className="text-black text-xl font-bold">5+</p>
                            <p className="text-[rgba(123,138,156,1)]">Realizados</p>
                        </div>

                    </div>
                    <div className="shadow bg-blue-100 grid items-center rounded border border-blue-200 p-3 md:w-[200px] md:h-[150px]">
                        <h1 className="text-black font-bold">Máquinas</h1>
                        <div>
                            <p className="text-black text-xl font-bold">10+</p>
                            <p className="text-[rgba(123,138,156,1)]">Vulneradas</p>
                        </div>

                    </div>
                    <div className="shadow bg-blue-100 grid items-center rounded border border-blue-200 p-3 md:w-[200px] md:h-[150px]">
                        <h1 className="text-black font-bold">Educación</h1>
                        <div>
                            <p className="text-black text-xl font-bold">Estudiando Ing. Civil Informática</p>
                            <p className="text-[rgba(123,138,156,1)]">En curso</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default PERSONALINFORMATION;
