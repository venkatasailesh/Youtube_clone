import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {closeMenu} from "../utils/appSlice";
import { useSearchParams } from 'react-router-dom';

const Watchpage = () => {
    const [searchparams ]= useSearchParams();

    const disapatch = useDispatch();
    useEffect(()=>{
        disapatch(closeMenu())
    },[]);
  return (
    <div className='py-2 px-5 '>
        <iframe 
        width="900" 
        height="500" 
        src={"https://www.youtube.com/embed/"+searchparams.get("v")}
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
        >

        </iframe>
    </div>
  )
}

export default Watchpage;