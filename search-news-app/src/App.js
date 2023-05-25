import React ,{useState,useEffect} from 'react'
import SearchForm from './SearchForm'
import News from './News'
import Loading from "./Loading"
function App() {
  const url="https://hn.algolia.com/api/v1/search?"

  let[loading,setLoading]=useState(true);
  let[query,setQuery]=useState("");
  let [news,setNews]=useState([]);



  let[first,setFirst]=useState(0);
  let totalNumberOfNews=news.length;
  let onePageNewsNumber=4;
 
let fetchData = async()=>{
  setLoading(true)
  let response= await fetch(`${url}query=${query}`);
  let data=await response.json();
  setNews(data.hits)
  setLoading(false);
}
const updateQuery=(queryData)=>{
  setQuery(queryData);
}
const increment=()=>{
console.log("incremented");
if(news.length>first+onePageNewsNumber)
setFirst(first+onePageNewsNumber);
else
setFirst(0);

}
const decrement=()=>{
  console.log("decremented");
  if(first>=onePageNewsNumber){
    setFirst(first-onePageNewsNumber)
  }
  else{
    setFirst(0)

  }
  
}
let deletee=(title)=>{
  const newNews = news.filter((story) => story.title !== title)
  setNews(newNews);
}
useEffect(()=>{
  fetchData();
 
},[query])

if(loading){
  return(
    <>
     <SearchForm updateQuery={updateQuery} first={first}  news={news}/>
     <Loading />
    
    </>
    
  )
}

  return (
    <>
    
    <SearchForm onePageNewsNumber={onePageNewsNumber} increment={increment} decrement={decrement} updateQuery={updateQuery} first={first}  news={news}/>
    <News delete={deletee} news={news.slice(first,first+onePageNewsNumber)}/>
    <a href="http://www.akashchowdhury.epizy.com" style={{display:"block",textDecoration:"none",color:"green",textAlign:"center"}}>Developed by Akash Chowdhury</a>
    
    </>
  );
}

export default App;
