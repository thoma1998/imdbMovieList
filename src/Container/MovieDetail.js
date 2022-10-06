import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movieDetail.css";
import StarIcon from "@mui/icons-material/Star";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState([]);
  const { id } = useParams(); // id of link

  const your_api_keyy = "k_go9p5uwo"; //api key
  const MovieDetailApi = ` https://imdb-api.com/en/API/Title/${your_api_keyy}/${id}/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia, `; //api

  // Get api
  useEffect(() => {
    fetch(MovieDetailApi)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovieDetail(data);
      });
  }, []);

  return (
    <div className="movie1">
      {/* Cover Image  */}
      <div className="movie__intro">
        <img
          className="movie__backdrop"
          src={movieDetail.image}
          alt={movieDetail.title}
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          {/* profile image */}
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={movieDetail.image}
              alt={movieDetail.title}
            />
          </div>
        </div>
        <div className="movie__detailRight">
          {/* Details */}
          <div className="movie__detailRightTop">
            {/* title */}
            <div className="movie__name">{movieDetail.title}</div>
            {/* tagline */}
            <div className="movie__tagline">{movieDetail.tagline}</div>
            {/* imdb rating */}
            <div className="movie__rating">
              IMDb Rating: {movieDetail.imDbRating}
              <StarIcon />
              {/* how many votes */}
              <span className="movie__voteCount">
                Votes: {movieDetail.imDbRatingVotes}
              </span>
            </div>
            {/* movie length */}
            <div className="movie__runtime">
              Runtime: {movieDetail.runtimeStr}
            </div>
            {/* Relase date */}
            <div className="movie__releaseDate">
              Relase Date: {movieDetail.releaseDate}
            </div>
            {/* Movie Category */}
            <div className="movie__genres">Genres: ({movieDetail.genres})</div>
          </div>
          <div className="movie__detailRightBottom">
            {/* movie Description */}
            <div className="synopsisText">Description</div>
            <div>{movieDetail.plot}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
