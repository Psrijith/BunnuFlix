import React from "react";
import { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Request";

function Banner() {
  // State to store the movie data
  const [movie, setMovie] = useState([]);

  // Function to truncate long strings
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  // useEffect hook to fetch data from the API when the component mounts
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      // Select a random movie from the fetched data and set it to state
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return requests;
    }
    fetchData();
  }, []);

  console.log(movie); // This logs the 'movie' state to the console

  // JSX to render the header banner
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: movie?.backdrop_path
          ? `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`
          : "url('fallback_image_url')",
        backgroundPosition: "center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie.name || movie.original_name}
        </h1>
        <h2> {movie?.original_language}</h2>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;

