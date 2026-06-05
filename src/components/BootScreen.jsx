import React, { useState, useEffect } from 'react';

function BootScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // El efecto dura exactamente 2 segundos, luego el componente se desmonta
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-[#020617] flex flex-col justify-center items-start p-4 md:p-20 font-mono text-xs sm:text-sm md:text-base text-emerald-500 animate-boot-fade-out pointer-events-none">
      <div className="max-w-2xl">
        <p className="typing-line-1 overflow-hidden whitespace-nowrap border-r-2 border-emerald-500 w-0">
          <span className="text-slate-500">{'>'}</span> system_init --env=production
        </p>
        <p className="typing-line-2 overflow-hidden whitespace-nowrap w-0 opacity-0 mt-2">
          [<span className="text-white">OK</span>] Core modules loaded.
        </p>
        <p className="typing-line-3 overflow-hidden whitespace-nowrap w-0 opacity-0 mt-1">
          [<span className="text-white">OK</span>] Establishing secure connection...
        </p>
        <p className="typing-line-4 overflow-hidden whitespace-nowrap w-0 opacity-0 mt-1">
          [<span className="text-white">OK</span>] Decrypting profile data...
        </p>
        <p className="typing-line-5 overflow-hidden whitespace-nowrap w-0 opacity-0 mt-4 text-white font-bold">
          <span className="text-emerald-500">{'>'}</span> ACCESS GRANTED.
        </p>
      </div>
    </div>
  );
}

export default BootScreen;
