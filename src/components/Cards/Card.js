import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Card() {
    const [loading, setLoading] = useState(true);
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
            setMovies(res.data.results);
            setLoading(false);
        })
    }, [])

    if (loading) {
        return (
            <div><p>Loading...</p></div>
        )
    } else {
        console.log(movies)
        return (
            <div>
                {movies[0].id}
            </div>
        )
    }


}

export default Card;
