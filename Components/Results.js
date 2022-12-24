import React from "react";
import Thumbnail from "../Components/Thumbnail";

function Results({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <Thumbnail key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Results;
