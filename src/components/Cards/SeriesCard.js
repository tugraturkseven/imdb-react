import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading';
import Card from './Card';

async function fetchSeries(page) {
    try {
        const response = await axios.get('https://moviesdatabase.p.rapidapi.com/titles', {
            params: {
                list: 'most_pop_series',
                limit: '50',
                startYear: '2005',
                page: page // Add page parameter
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
    const [page, setPage] = useState(1);

    const fetchSeriesData = useCallback(async () => {
        const seriesData = await fetchSeries(page);
        setSeries(prevSeries => [...prevSeries, ...seriesData]);
        setLoading(false);
    }, [page]);

    useEffect(() => {
        fetchSeriesData();
    }, [fetchSeriesData]);

    const handleScroll = useCallback(() => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollBottom = scrollTop + windowHeight;

        if (scrollBottom >= documentHeight) {
            setPage(prevPage => prevPage + 1);
        }
    }, []);

    useEffect(() => {
        fetchSeriesData();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [fetchSeriesData, handleScroll]);

    if (loading && series.length === 0) {
        return <Loading />;
    } else {
        return (
            <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
                {series.map(element => {
                    const id = element?.id;
                    const imgUrl = element?.primaryImage?.url;
                    const genresArr = element?.genres?.genres || [];
                    const title = element?.titleText?.text;
                    return <Card key={id} cardid={id} imgUrl={imgUrl} genresArray={genresArr} title={title} />;
                })}
            </div>
        );
    }
}

export default SeriesCard;
