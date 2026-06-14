import React from 'react';
import eJPT from '../assets/certifications/eJPT.png';
import ISO27001 from '../assets/certifications/27001Associate.png';
import ICCA from '../assets/certifications/ICCA.png';
import CLLMSP from '../assets/certifications/CLLMSP.png';

function EDUCATION() {
  return (
    <div className="grid text-center justify-center items-center py-12 md:py-20 bg-transparent relative">
      {/* Decorative blobs removed for cleaner look */}

        <div className="flex flex-col justify-center items-center mb-8 md:mb-12 border-b border-white/10 pb-4 px-2">
        <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-white font-mono uppercase tracking-widest text-center cyber-glitch-hover cursor-default w-fit mx-auto flex flex-row flex-wrap items-center justify-center gap-2 md:gap-3 max-w-full"><span className="text-emerald-500 shrink-0">{'>'}</span> <span className="text-center">[ EDUCACIÓN ]</span></h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl px-4 md:px-6 relative z-10">

        <div className="flex flex-col gap-6 w-full animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="border cyber-shine border-white/10 border-l-4 border-l-emerald-500 bg-black/80 p-6 md:p-8 relative flex flex-col justify-center">
            <div className="absolute top-0 right-0 p-2 font-mono text-xs text-slate-600">+SYS_EDU_1</div>
            <h1 className="font-bold text-xl md:text-2xl text-white mb-2">Ingeniería Civil en Informática</h1>
            <p className="text-slate-400 mb-6 font-medium">Universidad de Los Lagos</p>
            <div className="flex flex-wrap justify-center items-center gap-3">
              <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 font-mono text-sm border border-emerald-500/20">2021 - Presente</span>
              <p className="text-slate-500 text-sm font-medium">En curso</p>
            </div>
          </div>

          <div className="border cyber-shine border-white/10 border-l-4 border-l-emerald-500 bg-black/80 p-6 md:p-8 relative h-full animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="absolute top-0 right-0 p-2 font-mono text-xs text-slate-600">+SYS_COUR_1</div>
            <h1 className="font-bold text-xl md:text-2xl text-white mb-8 text-left">[  CURSOS  ]</h1>

            <div className="space-y-8">
              <div className="group text-left">
                <h3 className="font-bold text-lg text-white mb-2 group-hover:text-emerald-400 transition-colors">Respuesta a Incidentes y Taxonomía en Ciberseguridad</h3>
                <div className="flex items-center gap-4 mb-3">
                  <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 font-mono text-xs rounded-full border border-emerald-500/20">2026</span>
                  <p className="text-slate-500 text-sm">Agencia Nacional de Ciberseguridad de Chile</p>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">Protocolos de respuesta, modelamiento de amenazas y el procedimiento práctico para el reporte de incidentes a través del portal gubernamental.</p>
              </div>

              <div className="h-px bg-white/5 w-full"></div>

              <div className="group text-left">
                <h3 className="font-bold text-lg text-white mb-2 group-hover:text-emerald-400 transition-colors">OWASP API Security Top 10</h3>
                <div className="flex items-center gap-4 mb-3">
                  <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 font-mono text-xs rounded-full border border-emerald-500/20">2026</span>
                  <p className="text-slate-500 text-sm">APIsec University</p>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">Seguridad de APIs basado en el estándar OWASP API Security Top 10 (2023).</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border cyber-shine border-white/10 border-l-4 border-l-emerald-500 bg-black/80 p-4 md:p-8 relative w-full animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <div className="absolute top-0 right-0 p-2 font-mono text-xs text-slate-600">+SYS_CERT_1</div>
          <h1 className="font-bold text-xl md:text-2xl text-white mb-6 font-mono uppercase text-left">[ CERTIFICACIONES ]</h1>

          <div className="flex flex-col sm:flex-row mb-4 gap-4 sm:gap-6 items-start">
            <div className="w-20 h-20 sm:w-32 sm:h-32 shrink-0 bg-white/5 p-2 border border-white/10 flex items-center justify-center">
              <img src={eJPT} loading="lazy" alt="eJPTv2" className="w-full h-full object-contain" />
            </div>
            <div className="grid gap-2 text-left">
              <h3 className="font-bold text-lg text-white">Junior Penetration Tester (eJPTv2)</h3>
              <div className="flex items-center gap-4">
                <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 font-mono text-sm rounded-full border border-emerald-500/20">2025</span>
                <p className="text-slate-400 text-sm">INE Security</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mt-2">
                Certificación práctica que simula escenarios reales para evaluar habilidades en metodologías de assessment, auditoría de hosts y redes, pruebas de penetración y análisis de aplicaciones web.
              </p>
            </div>
          </div>



          <div className="h-px bg-slate-700/50 w-full my-6"></div>

          <div className="flex flex-col sm:flex-row mb-4 gap-4 sm:gap-6 items-start">
            <div className="w-20 h-20 sm:w-32 sm:h-32 shrink-0 rounded-lg bg-white/5 p-2 border border-white/10 flex items-center justify-center">
              <img src={ISO27001} loading="lazy" alt="ISO/IEC 27001 Information Security Associate™" className="w-full h-full object-contain" />
            </div>
            <div className="grid gap-2 text-left">
              <h3 className="font-bold text-lg text-white">ISO/IEC 27001 Information Security Associate™</h3>
              <div className="flex items-center gap-4">
                <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 font-mono text-sm rounded-full border border-emerald-500/20">2026</span>
                <p className="text-slate-400 text-sm">SkillFront</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mt-2">
                Certificación en fundamentos de gestión de la seguridad de la información conforme a la norma internacional ISO/IEC 27001.
              </p>
            </div>
          </div>

          <div className="h-px bg-slate-700/50 w-full my-6"></div>

          <div className="flex flex-col sm:flex-row mb-4 gap-4 sm:gap-6 items-start">
            <div className="w-20 h-20 sm:w-32 sm:h-32 shrink-0 bg-white/5 p-0 sm:p-1 border border-white/10 flex items-center justify-center overflow-hidden">
              <img src={CLLMSP} loading="lazy" alt="Certified LLM Security Professional (CLLMSP)" className="w-full h-full object-contain scale-[1.7]" />
            </div>
            <div className="grid gap-2 text-left">
              <h3 className="font-bold text-lg text-white">Certified LLM Security Professional (CLLMSP)</h3>
              <div className="flex items-center gap-4">
                <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 font-mono text-sm rounded-full border border-emerald-500/20">2026</span>
                <p className="text-slate-400 text-sm">Red Team Leaders</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mt-2">
                Seguridad en LLMs, considerando riesgos como prompt injection, jailbreaks, el OWASP Top 10 para LLM y los aspectos de gobernanza en IA.
              </p>
            </div>
          </div>

          <div className="h-px bg-slate-700/50 w-full my-6"></div>

          <div className="flex flex-col sm:flex-row mb-4 gap-4 sm:gap-6 items-start">
            <div className="w-20 h-20 sm:w-32 sm:h-32 shrink-0 bg-white/5 p-2 border border-white/10 flex items-center justify-center">
              <img src={ICCA} loading="lazy" alt="INE Certified Cloud Associate (ICCA)" className="w-full h-full object-contain" />
            </div>
            <div className="grid gap-2 text-left">
              <h3 className="font-bold text-lg text-white">INE Certified Cloud Associate (ICCA)</h3>
              <div className="flex items-center gap-4">
                <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 font-mono text-sm rounded-full border border-emerald-500/20">2026</span>
                <p className="text-slate-400 text-sm">INE Security</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mt-2">
                Fundamentos técnicos y estratégicos de plataformas cloud (AWS, Azure, GCP) para entornos empresariales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EDUCATION;
