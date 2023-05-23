import React , { useState } from 'react';
import  "./App.css"

export default function Man({Men}) {
  const[out, setOut]=useState([Men]);
       
  return(
    <>

        {Men.map((Man)=>{

        const {id,name,age,image}=Man;
        
        return(
          <div className="Man" key={id}>
            <div className="left">
              <img src={image} alt="" />
            </div>
            <div className="right">
              <h5>{id}{ name}</h5>
              <p>Date Of Birth :  {age}</p>

            </div>
            {/* <i className="fa-solid fa-square-xmark cut" onClick={()=>{
              remove(id)
            }}></i> */}
      
           </div>

        )


        })}
          


      
</>
  );
    
  
}
