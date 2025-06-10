import { useSelector } from 'react-redux';
import VideoBackGround from './VideoBackground';
import VideoTitle from './VideoTitle';
const MainContainer = () => {

    const movies = useSelector((store) => store.movies.nowPlayingMovies);
    const mainMovie = movies && movies.length > 0
        ? movies[Math.floor(Math.random() * movies.length)]
        : null;
    
     const {original_title, overview, release_date,id} = mainMovie || {};

    return (
    <div>
        <VideoTitle title = {original_title} overview={overview} release_date = {release_date}/>
        <VideoBackGround  movieId = {id}/>
    </div>
  )
}

export default MainContainer