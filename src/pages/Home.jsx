import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CONTACT from '../components/contact';
import EDUCATION from '../components/education';
import FOOTER from '../components/footer';
import INTRODUCTION from '../components/introduction';

import NETANDCYB from '../components/netandcyb';
import PROJECTS from '../components/projects';
import EXPERIENCE from '../components/experience';


function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="w-full">
      <INTRODUCTION />
      <EDUCATION />
      <NETANDCYB />
      <PROJECTS />
      <EXPERIENCE />


      <CONTACT />
      <FOOTER />
    </div>
  );
}

export default Home;
