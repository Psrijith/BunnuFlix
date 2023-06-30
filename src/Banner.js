import React from "react";
import { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Request";

function Banner() {

    const [movie, setMovie] = useState([]);

    function truncate(string,n){
        return string?.length > n?string.substr(0,n-1)+'...':string;
    }
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            );
            return requests;
        }
        fetchData();
    },[]);

console.log(movie);

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
