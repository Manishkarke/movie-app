import React from "react";

export default function Movie({ data }) {
  const movies = {
    year: data.Year,
    poster: data.Poster,
    title: data.Title,
    type: data.Type,
  };
  return (
    <div className='movie'>
      <div>
        <p>{movies.year}</p>
      </div>

      <div>
        <img
          src={
            movies.poster !== "N/A"
              ? movies.poster
              : "https://via.placeholder.com/400"
          }
          alt={movies.title}
        />
      </div>

      <div>
        <span>{movies.type}</span>
        <h3>{movies.title}</h3>
      </div>
    </div>
  );
}
