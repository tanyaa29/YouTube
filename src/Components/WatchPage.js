import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { CloseMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContaine from './CommentsContaine';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("V"));
  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(CloseMenu());
  },[])
  return (
    <div className="felx flex-col w-full">
      <div className="px-5 flex">
        <div className="flex">
          <iframe
            width="1260"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className='w-full'>
          <LiveChat />
        </div>
      </div>

      <CommentsContaine />
    </div>
  );
}

export default WatchPage