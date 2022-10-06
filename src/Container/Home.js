import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Genres from "../components/Genres";
import { Link } from "react-router-dom";
// imdb API

// api key
const your_api_key = "k_go9p5uwo";
// API
const MovieApi = ` https://imdb-api.com/API/AdvancedSearch/${your_api_key}?groups=top_250&count=250 `;

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [searchApi, setSearchApi] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState("all");

  // Get API
  useEffect(() => {
    fetch(MovieApi)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
        setSearchApi(data.results);
        setFiltered(data.results);
      });
  }, []);

  //Search function
  const handleSearch = (e) => {
    if (e.target.value === "") {
      setFiltered(searchApi);
    } else {
      const searchResult = searchApi.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFiltered(searchResult);
    }
    setSearchVal(e.target.value);
  };

  return (
    <>
      <header>
        <p>{movies.title}</p>
        <input
          type="search"
          className="search"
          placeholder="Search..."
          value={searchVal}
          onInput={(e) => handleSearch(e)}
        />
      </header>
      {/* Genre Filter component */}
      <div className="genres">
        <Genres
          movies={movies}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
      </div>
      {/* movie List component */}
      <div className="movie-container">
        {filtered.map((movie) => (
          <Link
            key={movie.id}
            style={{ textDecoration: "none", color: "white" }}
            to={`/detail/${movie.id}`}
          >
            <Movie key={movie.id} {...movie} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
