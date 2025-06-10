import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer = (movieId) => {
      const dispatch = useDispatch();

     const getMovieClips = async () => {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
          const data = await response.json();
          const trailer_video = data.results.find(video => video.type === 'Trailer');
          const trailer = trailer_video ? trailer_video : data.results[0];
          dispatch(addTrailerVideo(trailer));
      }
    
      useEffect(() => {
        if (movieId) {
          getMovieClips();
        }
      }, [movieId]);
  
}

export default useMovieTrailer