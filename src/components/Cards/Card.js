import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Card() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://moviesdatabase.p.rapidapi.com/titles',
            params: { limit: '50' },
            headers: {
                'X-RapidAPI-Key': '531544e39amsh6145987e479baf9p104408jsnc6a3e9e4ba60',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        }).then(res => {
            movies = res.data.results;
            console.log(movies)
        })
    )
}


return (
    <div>
        {movies}
    </div>
)


export default Card;
