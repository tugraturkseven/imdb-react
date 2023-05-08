import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Favorited from '../Favourite/Favorited';

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    const [elementData, setElementData] = useState([]);

    useEffect(() => {
        const fetchElementData = async (id) => {
            try {
                const response = await axios({
                    method: 'GET',
                    url: `https://moviesdatabase.p.rapidapi.com/titles/${id}`,
                    headers: {
                        'X-RapidAPI-Key': '531544e39amsh6145987e479baf9p104408jsnc6a3e9e4ba60',
                        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                    }
                });
                const elementData = response.data.results;
                setElementData((prevData) => [...prevData, elementData]);
            } catch (error) {
                console.error('Error fetching element data:', error);
            }
        };

        favorites.forEach((favorite) => {
            fetchElementData(favorite);
        });
    }, [favorites]);

    return (
        <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 h-screen">
            {elementData.map((element) => (
                <div key={element?.id} id={element?.id} className="relative w-64 h-fit min-h-80 rounded-lg overflow-hidden shadow-2xl m-5 mx-auto">
                    <Favorited elementID={element.id} />
                    <a href={`/${element.id}?details=${element.id}`} target="_blank" rel="noreferrer">
                        <img className="w-full max-h-80" src={element?.primaryImage?.url} alt="" />
                        <p className="font-bold font-sans text-xl md:text-md sm:text-sm mb-5 text-center text-slate-100 -bottom-10 w-full">{element?.titleText?.text}</p>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Favorites;
