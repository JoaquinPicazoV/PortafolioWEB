import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import obfuscatorPlugin from 'rollup-plugin-obfuscator';
import { sri } from 'vite-plugin-sri3';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    sri(), // Añade hashes SRI criptográficos a todos los scripts y estilos generados
    obfuscatorPlugin({
      global: false, // false para no romper node_modules de terceros como three.js
      options: {
        compact: true,
        controlFlowFlattening: false, // Desactivado para evitar lag en el navegador
        deadCodeInjection: false, // Desactivado para evitar sobrecarga del CPU y RAM
        debugProtection: false,
        debugProtectionInterval: 4000,
        disableConsoleOutput: true,
        identifierNamesGenerator: 'hexadecimal',
        log: false,
        renameGlobals: false,
        selfDefending: true,
        stringArray: true,
        stringArrayEncoding: ['base64'],
        stringArrayThreshold: 0.5, // Reducido para mejor rendimiento
        unicodeEscapeSequence: false
      }
    })
  ],
  esbuild: {
    drop: ['console', 'debugger'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          maps: ['react-simple-maps', 'd3-geo'],
          three: ['three']
        }
      }
    }
  },
  server: {
    host: true
  }
})
