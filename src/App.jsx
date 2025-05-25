import CONTACT from './components/contact';
import EDUCATION from './components/education';
import FOOTER from './components/footer';
import INTRODUCTION from './components/introduction';
import PERSONALINFORMATION from './components/personal';
import NETANDCYB from './components/netandcyb';
import WRITEUPS from './components/writeups';
import PROJECTS from './components/projects';
import SKILLS from './components/skills';


function App() {
  return (
    <div className="w-full h-full">
   
        <INTRODUCTION/>
        <PERSONALINFORMATION/>
        <SKILLS/>
        <NETANDCYB/>
        <WRITEUPS/>
        <PROJECTS/>
        <EDUCATION/>
        <CONTACT/>
        <FOOTER/>

    </div>
  );
}

export default App;
