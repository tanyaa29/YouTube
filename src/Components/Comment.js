import React from 'react'

const Comment = ({data}) => {
  const {name, text, replies} = data;
  return (
    <div className='flex shadow-sm bg-gray-200 p-2 rounded-lg'>
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.pngfind.com/pngs/m/176-1760995_png-file-svg-user-icon-free-copyright-transparent.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Comment