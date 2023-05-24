import React, { useState ,useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

function App() {
   const url = 'https://course-api.com/react-tours-project'
  //const url="./Data.js"
  let [loading,setLoading]=useState(true);
  let [tours,setTours]=useState([]);
  let num=100;


  const fetchData=async ()=>{
    setLoading(true);
    let response=await fetch(url);
    let data=await response.json();
    setTours(data);
    setLoading(false);

    

  }

 
  useEffect(()=>{
    setLoading(true);
    fetchData();


  },[]);
  if(loading){
    return(
      <>
      <Loading name="akash" id={num}/>
      </>
    )
  }
function test(data){
  const newTours = tours.filter((tour) => tour.id !== data)
  setTours(newTours);
}
if(tours.length==0){
  return(
    <>
    <p className="no-data">No Data !</p>
    <button className="btn" onClick={fetchData}> Refresh</button>
    
    </>
  )
}


  return (
   <>

   <Tours tours={tours} Alert={test}/>
   
   
   </>
  );
}

export default App;
