import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons'

function SearchCard(props) {
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);

    console.log(props.searchKey);


    useEffect(() => {
        axios({
            method: 'GET',
            url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${props.searchKey}`,
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
        }).then(res => {
            setResults(res.data.results);
            setLoading(false);

        })
    }, [])

    console.log(results);


    if (loading) {
        return (
            <div><p>Loading...</p></div>
        )
    } else {
        return (
            <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4  bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
                {
                    results.map(element => {
                        if (typeof element.primaryImage?.url == "string") {
                            return (
                                <div key={element?.id} className="relative w-64 h-fit min-h-80 rounded-lg overflow-hidden shadow-2xl m-5 hover:cursor-pointer mx-auto" >
                                    <FontAwesomeIcon icon={faHeartBroken} className="absolute top-3 right-3 text-lg hover:text-xl drop-shadow-xl text-white  bg-slate-700  p-2 rounded-full "></FontAwesomeIcon>
                                    <img className="w-full h-80 object-cover" src={element.primaryImage?.url} alt="" />
                                    <p className="font-bold font-sans text-xl md:text-md sm:text-sm  mb-5 text-center text-slate-100 -bottom-10 w-full">{element.titleText?.text}</p>
                                </div>
                            )
                        } else {

                        }
                    })
                }
            </div>
        )
    }
}

export default SearchCard