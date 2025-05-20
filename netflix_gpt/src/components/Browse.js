import React, { useEffect } from 'react'
import Header from './Header'
import { API_KEY,API_OPTIONS } from '../utils/constants'

export const Browse = () => {
  const getNowPlayingMovies = async () => {
    try {
      console.log("Fetching now playing movies");

      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json = await data.json();
      console.log(json);
    } catch (error) { 
      console.error("Error fetching now playing movies:", error);
    }
  }


    useEffect(() => {
      getNowPlayingMovies();
    }, []);


  return (
    <div>
    <Header/>
    </div>
  )
}

export default Browse

