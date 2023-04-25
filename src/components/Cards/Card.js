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
        return (
            <div>
                {
                    movies.map(element => {
                        <div className="max-w-xs h-80 rounded-lg overflow-hidden bg-slate-800 shadow-2xl m-5">
                            <img className="w-full" src={element.primaryImage?.url} alt="" />
                            <p className="font-bold font-sans text-xl text-center text-slate-100 my-3">{element.titleText?.text}</p>
                            <p className="rounded-lg bg-slate-700 text-slate-300 text-center w-16 my-3 m-auto">#{element.releaseYear?.year}</p>
                        </div>
                    })
                }
            </div>


        )
    }


}

export default Card;
