import React from 'react';

function EXPERIENCE() {
  const experiences = [
    {
      role: "Practicante (Práctica Profesional - 360 hrs)",
      company: "Servicio Local de Educación Pública Llanquihue",
      period: "Ene 2026 - Feb 2026 · 2 meses (Presencial)",
      description: [
        "Desarrollo Full Stack, y apoyo en ciberseguridad integral, incluyendo modelado de amenazas (MITRE ATT&CK), KPIs y redacción de políticas normativas aplicables (ISO 27001, Ley 21.663)."
      ],
      skills: ["Desarrollo Seguro", "React & Node.js", "MITRE ATT&CK", "ISO/IEC 27001", "Modelado de amenazas", "Políticas de Seguridad"]
    },
    {
      role: "Practicante (Práctica Intermedia - 176 hrs)",
      company: "Municipalidad de Frutillar",
      period: "Jul 2024 · 1 mes (Presencial)",
      description: [
        "Apoyo administrativo en Transparencia (Ley 20.285), centrado en la gestión documental integral: digitalización, censura de información sensible, registro de datos en Excel y administración de archivos mediante Google Drive."
      ],
      skills: ["Transparencia Municipal", "Excel", "Digitalización", "Google Drive", "Gestión Documental"]
    }
  ];

  return (
    <div className="w-full flex justify-center items-center py-12 md:py-20 bg-transparent relative border-t border-slate-800">
      <div className="w-full md:w-5/6 z-10 px-4">
        
        <div className="flex flex-col justify-center items-center mb-8 md:mb-12 border-b border-white/10 pb-4 px-2">
          <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-white font-mono uppercase tracking-widest text-center cyber-glitch-hover cursor-default w-fit mx-auto flex flex-row flex-wrap items-center justify-center gap-2 md:gap-3 max-w-full"><span className="text-emerald-500 shrink-0">{'>'}</span> <span className="text-center">[ EXPERIENCIA LABORAL ]</span></h1>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.length > 0 ? (
            <div className="relative border-l border-white/10 ml-4 md:ml-0">
              {experiences.map((exp, index) => (
                <div key={index} className="mb-10 ml-6 md:ml-10 relative group">
                  {/* Timeline dot */}
                  <span className="absolute -left-[34px] md:-left-[49px] flex items-center justify-center w-5 h-5 md:w-6 md:h-6 bg-black border border-emerald-500 transition-colors duration-300"></span>
                  
                  {/* Content Card */}
                  <div className="bg-black/80 cyber-shine border border-white/10 border-l-4 border-l-emerald-500 p-4 md:p-8 relative hover:border-l-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 md:mb-4 gap-2">
                      <h3 className="text-lg md:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">{exp.role}</h3>
                      <span className="text-sm md:text-base font-mono text-emerald-400 bg-emerald-500/5 px-3 py-1 border border-emerald-500/20 inline-block w-fit">[{exp.period}]</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-slate-300 mb-4 flex items-center"><span className="text-emerald-500 font-mono mt-1 mr-2">{'>'}</span> {exp.company}</h4>
                    <ul className="text-slate-400 leading-relaxed text-sm md:text-base mb-6 list-disc list-outside ml-4 space-y-2">
                      {Array.isArray(exp.description) ? (
                        exp.description.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))
                      ) : (
                        <li>{exp.description}</li>
                      )}
                    </ul>

                    {/* Skills/Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="text-xs font-mono bg-white/5 text-slate-300 px-2 py-1 border border-white/10">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 bg-slate-800/20 border border-slate-700/50 rounded-2xl border-dashed">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-slate-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-medium text-slate-300 mb-2">Próximamente</h3>
              <p className="text-slate-500 text-center max-w-md">
                Aún no he agregado mi experiencia laboral y prácticas.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EXPERIENCE;
