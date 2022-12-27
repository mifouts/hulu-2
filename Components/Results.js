import React from "react";
import Thumbnail from "./Thumbnail";

function Results({ movies }) {
  return (
    <div>
      {movies?.map((movies) => (
        <Thumbnail key={movies.id} movies={movies} />
      ))}
    </div>
  );
}

export default Results;
