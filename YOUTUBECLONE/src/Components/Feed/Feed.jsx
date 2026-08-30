import React, { useState, useEffect } from 'react'
import moment from "moment";
import "./Feed.css"
import thumbnail1 from "../../assets/thumbnail1.png"
import thumbnail2 from "../../assets/thumbnail2.png"
import thumbnail3 from "../../assets/thumbnail3.png"
import thumbnail4 from "../../assets/thumbnail4.png"
import thumbnail5 from "../../assets/thumbnail5.png"
import thumbnail6 from "../../assets/thumbnail6.png"
import thumbnail7 from "../../assets/thumbnail7.png"
import thumbnail8 from "../../assets/thumbnail8.png"
import Video from '../../pages/Video/Video'
import { Link } from 'react-router-dom'
import { API_KEY, value_converter } from '../../data'
const Feed = ({category}) => {
  
  const [data,setData]=useState([]);
  const fetchData = async () => {
 const videoList_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=US&videoCategoryId=${category}&maxResults=50&key=${API_KEY}`;

  const response = await fetch(videoList_url);
  const data = await response.json();

  console.log(data);
  console.log("Number of videos:", data.items.length);

  setData(data.items);
};
  useEffect(()=>{
    fetchData();
  },[category])

  return (
    <div className=" feed">
     {data.map((item) => {
  return (
    <Link
      to={`/video/${item.id}`}
      className="card"
      key={item.id}
    >
      <img
        src={item.snippet.thumbnails.medium.url}
        alt={item.snippet.title}
      />

      <h2>{item.snippet.title}</h2>

      <h3>{item.snippet.channelTitle}</h3>


      <p>{value_converter(item.statistics.viewCount)} views &bull; { moment(item.snippet.publishedAt).fromNow()} </p>
    </Link>
  );
})}
        
    
    </div>
   
  )
}

export default Feed
