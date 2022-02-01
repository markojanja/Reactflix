
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import Hero from "./Hero";

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`;
  return (
    <div className="col-lg-4 col-md-4 col-12 my-4">
      <div className="card">
        <img
          src={posterUrl}
          className="card-img-top"
          alt={movie.original_title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};

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