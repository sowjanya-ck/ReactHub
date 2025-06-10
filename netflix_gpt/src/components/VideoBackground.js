import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
  const traierVideo = useSelector((store) => store.movies.traierVideo);

  // fetch triler video and updating the store with the trailer video data
 useMovieTrailer(movieId);

  return (
    <div>
      <iframe
       className='w-screen aspect-video'
      src={"https://www.youtube.com/embed/" + traierVideo?.key} 
      title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

    </div>  
  )
}

export default VideoBackground