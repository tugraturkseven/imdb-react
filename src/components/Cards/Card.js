import React from 'react'
import Favorited from '../Favourite/Favorited';

function Card(props) {

    const imgUrl = props.imgUrl;
    const genresArr = props.genresArray;
    const genres = genresArr.slice(0, 2).map(item => {
        return <p className='inline-block  bg-violet-500 bg-opacity-20 rounded-full pl-3 pr-3 mx-2 mb-4 text-slate-300 font-thin text-center'>#{item.text}</p>
    });
    const id = props.cardid;
    const title = props.title;


    if (typeof imgUrl === 'string') {
        return (
            <div key={id} id={id} className="relative w-64 h-96 rounded-lg overflow-hidden shadow-2xl m-5 mx-auto text-center">
                <Favorited elementID={id} />
                <a href={`/details/${id}`} target="_blank" rel="noreferrer">
                    <img className="w-full h-80" src={imgUrl} alt="" />
                    <p className="font-bold font-sans text-xl md:text-md sm:text-sm text-center text-slate-100 -bottom-10 w-auto mx-2 truncate">{title}</p>
                </a>
                {genres}
            </div>
        );
    }

    return null;
}

export default Card