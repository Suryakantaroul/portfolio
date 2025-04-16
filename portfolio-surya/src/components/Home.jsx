import React from 'react';
import pic from "../p1.jpg"

function Home() {
  return (
    <div style={{ display:"flex",justifyContent:"space-around",padding: "2rem", fontSize: "1.5rem", lineHeight: "2rem" }}>
      <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit" }}>
        Hi 👋,<br/>
        My name is <br/>
        Surya Roul  <br/>
        I build things for the web
      </pre>
      <img src={pic} alt="pic" style={{height:"150px", width:"125px",borderRadius:"45%"}}/>
    </div>
  );
}

export default Home;
