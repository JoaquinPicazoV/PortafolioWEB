import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy loading de componentes y páginas pesadas
const Home = lazy(() => import('./pages/Home'));
const PentestingWriteups = lazy(() => import('./pages/PentestingWriteups'));
const SocWriteups = lazy(() => import('./pages/SocWriteups'));
const ThreatMap = lazy(() => import('./components/ThreatMap'));
const PentagonDefense = lazy(() => import('./components/PentagonDefense'));
const BootScreen = lazy(() => import('./components/BootScreen'));

// Loader minimalista para transiciones
const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-[#020617] z-50">
    <div className="w-10 h-10 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <PentagonDefense />
      </Suspense>
      <div className="min-h-screen text-slate-300 font-sans selection:bg-emerald-500/30 w-full relative overflow-x-hidden">
        <div className="scanlines pointer-events-none"></div>
        <Suspense fallback={null}>
          <BootScreen />
          <ThreatMap />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pentesting-writeups" element={<PentestingWriteups />} />
            <Route path="/soc-writeups" element={<SocWriteups />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
