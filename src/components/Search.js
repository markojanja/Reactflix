import { Link } from "react-router-dom";
import Hero from "./Hero";

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const detailsUrl = `/movies/${movie.id}`;
  const noImg = "../no-image.png";
  const posterUrlNull = `https://image.tmdb.org/t/p/w500/null`;

  return (
    <div className="col-md-4 col-12 my-4 p-2">
      <div className="card">
        <img
          src={posterUrl !== posterUrlNull ? posterUrl : noImg}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailsUrl} className="btn btn-primary">
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};

const Search = ({ keyword, searchResults }) => {
  const title = `You are searching for: ${keyword}`;
  const resHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });

  if (searchResults.length > 0 && keyword !== "") {
    return (
      <>
                
        <Hero text={title} />
        {resHtml && (
          <div className="container">
            <div className="row">{resHtml}</div>
          </div>
        )}
      </>
    );
  } else if (keyword === "") {

    return <div className="d-flex container justify-content-center align-items-center min-vh-100">
              <h1>Enter movie</h1>
          </div>;
  } else {
    return <div className="d-flex container justify-content-center align-items-center min-vh-100">
              <h1>Not found!!</h1>
           </div>;
  }
};

export default Search;

//example link
// https://api.themoviedb.org/3/search/movie?api_key=1547e5fdbce5573a8db709348dd4b317&language=en-US&page=1&include_adult=false
//API KEY
//1547e5fdbce5573a8db709348dd4b317
