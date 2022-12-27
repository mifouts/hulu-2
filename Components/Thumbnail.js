import React from "react";
import Image from "next/image";

function Thumbnail({ movies }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div>
      <Image
        layout="responsive"
        height={1080}
        width={1920}
        alt=""
        src={
          `${BASE_URL}${movies.backdrop_path || movies.poster_path}` ||
          `${BASE_URL}${movies.poster_path}`
        }
      />
    </div>
  );
}

export default Thumbnail;
