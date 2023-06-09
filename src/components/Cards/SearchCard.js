import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartBroken, faFaceSadCry, faTruckRampBox } from '@fortawesome/free-solid-svg-icons';

async function fetchSearchResults(searchKey) {
    try {
        const response = await axios.get('https://moviesdatabase.p.rapidapi.com/titles/search/title/' + searchKey, {
            params: {
                exact: 'false',
                sort: 'year.decr',
                limit: '50'
            },
            headers: {
                'content-type': 'application/octet-stream',
                'X-RapidAPI-Key': '531544e39amsh6145987e479baf9p104408jsnc6a3e9e4ba60',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching search results:', error);
        return [];
    }
}

function SearchCard() {
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);
    const getParams = new URLSearchParams(document.location.search)
    let searchParam = getParams.get('key');
    if (typeof searchParam != "string") {
        searchParam = '';
    }

    useEffect(() => {
        const fetchData = async () => {
            const searchResults = await fetchSearchResults(searchParam);
            setResults(searchResults);
            setLoading(false);
        };

        fetchData();
    }, [searchParam]);

    const listResult = () => {
        if (results.length > 0) {
            return (
                <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
                    {results.map(element => {
                        if (typeof element.primaryImage?.url === 'string') {
                            const genresArr = element?.genres?.genres || [];
                            const genres = genresArr.slice(0, 2).map(item => {
                                return <p className='inline-block  bg-violet-500 bg-opacity-20 rounded-full pl-3 pr-3 mx-2 mb-4 text-slate-300 font-thin text-center'>#{item.text}</p>
                            });
                            return (
                                <div key={element?.id} className="relative w-64 h-fit min-h-80 rounded-lg overflow-hidden shadow-2xl m-5 hover:cursor-pointer mx-auto">
                                    <FontAwesomeIcon icon={faHeartBroken} className="absolute top-3 right-3 text-lg hover:text-xl drop-shadow-xl text-white bg-slate-700 p-2 rounded-full"></FontAwesomeIcon>
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
        } else {
            return (
                <div className="grid grid-cols-1 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 min-h-screen">
                    <FontAwesomeIcon icon={faFaceSadCry} bounce style={{ color: '#ffffff' }} className="m-auto w-72 h-72 opacity-75" />
                    <p className="text-center text-3xl text-slate-200 italic">Sorry, we couldn't find anything.</p>
                </div>
            );
        }
    };

    if (loading) {
        return (
            <div className="grid grid-cols-1 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 min-h-screen">
                <FontAwesomeIcon icon={faTruckRampBox} style={{ color: '#ffffff' }} className="m-auto w-72 h-72 opacity-75" />
                <p className="text-center text-3xl text-slate-200 italic">Loading...</p>
            </div>
        )
    } else {
        return (
            <>
                {listResult()}
            </>
        );
    }
}

export default SearchCard;
