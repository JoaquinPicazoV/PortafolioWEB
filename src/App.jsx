import CONTACT from './components/contact';
import EDUCATION from './components/education';
import FOOTER from './components/footer';
import INTRODUCTION from './components/introduction';
import PERSONALINFORMATION from './components/personalInformation.JSX';
import PROJECTS from './components/projects';
import SKILLS from './components/skills';


function App() {
  return (
    <div className="w-full h-full">
   
        <INTRODUCTION/>
   
        <SKILLS/>
        <PROJECTS/>
        <EDUCATION/>
        <CONTACT/>
        <FOOTER/>

    </div>
  );
}

export default App;
