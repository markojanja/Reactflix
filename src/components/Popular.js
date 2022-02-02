import { useEffect, useState } from "react";
import Loader from "./Loader";
import Hero from "./Hero";
import MovieCard from "./MovieCard";



const Popular = () => {
  const api =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=1547e5fdbce5573a8db709348dd4b317&language=en-US&page=1";
  const [popMovie, setPopMovie] = useState([]);
  const [loader, setLoader] = useState(true);
 

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
       
        setPopMovie(data.results);
        setLoader(false)
        
      });
  }, []);
  const mc = popMovie.map((movie, index) => {
    
    return (
        
        <MovieCard key={index} movie={movie} />
      
    );
  });

  return (
    <>
      {
        loader ? <Loader/>:
        <div>
        <Hero text={"Popular"}/>
        <div className="container">
        <div className="row">{mc}</div>
        </div>
       </div> 
      }
    </>
  );
};

export default Popular;


//https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US