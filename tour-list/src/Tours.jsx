import React from 'react';
import './App.css'
export default function Tours(props) {
    
    let tours=props.tours;
    let cancelTour=()=>{
        return
    }
return(
    <>
     {
        
       tours.map((tour,index)=>{
        let{id,name,info,image,price}=tour;
        return(
            <div className="tours">
                {/* <h5 className="heading">All Tour Lists</h5> */}
        <div className="middle">
        <div className="tour">
            <div className="top" style={{backgroundImage:`url(${image})`}}>
                

            </div>
            <div className="bottom">
            <div className="b-top">
                <p>{name}</p>
                <span>$ {price}</span>
            </div>
            <div className="b-mid">
                <p>{info}</p>
                     </div>
            <div className="b-bottom">
                <button className="btn" onClick={()=>{props.Alert(id)}}>Not interested</button>
            </div>
            </div>
        </div>
        </div>
        
    
    </div> 
        )

       })
    
     }
    </>
 
);

  
}
