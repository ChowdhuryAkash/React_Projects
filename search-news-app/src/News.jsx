import React from 'react';
import './App.css';

export default function News(props) {
    let news=props.news;
  return (
<>
<div className="news">
{news.map((story)=>{
    return(
        <>
      

<div className="card">
    <h5>{story.title}</h5>
    <p>{`${story.points} points by ${story.author} | ${story.num_comments} comments`}</p>
    <div className="btns">
        <a href={`${story.url}`} className="more">Read More</a>
        <span onClick={()=>{props.delete(story.title)}} className="delete">Delete</span>
    </div>

</div>



        </>
    )
})}
</div>
</>

  );
}