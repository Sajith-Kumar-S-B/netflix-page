import React, { useState , useEffect } from 'react'
import './Banner.css';
import tmdbAxiosInstance from '../tmdbAxiosInstance';
function Banner({fetchURL}) {
    const base_url = "https://image.tmdb.org/t/p/original/";

     const [Movie,setMovie] = useState({})
    const fetchData = async () =>{
      const {data} = await tmdbAxiosInstance.get(fetchURL)
      setMovie(data.results[Math.floor(Math.random()*data.results.length)]);
    }
    console.log(Movie);
    useEffect(()=>{fetchData()},[])
  return (
    <div className='banner' style={{
        height:'600px',
        backgroundImage:`url(${base_url}/${Movie?.backdrop_path})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundAttachment:'fixed'
    }}>
    <div className="banner_content">
        <h1>{Movie?.name}</h1>
        <h2>{Movie?.overview?.slice(0,280)}...</h2>
    </div>

    </div>
  )
}

export default Banner