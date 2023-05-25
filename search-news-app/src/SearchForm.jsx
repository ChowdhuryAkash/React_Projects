import React ,{ useState , useEffect }from 'react';
import "./App.css"

export default function SearchForm(props) {

    let [search, setSearch]=useState("");
    let numOfNews=props.news.length;   
    console.log(numOfNews) 
    let first=props.first;
    let last=props.last;
    let number=props.onePageNewsNumber;





    let update=()=>{
      props.updateQuery(search);

    }
    useEffect(()=>{
      update();

    })


  return (
    <>
    
    <div className="search-box">
        <h5>Search News Here</h5>
        <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} name="searched_news" placeholder="Enter the topic here..."/>
      
    </div>
    <div className="pg">
        <button  onClick={props.decrement}>Prev</button>
        <p>{(first/number)+1} out of {Math.ceil(numOfNews/number)}</p>
        <button onClick={props.increment}>   Next</button>

    </div>


    </>
  );
}
