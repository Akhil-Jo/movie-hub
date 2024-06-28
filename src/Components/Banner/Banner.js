import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../../axios'
import { API_KEY, imageURL } from '../../Constants/Constants'

function Banner() {

    const [movie, setMovie] = useState();

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
                console.log(response.data);
                const movie_num = Math.floor(Math.random() * response.data.results.length);
                setMovie(response.data.results[movie_num]);
            })
    }, [])

    return (
        <div className="banner" style={{ backgroundImage: `url(${movie ? imageURL + movie.backdrop_path : ""})` }}>
            <div className="content">
                <h1 className="banner__title">{movie?.name}</h1>
                <div className="banner__buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="banner__description">
                    {movie?.overview}
                </h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
