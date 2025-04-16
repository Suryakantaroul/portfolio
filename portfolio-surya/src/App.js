import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact'
import Techstack from './components/Techstack'
import Project from './components/Projects'


function App() {
  const[mode,setMode]=useState(true)
  return (
    <Router>
    <div  style={{ backgroundColor: mode ? '#f0f0f0' : 'black', color: mode ? 'black' : 'white',minHeight: '100vh'  }}>
       <Navbar mode={mode} setMode={setMode}/>
       
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/techstack" element={<Techstack/>}/>
        </Routes>
       

    </div>
    </Router>
  );
}

export default App;
