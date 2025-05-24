import { React } from 'react'

function PERSONALINFORMATION() {

    return (
        <div className="w-full grid bg-white p-5 md:flex">
            <div className="grid justify-center items-center md:w-1/2">
                <div className='flex'>
                    <h1 className="bg-blue-100 p-1 text-[rgba(4,105,161,1)] font-bold inline-block">Sobre mí</h1>
                </div>
                <p className="text-[rgba(123,138,156,1)] mb-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perferendis ab adipisci in illum numquam nam, neque nulla,
                    veritatis id ad iusto quos, dolorum quaerat repellat recusandae fugiat iure officia. Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Veniam magnam sequi dignissimos magni numquam placeat sint perspiciatis natus blanditiis vitae, doloribus,
                    atque nobis. Tempora est fugit sit in, minus veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nulla.
                    Accusantium ipsam unde ut natus perferendis itaque doloremque debitis consequatur cupiditate nostrum, expedita quae quasi dolore
                    similique voluptatibus perspiciatis animi?</p>
                <p className="text-[rgba(123,138,156,1)] mb-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perferendis ab adipisci in illum numquam nam, neque nulla,
                    veritatis id ad iusto quos, dolorum quaerat repellat recusandae fugiat iure officia. Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Veniam magnam sequi dignissimos magni numquam placeat sint perspiciatis natus blanditiis vitae, doloribus,
                    atque nobis. Tempora est fugit sit in, minus veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nulla.
                    Accusantium ipsam unde ut natus perferendis itaque doloremque debitis consequatur cupiditate nostrum, expedita quae quasi dolore
                    similique voluptatibus perspiciatis animi?</p>
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
                    <h1 className="text-black font-bold">Tecnologías</h1>
                    <div>
                        <p className="text-black text-xl font-bold">5+</p>
                        <p className="text-[rgba(123,138,156,1)]">Dominadas</p>
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
