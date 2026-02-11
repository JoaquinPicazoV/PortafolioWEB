import NMAP from '../assets/logos/nmap.png';
import HYDRA from '../assets/logos/hydra.png';
import METASPLOIT from '../assets/logos/metasploit.png';
import JOHN from '../assets/logos/john.png';
import MAS from '../assets/logos/mas.png';
import KALI from '../assets/logos/kali.png';
import REACT from '../assets/logos/react.svg';
import TAILWINDCSS from '../assets/logos/tailwindcss.png';
import JS from '../assets/logos/js.png';
import HTML from '../assets/logos/html.png';
import EXCEL from '../assets/logos/excel.png';

export const cybProjects = [
    {
        title: "Writeups máquinas vulneradas para eJPTv2 (+50)",
        subtitle: "Realizo mis propios writeups de las máquinas vulneradas en entornos controlados para preparación de la certificación eJPTv2.",
        url: "https://github.com/JoaquinPicazoV/Writeups-Maquinas-eJPTv2",
        languages: [
            { name: "Kali Linux", logo: KALI },
            { name: "Nmap", logo: NMAP },
            { name: "Hydra", logo: HYDRA },
            { name: "Metasploit", logo: METASPLOIT },
            { name: "John", logo: JOHN },
            { name: "Otras herramientas", logo: MAS }
        ]
    },
    {
        title: "Buscador de Vulnerabilidades CVE",
        subtitle: "Buscador de CVEs mediante el uso de la API de NVD. Además de acceder al CVE, podría mostrar detalles relevantes para un pentester, como una breve descripción, severidad, vector de ataque CVSS, CWE asociado, detalles de ataque (medio de ataque, complejidad y si requiere privilegios), entre otros.",
        url: "https://github.com/JoaquinPicazoV/Buscador-CVEs",
        languages: [
            { name: "React", logo: REACT },
            { name: "Tailwindcss", logo: TAILWINDCSS },
            { name: "JS", logo: JS },
            { name: "HTML", logo: HTML },
        ]
    },
    {
        title: "Excel técnicas y vulnerabilidades máquinas para eJPTv2",
        subtitle: "Listado de máquinas para eJPTv2 de forma detallada: dificultad, sistema operativo, técnicas y vulnerabilidades.",
        url: "https://docs.google.com/spreadsheets/d/1gsqUpy1JD9BvEVzW6hf2StR2F8PbDi50OESjaN-8K_E/edit?usp=sharing",
        languages: [
            { name: "Excel", logo: EXCEL },
        ]
    },
];
