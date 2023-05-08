import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Favorited from '../Favourite/Favorited';

async function fetchMovies() {
    try {
        const response = await axios.get('https://moviesdatabase.p.rapidapi.com/titles', {
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
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
}

function MovieCard() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const fetchMoviesData = useCallback(async () => {
        const moviesData = await fetchMovies();
        setMovies(moviesData);
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchMoviesData();
    }, [fetchMoviesData]);

    if (loading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
            {movies.map(element => {
                if (typeof element.primaryImage?.url === 'string') {
                    return (
                        <div key={element.id} id={element.id} className="relative w-64 h-fit min-h-80 rounded-lg overflow-hidden shadow-2xl m-5 mx-auto">
                            <Favorited elementID={element.id} />
                            <a href={`/${element.id}?details=${element.id}`} target="_blank" rel="noreferrer">
                                <img className="w-full max-h-80" src={element.primaryImage.url} alt="" />
                                <p className="font-bold font-sans text-xl md:text-md sm:text-sm mb-5 text-center text-slate-100 -bottom-10 w-full">{element.titleText.text}</p>
                            </a>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}

export default MovieCard;
