import React from 'react'

const VideoCard = ({info}) => {
    const snippet= info?.snippet;
    const statistics= info?.statistics;
    const channelTitle =snippet?.channelTitle;
    const title = snippet?.title;
    const thumbnailUrl = snippet?.thumbnails?.high?.url;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnailUrl} />
      <ul>
        <li className='font-bold py-2 truncate'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
}
// This is a higher order Component
// const RedBorderVideoCard = ({info}) => {
//   return ( 
//   <div className="p-1 m-1 border border-red-800">
//   <VideoCard info={info}/>  
//   </div>
//   );
// }

export default VideoCard