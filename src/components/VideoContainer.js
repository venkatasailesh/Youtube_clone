import React,{useEffect, useState} from 'react'
import { YOUTUBE_API } from '../utils/Constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  
  const [videos, setvideos] = useState([]);
  
  useEffect(()=>{
    getVideos();
  },[]);

const getVideos = async ()=>{
  const data = await fetch(YOUTUBE_API);
  const json = await data.json();
  setvideos(json.items);
  };

  return (
    <div className='flex flex-wrap ml-56'>
      {videos.map((video)=>(
      <Link to={"/watch?v="+video?.id}><VideoCard key={video?.id}  info = {video} /> </Link>
      ))}
     
    </div>
  );
};

export default VideoContainer;
 