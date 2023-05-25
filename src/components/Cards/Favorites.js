import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import Loading from '../Loading/Loading';


function Favorites() {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

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
                    params: {
                        info: 'base_info'
                    },
                    headers: {
                        'X-RapidAPI-Key': '531544e39amsh6145987e479baf9p104408jsnc6a3e9e4ba60',
                        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                    }
                });
                const elementData = response.data.results;
                setElementData((prevData) => [...prevData, elementData]);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching element data:', error);
            }
        };

        favorites.forEach((favorite) => {
            fetchElementData(favorite);
        });
    }, [favorites]);



    if (loading) {
        return (
            <Loading />
        )
    } else {
        return (
            <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 min-h-screen">
                {elementData.map(element => {
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

export default Favorites;
