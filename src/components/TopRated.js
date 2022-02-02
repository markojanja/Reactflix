import { useEffect, useState } from "react";
import Loader from "./Loader";
import MovieCard from "./MovieCard";


const TopRated = () => {
  const api = "https://api.themoviedb.org/3/movie/now_playing?api_key=1547e5fdbce5573a8db709348dd4b317&language=en-US&page=1";
  const [latestMovie, setLatestMovie] = useState([]);
  const [loader, setLoader] = useState(true);
 

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
       
        setLatestMovie(data.results);
        setLoader(false)
        
      });
  }, []);

  const mc = latestMovie.map((movie, index) => {
    
    return (
        
        <MovieCard key={index} movie={movie} />
      
    );
  });

  return (
    <>
      {
        loader ? <Loader/>:
        <div className="container">
        <div className="row">{mc}</div>
        </div> 
      }


    </>
  );
};

export default TopRated;

//https://api.themoviedb.org/3/movie/now_playing?api_key=1547e5fdbce5573a8db709348dd4b317&language=en-US&page=1
//https://api.themoviedb.org/3/movie/top_rated?api_key=1547e5fdbce5573a8db709348dd4b317&language=en-US&page=1