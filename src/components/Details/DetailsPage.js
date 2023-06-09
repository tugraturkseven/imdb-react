import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckRampBox } from '@fortawesome/free-solid-svg-icons';



function DetailsPage() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios({
            method: 'GET',
            url: `https://moviesdatabase.p.rapidapi.com/titles/${id}`,
            params: { info: 'base_info' },
            headers: {
                'X-RapidAPI-Key': '531544e39amsh6145987e479baf9p104408jsnc6a3e9e4ba60',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        }).then(res => {
            setData(res.data.results);
            setLoading(false)
        })
    }, [id])

    const handleData = () => {
        const genresArr = data.genres?.genres;
        const rating = () => {
            const score = parseFloat(data.ratingsSummary?.aggregateRating);
            if (score > 7.0) {
                return (
                    <p className='inline-block px-3 mx-5 bg-emerald-600 rounded-full font-semibold '>{score}</p>
                )
            }
            if (score >= 5.0 && score <= 7.0) {
                return (
                    <p className='inline-block px-3 mx-5 bg-orange-600 rounded-full'>{score}</p>
                )
            }
            if (score < 5.0) {
                return (
                    <p className='inline-block px-3 mx-5 bg-red-600 rounded-full'>{score}</p>
                )
            }
        };
        const imgUrl = data.primaryImage?.url;
        const lang = data.plot.language?.id;
        const desc = data.plot.plotText?.plainText;
        const year = data.releaseYear?.year;
        const duration = data.runtime?.displayableProperty?.value?.plainText;
        const title = data.titleText?.text;
        const titleType = data.titleType?.text;
        const genres = genresArr.map(item => {
            return <p className='inline-block  bg-violet-700 rounded-full pl-3 pr-3 mr-2 my-3 text-center'>{item.text}</p>
        });

        return (
            <div className="grid grid-cols-2 h-screen bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
                <img src={imgUrl} alt={title} className="w-96 rounded m-auto drop-shadow-2xl" />
                <div className="my-auto pr-64 text-slate-200">
                    <h1 className="inline-block font-bold text-3xl underline mb-2 max-w-lg">{title}</h1>
                    {rating()}
                    <p className="float-right font-semibold bg-slate-700 opacity-75 rounded-full w-14 h-5 text-center text-sm m-auto">{year}</p>
                    <h2 className="font-medium opacity-70">{titleType} {lang} {duration}</h2>
                    {genres}
                    <p className="text-xl">{desc}</p>
                </div>
            </div>
        )


    }

    if (loading) {
        return (
            <div className="grid grid-cols-1 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 min-h-screen">
                <FontAwesomeIcon icon={faTruckRampBox} style={{ color: '#ffffff' }} className="m-auto w-72 h-72 opacity-75" />
                <p className="text-center text-3xl text-slate-200 italic">Loading...</p>
            </div>
        )
    } else {
        return (
            <>{handleData()}</>
        )
    }

}

export default DetailsPage