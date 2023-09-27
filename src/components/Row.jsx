import React, { useEffect, useState } from 'react'
import tmdbAxiosInstance from '../tmdbAxiosInstance';
import './Row1.css';

function Row({title,fetchUrl,isPoster}) {
    //console.log(fetchUrl);
    const base_url = "https://image.tmdb.org/t/p/original/";

     const [allMovies,setallMovies] = useState([])
    const fetchData = async () =>{
      const {data} = await tmdbAxiosInstance.get(fetchUrl) 
      setallMovies(data.results)
    }
    useEffect(()=>{fetchData()},[]);
    //console.log(allMovies);
  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='all_movies'>
          {
            allMovies.map(item =>(
            <img  className={`${isPoster&&'movie_large'} movie`} src={`${base_url}/${isPoster?item.poster_path:item.backdrop_path}`} alt="no image" />)
            )
          }
        </div>
    </div>
  )
}

export default Row