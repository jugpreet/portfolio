import { useRef } from 'react';
import './App.css';
import Header from './Header';
import FirstIntro from './FirstInto';
import About from './About';
import Projects from './Projects';
import Contacts from './Contacts';
import "./stars.scss";

function App() {
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  return (
    <div className='bg-image background'>
      <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      <Header about={about} projects={projects} contact={contact}/>
      <FirstIntro/>
      <div ref={about}><About/></div>
      <div ref={projects}><Projects/></div>
      <div ref={contact}><Contacts/></div>
    </div>
  );
}

export default App;
