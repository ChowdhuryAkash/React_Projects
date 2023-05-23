import React, { useState } from "react";
import "./App.css"
import Data from "./Data"
import Man from "./Man"
function App() {
  let [men,setMen]=useState(Data);
  return (
    <>
    <div className="main">
      <div className="card">

      
        <Man Men={men} />
        
        <button className="button" onClick={()=>{setMen([])}}>
          Clear all

        </button>
      </div>

    </div>
    
    
    </>
  )

  
}

export default App;
