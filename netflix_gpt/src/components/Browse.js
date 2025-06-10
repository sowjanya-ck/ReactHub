import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer'
import SubContainer from './SubContainer';
export const Browse = () => {
// have created a custom hook to fetch now playing movies
  useNowPlayingMovies();


  return (
    <div>
    <Header/>
    <MainContainer />
    <SubContainer />
    </div>
  )
}

export default Browse

