import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {

const isMenuopen = useSelector(store => store.app.isMenuopen)


  return !isMenuopen ?null:(
    <div className=' px-7 py-7  shadow-lg w-48 h-full mr-2 fixed mt-1 '>
      <ul className='mr-3'>
        <li className='flex mb-6 '>
          <img  className="h-5 mr-5" alt='h' src={require("../images/home.png")}></img>
          Home</li>

          <li className='flex mb-6'>
          <img  className="h-5 mr-5" alt='h' src={require("../images/shorts.png")}></img>
          Shorts</li>

          <li className='flex mb-6'>
          <img  className="h-5 mr-5" alt='h' src={require("../images/subscriptions.png")}></img>
          Subscrptions</li>

        <hr className='mt-5 mb-5 w-50 border border-b-gray-300'/>

      </ul>
      <ul className='mr-3'>
      <li className='flex mb-6'>

          <img  className="h-5 mr-5" alt='h' src={require("../images/library.png")}></img>
          Library</li>

          <li className='flex mb-6'>
          <img  className="h-5 mr-5" alt='h' src={require("../images/history.png")}></img>
          History</li>

        <li className='flex mb-6'>
          <img  className="h-5 mr-5" alt='h' src={require("../images/watch-later-2.png")}></img>
          Watch later</li>
          </ul>
          
        <hr className='mt-5 mb-3 w-50 border border-gray-300'/>

          <h1 className='font-bold mb-3'>Explore</h1>
          <ul>

      <li className='flex mb-6'>
          
          <img  className="h-5 mr-5" alt='h' src={require("../images/trending.jpg")}></img>
          Trending</li>
         <li className='flex mb-6'>
          <img  className="h-5 mr-5" alt='h' src={require("../images/gaming.png")}></img>
          Gaming</li>

          <li className='flex mb-6'>
          <img  className="h-5 mr-5" alt='h' src={require("../images/live.png")}></img>
          Live</li>

          <li className='flex mb-6'>
          <img  className="h-5 mr-5" alt='h' src={require("../images/newspaper.png")}></img>
          News</li>
          </ul>
    </div>
  )
}

export default Sidebar