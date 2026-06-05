import React, { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography, Graticule, Line, Marker, Sphere } from 'react-simple-maps';
import geoUrl from '../data/world.json';

const REGIONS = [
  [-100, 40], // USA
  [-60, -10], // Brazil
  [10, 50],   // Europe (Germany/France)
  [100, 35],  // China
  [135, 35],  // Japan
  [30, 60],   // Russia
  [78, 20],   // India
  [135, -25], // Australia
  [20, 0],    // Central Africa
  [-100, 20], // Mexico
  [-70, -30], // Chile/Argentina
];

// Componente memoizado para evitar recalcular los caminos SVG del mapa (muy pesado para CPU)
const StaticMapBackground = React.memo(() => (
  <>
    <Sphere fill="#020617" stroke="#3b82f6" strokeWidth={1} style={{ filter: 'drop-shadow(0 0 20px rgba(59,130,246,0.3))' }} />
    <Graticule stroke="#1e293b" strokeWidth={0.5} opacity={0.6} />
    <Geographies geography={geoUrl}>
      {({ geographies }) =>
        geographies.map((geo) => (
          <Geography
            key={geo.rsmKey}
            geography={geo}
            fill="#0f172a"
            stroke="#334155"
            strokeWidth={0.5}
            style={{
              default: { outline: "none" },
              hover: { outline: "none" },
              pressed: { outline: "none" },
            }}
          />
        ))
      }
    </Geographies>
  </>
));

// Componente separado para manejar el estado de ataques independientemente del fondo
const AttacksLayer = React.memo(() => {
  const [attacks, setAttacks] = useState([]);

  useEffect(() => {
    const spawnAttack = () => {
      const startIdx = Math.floor(Math.random() * REGIONS.length);
      let endIdx = Math.floor(Math.random() * REGIONS.length);
      while(endIdx === startIdx) endIdx = Math.floor(Math.random() * REGIONS.length);

      const start = REGIONS[startIdx];
      const end = REGIONS[endIdx];
      
      const rand = Math.random();
      let color = '#ef4444'; // Red
      if (rand > 0.4 && rand <= 0.7) color = '#10b981'; // Green
      else if (rand > 0.7) color = '#06b6d4'; // Cyan

      const id = Date.now() + Math.random();
      
      setAttacks(prev => {
        const now = Date.now();
        const active = prev.filter(a => now - a.timestamp < 3500); 
        return [...active, { id, start, end, timestamp: now, color }];
      });
    };

    const interval = setInterval(spawnAttack, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {attacks.map(attack => (
        <g key={attack.id}>
          <Line
            from={attack.start}
            to={attack.end}
            stroke={attack.color}
            strokeWidth={2.5}
            strokeLinecap="round"
            className="attack-line"
            style={{
              filter: `drop-shadow(0px 0px 8px ${attack.color}) opacity(0.8)`
            }}
          />
          <Marker coordinates={attack.start}>
            <circle r={2} fill="#ffffff" />
            <circle r={6} fill={attack.color} className="animate-ping" opacity={0.6} />
          </Marker>
          <Marker coordinates={attack.end}>
            <circle r={2} fill="#ffffff" />
            <circle r={6} fill={attack.color} className="animate-ping" opacity={0.6} />
          </Marker>
        </g>
      ))}
    </>
  );
});

function ThreatMap() {
  const [dimensions, setDimensions] = useState({ width: 800, height: 800, scale: 250 });

  useEffect(() => {
    let timeoutId;
    let lastWidth = window.innerWidth;
    
    const updateDimensions = () => {
      if (Math.abs(window.innerWidth - lastWidth) < 50 && dimensions.width !== 800) {
          return; 
      }
      lastWidth = window.innerWidth;
      
      const w = window.innerWidth;
      const h = window.innerHeight;
      const minDim = Math.min(w, h);
      setDimensions({
        width: w,
        height: h,
        scale: minDim * 0.45 
      });
    };

    updateDimensions();
    
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateDimensions, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#020617] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#020617]/50 to-[#020617] pointer-events-none" />
      <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-80">
        <ComposableMap
          projection="geoOrthographic"
          projectionConfig={{ 
            scale: dimensions.scale,
            rotate: [-40, -15, 0] // Rotación fija enfocada en América/Atlántico (visualmente agradable)
          }}
          width={dimensions.width}
          height={dimensions.height}
          style={{ width: "100%", height: "100%" }}
        >
          <StaticMapBackground />
          <AttacksLayer />
        </ComposableMap>
      </div>
    </div>
  );
}

export default React.memo(ThreatMap);
