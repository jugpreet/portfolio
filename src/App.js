import { useRef } from 'react';
import './App.css';
import Header from './Header';
import FirstIntro from './FirstInto';
import About from './About';
import Projects from './Projects';
import "./stars.scss";

function App() {
  const about = useRef(null);
  const projects = useRef(null);
  return (
    <div className='bg-image background'>
      <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      <Header about={about} projects={projects}/>
      <div className='h-[50vh]'><FirstIntro/></div>
      <div ref={about} className='h-[50vh]'><About/></div>
      <div ref={projects} className='h-[150vh]'><Projects/></div>
    </div>
  );
}

export default App;
