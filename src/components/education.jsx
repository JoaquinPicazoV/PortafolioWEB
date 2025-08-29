import React from 'react';
import eJPT from '../assets/certifications/eJPT.png';
function EDUCATION() {
  return (
    <div className="grid text-center justify-center items-center mb-5">
      <div>
        <h1 className="bg-red-100 p-1 text-[#d32a2a] font-bold inline-block mb-4">Educación</h1>
      </div>
      <div className="grid md:flex md:justify-between gap-6 md:gap-12 w-full px-6">

        <div className="grid w-full gap-6 p-4 md:w-1/2">
  <div className="border border-red-200 bg-white text-left p-5 shadow rounded w-full">
    <h1 className="font-bold text-xl">Ingeniería Civil en Informática</h1>
    <p className="text-[rgba(123,138,156,1)] mb-4">Universidad de Los Lagos</p>
    <div className="flex items-center">
      <p className="mr-5 bg-red-100 p-1 text-[#d32a2a] font-bold text-base rounded">2021 - Presente</p>
      <p className="text-[rgba(123,138,156,1)]">En curso</p>
    </div>
  </div>

  <div className="border border-red-200 bg-white text-left p-5 shadow rounded w-full">
    <h1 className="font-bold text-xl">Certificaciones</h1>
    <p className="text-[rgba(123,138,156,1)] mb-4">Certificaciones reconocidas en la industria</p>

    <div className="flex mb-4 gap-4">
      <img src={eJPT} alt="eJPTv2" className="w-20 h-20 object-contain rounded"/>
      <div className="grid">
        <h3 className="font-bold">Junior Penetration Tester (eJPTv2)</h3>
        <div className="flex items-center">
          <p className="mr-5 bg-red-100 p-1 text-[#d32a2a] font-bold text-base rounded">2025</p>
          <p className="text-[rgba(123,138,156,1)]">INE Security</p>
        </div>
        <p className="text-[rgba(123,138,156,1)]">
          Certificación práctica que simula escenarios reales para evaluar habilidades en metodologías de assessment, auditoría de hosts y redes, pruebas de penetración y análisis de aplicaciones web.
        </p>
      </div>
    </div>
  </div>
</div>

        <div className="border border-red-200 bg-white text-left p-5 shadow rounded w-full md:w-1/2">
          <h1 className="font-bold text-xl">Cursos</h1>
          <p className="text-[rgba(123,138,156,1)] mb-4">Formación complementaria</p>
          <div className="grid mb-4">
            <h3 className="font-bold">Ethical Hacker</h3>
            <div className="flex items-center">
              <p className="mr-5 bg-red-100 p-1 text-[#d32a2a] font-bold text-base rounded">2025</p>
              <p className="text-[rgba(123,138,156,1)]">CISCO Networking Academy</p>
            </div>
            <p className="text-[rgba(123,138,156,1)]">Fundamentos clave del hacking ético: análisis de vulnerabilidades, metodologías ofensivas y pensamiento estratégico ante amenazas reales.</p>
          </div>

          <div className="grid mb-4">
            <h3 className="font-bold">Network Technician Career Path</h3>
            <div className="flex items-center">
              <p className="mr-5 bg-red-100 p-1 text-[#d32a2a] font-bold text-base rounded">2025</p>
              <p className="text-[rgba(123,138,156,1)]">CISCO Networking Academy</p>
            </div>
            <p className="text-[rgba(123,138,156,1)]">Trayectoria Cisco para Técnico en Redes: aprender cómo operan las redes, dispositivos, medios, protocolos, y desarrollar habilidades clave en diagnóstico y soporte técnico de redes.</p>
          </div>

          <div className="grid mb-4">
            <h3 className="font-bold">Junior Penetration Tester</h3>
            <div className="flex items-center">
              <p className="mr-5 bg-red-100 p-1 text-[#d32a2a] font-bold text-base rounded">2025</p>
              <p className="text-[rgba(123,138,156,1)]">TryHackMe</p>
            </div>
            <p className="text-[rgba(123,138,156,1)]">Habilidades esenciales para un Pentester Junior.</p>
          </div>

          <div className="grid">
            <h3 className="font-bold">Liderazgo</h3>
            <div className="flex items-center">
              <p className="mr-5 bg-red-100 p-1 text-[#d32a2a] font-bold text-base rounded">2024</p>
              <p className="text-[rgba(123,138,156,1)]">Santander Open Academy</p>
            </div>
            <p className="text-[rgba(123,138,156,1)]">Tipos de liderazgo y cómo usarlos en cada situación.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EDUCATION;
