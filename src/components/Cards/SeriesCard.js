import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Favorited from '../Favourite/Favorited';

async function fetchSeries() {
    try {
        const response = await axios.get('https://moviesdatabase.p.rapidapi.com/titles', {
            params: {
                list: 'most_pop_series',
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
        console.error('Error fetching series:', error);
        return [];
    }
}

function SeriesCard() {
    const [loading, setLoading] = useState(true);
    const [series, setSeries] = useState([]);

    const fetchSeriesData = useCallback(async () => {
        const seriesData = await fetchSeries();
        setSeries(seriesData);
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchSeriesData();
    }, [fetchSeriesData]);

    if (loading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
            {series.map(element => {
                if (typeof element.primaryImage?.url === 'string') {
                    const genresArr = element?.genres?.genres || [];
                    const genres = genresArr.slice(0, 2).map(item => {
                        return <p className='inline-block  bg-violet-500 bg-opacity-20 rounded-full pl-3 pr-3 mx-2 mb-4 text-slate-300 font-thin text-center'>#{item.text}</p>
                    });
                    return (
                        <div key={element?.id} className="relative w-64 h-fit min-h-80 rounded-lg overflow-hidden shadow-2xl m-5 hover:cursor-pointer mx-auto">
                            <Favorited elementID={element?.id} />
                            <a href={`/${element.id}?details=${element.id}`} target="_blank" rel="noreferrer">
                                <img className="w-full h-80 object-cover" src={element.primaryImage?.url} alt="" />
                                <p className="font-bold font-sans text-xl md:text-md sm:text-sm mb-5 text-center text-slate-100 -bottom-10 w-full">{element.titleText?.text}</p>
                            </a>
                            {genres}
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}

export default SeriesCard;
