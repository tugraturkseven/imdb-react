import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

function Favorited({ elementID }) {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorite(favorites.includes(elementID));
    }, [elementID]);

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const updatedFavorites = favorites.includes(elementID)
            ? favorites.filter(id => id !== elementID)
            : [...favorites, elementID];

        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setIsFavorite(!isFavorite);
    };

    return (
        <div onClick={toggleFavorite}>
            <FontAwesomeIcon
                icon={isFavorite ? faHeart : faHeartBroken}
                className={`absolute top-3 right-3 text-lg hover:text-xl drop-shadow-xl  transition-all  rounded-full bg-slate-700 p-2 ${isFavorite ? 'text-red-700' : 'text-white'}`}
            />
        </div>
    );
}

export default Favorited;
