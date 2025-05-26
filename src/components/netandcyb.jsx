import { React } from 'react';
import PACKET from '../assets/logos/packet.png';
import JAVA from '../assets/logos/java.png';
import C from '../assets/logos/c.png';
import NMAP from '../assets/logos/nmap.png';
import HYDRA from '../assets/logos/hydra.png';
import METASPLOIT from '../assets/logos/metasploit.png';
import PYTHON from '../assets/logos/python.png';
import JOHN from '../assets/logos/john.png';
import BASH from '../assets/logos/bash.png';
import BURPSUITE from '../assets/logos/burpsuite.png';
import WIRESHARK from '../assets/logos/wireshark.png';
import SQLMAP from '../assets/logos/sqlmap.png';
import MAS from '../assets/logos/mas.png';
import KALI from '../assets/logos/kali.png';
import ReactIcon from '../assets/logos/react.svg';
import PDF from '../assets/logos/PDF.png';

function NETANDCYB() {
  const projects = [
    {
      title: "Writeups máquinas vulneradas",
      subtitle: "Realizo mis writeups a medida que voy vulnerando máquinas en entornos controlados.",
      languages: [{ name: "Kali Linux", logo: KALI },{ name: "Nmap", logo: NMAP },{ name: "Hydra", logo: HYDRA },{ name: "Metasploit", logo: METASPLOIT },{ name: "John", logo: JOHN },{ name: "Otras herramientas", logo: MAS }]
    },
    {
      title: "Red Empresarial con Router-on-a-Stick y VLANs",
      subtitle: "Se implementan múltiples VLANs y un router que enruta entre ellas usando subinterfaces (Router-on-a-Stick). Gateway centralizado.",
      languages: [{ name: "Packet Tracer", logo: PACKET }]
    },
    {
      title: "Configuración de Switch con seguridad básica",
      subtitle: "Configuración de VLANs y seguridad en puertos para limitar conexiones físicas y proteger la red contra dispositivos no autorizados y ataques en capa 2.",
      languages: [{ name: "Packet Tracer", logo: PACKET }]
    },
    {
      title: "VLAN básica",
      subtitle: "Segmentación de red mediante VLANs para aislar tráfico entre departamentos, reduciendo riesgos de acceso no autorizado y ataques laterales.",
      languages: [{ name: "Packet Tracer", logo: PACKET }]
    },
    {
      title: "Guía rápida de Nmap - Reconocimiento en entornos de red",
      subtitle: "Cheat sheet con los comandos y parámetros de Nmap. Ideal para acelerar y documentar la fase de escaneo en entornos controlados. Cada comando/parámetro es situacional.",
      languages: [{ name: "PDF", logo: PDF }]
    },
    {
      title: "LAN con servidor DHCP",
      subtitle: "Red LAN simple con servidor DHCP. Sin embargo, la configuración actual permite que un atacante podría configurar la IP y máscara manualmente, permitiendo comunicarse con los dispositivos de la red.",
      languages: [{ name: "Packet Tracer", logo: PACKET }]
    },
    {
      title: "Conexión LAN-WAN",
      subtitle: "Redes LAN interconectadas por WAN entre ciudades. Todos los dispoistivos tienen comunicación entre si y sin medidas de seguridad.",
      languages: [{ name: "Packet Tracer", logo: PACKET }]
    },
    {
      title: "Topología de Red LAN Simple",
      subtitle: "Red LAN simple. Dos dispositivos en la misma red, con comunicación entre si. Evidencia la necesidad de segmentación, VLANs y ACLs.",
      languages: [{ name: "Packet Tracer", logo: PACKET }]
    },
  ];

  return (
    <div className="w-full flex justify-center items-center py-8">
      <div className="w-full md:w-2/3">
        <div className="flex justify-center items-center mb-4">
          <h1 className="bg-red-100 p-1 text-[#d32a2a] font-bold inline-block">Proyectos - Redes y Ciberseguridad</h1>
        </div>
        <div className="w-full overflow-x-auto flex gap-4 p-4">
          <div className="flex gap-4 justify-start ">
            {projects.map((project, index) => (
              <div className="bg-white p-6 border border-red-200 rounded-lg shadow-lg w-[300px]" key={index}>
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{project.subtitle}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.languages.map((language, i) => (
                    <div key={i} className="flex items-center bg-gray-100 px-2 py-1 rounded-full text-sm">
                      <img src={language.logo} className="h-5 object-contain mr-1" />
                      <p>{language.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NETANDCYB;
