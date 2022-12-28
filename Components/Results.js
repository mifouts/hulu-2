import React from "react";
import Thumbnail from "./Thumbnail";

function Results({ data }) {
  return (
    <div>
      {data.map((result) => (
        <Thumbnail key={result.id} data={data} />
      ))}
    </div>
  );
}

export default Results;
