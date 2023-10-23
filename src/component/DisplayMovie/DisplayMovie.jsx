import React, { useContext } from "react";
import { MovieContext } from "../../context/Moviecontext";
import "./DisplayMovie.css";
function DisplayMovie() {
  const { searchInput, setSearchInput, moviesList } = useContext(MovieContext);
  return (
    <div className="search-list-container">
      {moviesList.map((data) => (
        <div className="search-items item-enlarge" key={data.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt="movie image"
            onError={(e) => {
              e.target.src = "image.jpg";
            }}
          />
          <p className="title item-enlarge" style={{ color: "black", textAlign:'center'}}>
            {data.title ? data.title : "This is your filim"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DisplayMovie;
