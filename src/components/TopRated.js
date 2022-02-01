
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./Loader";
// import Loader from "./Loader";
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