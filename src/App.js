import { useRef } from 'react';
import './App.css';
import Header from './Header';
import FirstIntro from './FirstInto';
import About from './About';
import Projects from './Projects';
import "./stars.scss";
import Skills from './Skills';

function App() {
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  return (
    <div className='bg-image background'>
      <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      <Header about={about} projects={projects} skills={skills}/>
      <div className='h-[100vh]'><FirstIntro/></div>
      <div ref={about} className='md:h-[30vh]'><About/></div>
      <div ref={skills} className='md:h-[30vh]'><Skills/></div>
      <div ref={projects} className='md:h-[150vh]'><Projects/></div>
    </div>
  );
}

export default App;
