import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';

function MovieCard() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://moviesdatabase.p.rapidapi.com/titles',
            params: {
                list: 'most_pop_movies',
                limit: '50',
                startYear: '2005'
            },
            headers: {
                'content-type': 'application/octet-stream',
                'X-RapidAPI-Key': '531544e39amsh6145987e479baf9p104408jsnc6a3e9e4ba60',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        }).then(res => {
            setMovies(res.data.results);
            setLoading(false);
        })
    }, [])

    const handleMovies = useMemo(() => {
        return movies.map(element => {
            if (typeof element.primaryImage?.url === "string") {
                return (
                    <div key={element.id} className="relative w-64 h-fit min-h-80 rounded-lg overflow-hidden shadow-2xl m-5 mx-auto" >
                        <FontAwesomeIcon icon={faHeartBroken} className="absolute top-3 right-3 text-lg hover:text-xl drop-shadow-xl text-white bg-slate-700 p-2 rounded-full "></FontAwesomeIcon>
                        <a href={`/${element.id}?details=${element.id}`} target='_'>
                            <img className="w-full max-h-80" src={element.primaryImage.url} alt="" />
                        </a>
                        <p className="font-bold font-sans text-xl md:text-md sm:text-sm mb-5 text-center text-slate-100 -bottom-10 w-full">{element.titleText.text}</p>
                    </div>
                )
            } else {
                return null;
            }
        });
    }, [movies]);

    if (loading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    } else {
        return (
            <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
                {handleMovies}
            </div>
        )
    }
}

export default MovieCard;
