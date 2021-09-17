import React from 'react';
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
const Details = () => {
    const { id } = useParams();
    const { movies } = useSelector((state) => state.movies);
    const movie = movies.filter((item, key) => {        
        if (key == id)
            return item
    });
    console.log('movie', movie)
    return (
        <div className="details-container">
            <div className="m-image" style={{ background: `url(https://image.tmdb.org/t/p/w500${movie[0].poster_path})` }}>

            </div>
            <div className="details">
                <h2>
                   {movie[0].original_title}
                </h2>
                <h3>
                    Language : {movie[0].original_language}
                </h3>
                <div className="score"><span>{movie[0].vote_average}/10</span></div>
                <h3>
                    Overview
                </h3>
                <p>
                {movie[0].overview}
                </p>
            </div>
            
        </div>
    )
}

export default Details