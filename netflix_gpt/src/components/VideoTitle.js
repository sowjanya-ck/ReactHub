import React from 'react'

const VideoTitle = ({title,overview,release_date}) => {
  // title = "sowjanya"
  // overview = "hey asda hadsadas hadsad ahdada fafasf ahafsa afafafaa"
  return (
    <div className='pt-36 w-screen aspect-video px-12 absolute text-white bg-gradient-to-r from-black/90 '>
      <h1 className='text-3xl font-bold mb-2'>{title}</h1>
      <p className='text-lg w-1/4'>{overview}</p>

      <div className='flex items-center gap-2'>
        <button className='bg-white text-black px-4 py-2 border border-black rounded-lg hover:bg-gray-200 transition duration-300 flex items-center gap-2'>
          Play
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <polygon points="6,4 16,10 6,16" />
          </svg>
        </button>
        <button className='bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300'>
         More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle