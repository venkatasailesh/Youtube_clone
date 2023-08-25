import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
    const {snippet,statistics} = info ??{};
    const {channelTitle,title,thumbnails} = snippet ??{};
  return (
    <div className='px-4 py-1 m-1 w-72 bg-transparent'>
        <img className='rounded-lg w-96 ' alt="thumbnail" src={thumbnails?.medium?.url}></img>
        <ul>
            <li className='text-sm font-bold py-2'>{title}</li>
            <li className='text-xs'>{channelTitle}</li>
            <li className='text-xs'>{statistics?.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard;