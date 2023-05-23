import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading';
import Card from './Card';

async function fetchMovies() {
    try {
        const response = await axios.get('https://moviesdatabase.p.rapidapi.com/titles', {
            params: {
                list: 'most_pop_movies',
                limit: '50',
                startYear: '2005',
                info: 'base_info'
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
            <Loading />
        )
    } else {
        return (
            <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
                {movies.map(element => {
                    const id = element?.id;
                    const imgUrl = element?.primaryImage?.url;
                    const genresArr = element?.genres?.genres || [];
                    const title = element?.titleText?.text;
                    return (
                        <Card cardid={id} imgUrl={imgUrl} genresArray={genresArr} title={title} />
                    );
                })}
            </div>
        );
    }


}

export default MovieCard;
