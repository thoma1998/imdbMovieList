import React from "react";

const Movie = ({ title, image, description }) => (
  <div className="movie">
    <img src={image} alt={title} />
    {/* image from api  */}
    <div className="movie-info">
      <h3>{title}</h3>
      {/* title from API */}
      <span>{description}</span>
      {/* is year of the movie */}
    </div>
  </div>
);
export default Movie;
