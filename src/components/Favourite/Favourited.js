import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';

function Favourited() {
    const selectedItem = useRef(null);
    let favArr = [];
    const storedArr = localStorage.getItem('favorites');
    const [favorited, setFavorited] = useState(false);
    const handleFavorite = (isFavorited) => {

        const favItem = selectedItem.current.parentElement.outerHTML;
        const currItem = selectedItem.current.firstChild.classList[1];
        setFavorited(currItem === 'fa-heart-crack');

        if (isFavorited) {
            if (storedArr) {
                const index = favArr.indexOf((item) => item === favItem);
                if (index === -1) {
                    favArr.push(favItem);

                }
            } else {
                favArr.push(favItem);
            }
        } else {
            favArr = favArr.filter((item) => item !== favItem);
        }
        localStorage.setItem('favorites', JSON.stringify(favArr));
    }


    if (favorited) {
        return (
            <div ref={selectedItem} onClick={handleFavorite.bind(false)}></div>
        )
    }
    return (
        <div ref={selectedItem} onClick={handleFavorite.bind(false)}>
            <FontAwesomeIcon
                icon={faHeartBroken}
                className="absolute top-3 right-3 text-lg hover:text-xl drop-shadow-xl text-white bg-slate-700 p-2 rounded-full"
            ></FontAwesomeIcon>
        </div>
    );
}

export default Favourited;
