import React from 'react';
import eJPT from '../assets/certifications/eJPT.png';
import ISO27001 from '../assets/certifications/27001Associate.png';
function EDUCATION() {
  return (
    <div className="grid text-center justify-center items-center py-12 md:py-20 bg-slate-900 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Educación</h1>
        <div className="h-1 w-20 bg-red-500 rounded-full mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl px-6 relative z-10">

        <div className="flex flex-col gap-6 w-full">
          <div className="border border-slate-700 bg-slate-800/50 backdrop-blur-sm text-left p-6 md:p-8 shadow-xl rounded-2xl hover:border-red-500/30 transition-colors duration-300">
            <h1 className="font-bold text-2xl text-white mb-1">Ingeniería Civil en Informática</h1>
            <p className="text-slate-400 mb-6 font-medium">Universidad de Los Lagos</p>
            <div className="flex items-center">
              <span className="bg-red-500/10 text-red-400 px-3 py-1 font-semibold text-sm rounded-full mr-4 border border-red-500/20">2021 - Presente</span>
              <p className="text-slate-500 text-sm font-medium">En curso</p>
            </div>
          </div>

          <div className="border border-slate-700 bg-slate-800/50 backdrop-blur-sm text-left p-6 md:p-8 shadow-xl rounded-2xl hover:border-red-500/30 transition-colors duration-300 h-full">
            <h1 className="font-bold text-2xl text-white mb-6">Certificaciones</h1>

            <div className="flex flex-col sm:flex-row mb-4 gap-6 items-start">
              <div className="w-32 h-32 shrink-0 rounded-lg bg-white/10 p-2 border border-slate-600 flex items-center justify-center">
                <img src={eJPT} alt="eJPTv2" className="w-full h-full object-contain" />
              </div>
              <div className="grid gap-2">
                <h3 className="font-bold text-lg text-white">Junior Penetration Tester (eJPTv2)</h3>
                <div className="flex items-center gap-4">
                  <span className="bg-red-500/10 text-red-400 px-3 py-1 font-semibold text-sm rounded-full border border-red-500/20">2025</span>
                  <p className="text-slate-400 text-sm">INE Security</p>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mt-2">
                  Certificación práctica que simula escenarios reales para evaluar habilidades en metodologías de assessment, auditoría de hosts y redes, pruebas de penetración y análisis de aplicaciones web.
                </p>
              </div>
            </div>

            <div className="h-px bg-slate-700/50 w-full my-6"></div>

            <div className="flex flex-col sm:flex-row mb-4 gap-6 items-start">
              <div className="w-32 h-32 shrink-0 rounded-lg bg-white/10 p-2 border border-slate-600 flex items-center justify-center">
                <img src={ISO27001} alt="ISO/IEC 27001 Information Security Associate™" className="w-full h-full object-contain" />
              </div>
              <div className="grid gap-2">
                <h3 className="font-bold text-lg text-white">ISO/IEC 27001 Information Security Associate™</h3>
                <div className="flex items-center gap-4">
                  <span className="bg-red-500/10 text-red-400 px-3 py-1 font-semibold text-sm rounded-full border border-red-500/20">2026</span>
                  <p className="text-slate-400 text-sm">SkillFront</p>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mt-2">
                  Certificación en fundamentos de gestión de la seguridad de la información conforme a la norma internacional ISO/IEC 27001.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-slate-700 bg-slate-800/50 backdrop-blur-sm text-left p-6 md:p-8 shadow-xl rounded-2xl hover:border-red-500/30 transition-colors duration-300 w-full">
          <h1 className="font-bold text-2xl text-white mb-8">Cursos</h1>

          <div className="space-y-8">
            <div className="group">
              <h3 className="font-bold text-lg text-white mb-2 group-hover:text-red-400 transition-colors">Ethical Hacker</h3>
              <div className="flex items-center gap-4 mb-3">
                <span className="bg-red-500/10 text-red-400 px-3 py-1 font-semibold text-xs rounded-full border border-red-500/20">2025</span>
                <p className="text-slate-500 text-sm">CISCO Networking Academy</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">Fundamentos clave del hacking ético: análisis de vulnerabilidades, metodologías ofensivas y pensamiento estratégico ante amenazas reales.</p>
            </div>

            <div className="h-px bg-slate-700/50 w-full"></div>

            <div className="group">
              <h3 className="font-bold text-lg text-white mb-2 group-hover:text-red-400 transition-colors">Network Technician Career Path</h3>
              <div className="flex items-center gap-4 mb-3">
                <span className="bg-red-500/10 text-red-400 px-3 py-1 font-semibold text-xs rounded-full border border-red-500/20">2025</span>
                <p className="text-slate-500 text-sm">CISCO Networking Academy</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">Trayectoria Cisco para Técnico en Redes: aprender cómo operan las redes, dispositivos, medios, protocolos, y desarrollar habilidades clave en diagnóstico y soporte técnico de redes.</p>
            </div>

            <div className="h-px bg-slate-700/50 w-full"></div>

            <div className="group">
              <h3 className="font-bold text-lg text-white mb-2 group-hover:text-red-400 transition-colors">Junior Penetration Tester</h3>
              <div className="flex items-center gap-4 mb-3">
                <span className="bg-red-500/10 text-red-400 px-3 py-1 font-semibold text-xs rounded-full border border-red-500/20">2025</span>
                <p className="text-slate-500 text-sm">TryHackMe</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">Habilidades esenciales para un Pentester Junior.</p>
            </div>

            <div className="h-px bg-slate-700/50 w-full"></div>

            <div className="group">
              <h3 className="font-bold text-lg text-white mb-2 group-hover:text-red-400 transition-colors">Liderazgo</h3>
              <div className="flex items-center gap-4 mb-3">
                <span className="bg-red-500/10 text-red-400 px-3 py-1 font-semibold text-xs rounded-full border border-red-500/20">2024</span>
                <p className="text-slate-500 text-sm">Santander Open Academy</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">Tipos de liderazgo y cómo usarlos en cada situación.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EDUCATION;
