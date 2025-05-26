import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';

function FOOTER() {
    return (
        <div className="text-center pl-8 pr-5">
             <div className="mb-5">
                <div className="bg-gray-300 h-[1px]"></div>
            </div>
            <div className="flex justify-between mb-8">
                <div className="text-left">
                    <div className="font-bold flex" >
                        <p className="text-[#d32a2a] mr-1">Joaquín</p>
                        <p className="text-black">Picazo</p>
                    </div>
                    <p className="text-[rgba(123,138,156,1)]">Estudiante de Ingeniería Civil Informática</p>
                </div>
                <div className="flex gap-2">
                    <button className="rounded"><FontAwesomeIcon icon={faGithub} size="2x" className='text-black'/></button>
                    <button className="rounded"><FontAwesomeIcon icon={faLinkedin} size="2x" className='text-black'/></button>
                    <button className="rounded"><FontAwesomeIcon icon={faEnvelope} size="2x" className='text-black'/></button>
                </div>
            </div>           
        </div>
    );
}

export default FOOTER;
