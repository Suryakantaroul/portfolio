import React,{useState } from 'react'
import { Link, } from "react-router-dom";
import Sun from "../Sun.svg"
import Moon from "../Moon.svg"

function Navbar({mode,setMode}) {
    
  return (
    <nav style={{fontWeight:"777",fontSize:"1.2rem",display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:mode?"rgb(120, 67, 225)":"rgb(27, 7, 66)",color:mode?"rgb(244, 244, 241)":"rgb(226, 221, 231)"}}>
        <div>
            It's me Surya
        </div>
       <ul style={{listStyle:"none",display:"flex",gap:"1.5rem",fontWeight:"600",color:"white"}}>
        <li><Link to="/" style={{ color: "white",textDecoration: "none"}}>Home</Link></li>
        <li><Link to="/about" style={{ color: "white",textDecoration: "none"}} >About</Link></li>
        <li><Link to="/techstack" style={{ color: "white",textDecoration: "none"}}>Tech Stack</Link></li>
        <li><Link to="/project" style={{ color: "white",textDecoration: "none"}}>Projects</Link></li>
        <li><Link to="contact" style={{ color: "white",textDecoration: "none"}}>Contact</Link></li>
        <button style={{backgroundColor:mode?"lightblue":"brown"}} type='button' onClick={()=>setMode(!mode)}>
        <img  src={mode ? Sun : Moon} alt="Toggle Theme" width="10" height="10" />
        </button>
       </ul>
    </nav>
  )
}

export default Navbar


