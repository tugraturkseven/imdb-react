import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';

function Favourited() {
    const selectedItem = useRef(null);
    const [favourite, setFavourite] = useState([]);
    const handleFavourite = () => {
        let id = selectedItem.current.parentElement.id;
        setFavourite([...favourite, id]);
    }

    return (
        <div onClick={handleFavourite} ref={selectedItem}>
            <FontAwesomeIcon icon={faHeartBroken} className="absolute top-3 right-3 text-lg hover:text-xl drop-shadow-xl text-white bg-slate-700 p-2 rounded-full"></FontAwesomeIcon>
        </div>
    )
}

export default Favourited