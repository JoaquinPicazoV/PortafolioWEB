import React, { useEffect } from 'react';

const PentagonDefense = () => {
  useEffect(() => {
    // 1. Deshabilitar el clic derecho
    const handleContextMenu = (e) => {
      e.preventDefault();
      console.warn("ACCESO DENEGADO: Clic derecho deshabilitado.");
    };

    // 2. Deshabilitar atajos de teclado para herramientas de desarrollo
    const handleKeyDown = (e) => {
      // Prevenir F12
      if (e.key === 'F12') {
        e.preventDefault();
        console.warn("ACCESO DENEGADO: F12 bloqueado.");
      }
      
      // Prevenir Ctrl+Shift+I (Herramientas de desarrollo)
      // Prevenir Ctrl+Shift+J (Consola)
      // Prevenir Ctrl+Shift+C (Inspector)
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) {
        e.preventDefault();
        console.warn("ACCESO DENEGADO: Combinación de teclas bloqueada.");
      }

      // Prevenir Ctrl+U (Ver código fuente)
      if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
        e.preventDefault();
        console.warn("ACCESO DENEGADO: Visualización de código fuente bloqueada.");
      }
    };

    // 3. Deshabilitar copiar, cortar y pegar (opcional, pero aumenta la "seguridad")
    const handleCopyCut = (e) => {
      e.preventDefault();
      console.warn("ACCESO DENEGADO: Operación de portapapeles bloqueada.");
    };

    // 4. Detección rudimentaria de DevTools (haciendo uso de un debugger infinito si está abierto)
    // Nota: Esto es un método agresivo
    const detectDevTools = () => {
      const check = new Function("debugger;");
      setInterval(() => {
        const start = performance.now();
        check();
        const end = performance.now();
        if (end - start > 100) {
          // Si tarda más de 100ms, es muy probable que el debugger haya pausado la ejecución
          document.body.innerHTML = "<div style='width: 100vw; height: 100vh; background: black; color: #10B981; display: flex; justify-content: center; align-items: center; font-family: monospace; font-size: 24px;'>[ SISTEMA DEFENSA PENTÁGONO ACTIVO ]<br/><br/>INTRUSIÓN DETECTADA. CONEXIÓN TERMINADA.</div>";
        }
      }, 2000);
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('copy', handleCopyCut);
    document.addEventListener('cut', handleCopyCut);
    
    // Iniciar detección de DevTools
    // Desactivado para no bloquear a reclutadores técnicos que abran DevTools.
    // if (import.meta.env.PROD) {
    //   detectDevTools();
    // }

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('copy', handleCopyCut);
      document.removeEventListener('cut', handleCopyCut);
    };
  }, []);

  return null;
};

export default React.memo(PentagonDefense);
