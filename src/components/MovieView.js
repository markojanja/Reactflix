import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "./Hero";

const MovieView = () => {
  const { id } = useParams();
  console.log(id);
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=1547e5fdbce5573a8db709348dd4b317&language=en-US`;
    
    fetch(movieUrl)
      .then((res) => res.json())
      .then((data) => {
        setMovieDetails(data);
        console.log(data);
      });
  }, [id]);
  const posterPath = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;
  const backdropUrl =`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`  
  return (
    <>
      <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-3">
            <img src={posterPath} alt="" srcset="" />
          </div>
          <div className="col-md-9">
            <strong>Title</strong>
            <h2>{movieDetails.title}</h2>
            <h3>{movieDetails.tagline}</h3>
            <strong>Overview</strong>
            <p>{movieDetails.overview}</p>
            <strong>Release date</strong>
            <p>{movieDetails.release_date}</p>
            <strong>Status</strong>
            <p>{movieDetails.status}</p>
            <strong>Revenue</strong>
            <p>${movieDetails.revenue}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieView;
