import React , { useState } from 'react';
import  "./App.css"

export default function Man({Men}) {
  let[out, setOut]=useState([Men]);
  let[number,setNumber]=useState(0);

       
  return(
    <>
{console.log("hiii")}
        {Men.map((Man,index)=>{

        const {id,name,age,image}=Man;
        
        return(
          <div className="Man" key={id}>
            <div className="left">
              <img src={image} alt="" />
            </div>
            <div className="right">
              <h5>{ name}</h5>
              <p>Date Of Birth :  {age}</p>

            </div>
            <i className="fa-solid fa-square-xmark cut" onClick={()=>{
              Men.splice(index,1);
              setNumber(number+1);

            }}></i>
      
           </div>

        )


        })}
          


      
</>
  );
    
  
}
