import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const [value, setValue] = useState('');

    return (

        <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 drop-shadow-2xl backdrop-blur-xl  w-full h-10 flex m-auto">
            <FontAwesomeIcon icon={faFilm} style={{ color: "#fd3a3a", }} className="text-2xl my-auto ml-5" />
            <a href="/" className=" my-auto ml-2 mr-2 text-slate-100 font-bold font-mono ">Movie App</a>
            <a href="/series" className="p-2 text-slate-400 hover:text-slate-100 transition-colors">Series</a>
            <a href="/movies" className="p-2 text-slate-400 hover:text-slate-100 transition-colors">Films</a>
            <a href="#" className="p-2 text-slate-400 hover:text-slate-100 transition-colors">Favourites</a>


            <div className="absolute border rounded-lg p-1 h-7 my-auto end-2 top-1 border-slate-500 hover:border-slate-300 second:bg-red-600 invisible md:visible">
                <a href={"/" + value + "?search=" + value} className='w-5 h-5 float-left m-auto'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff" }} className='w-4 h-4 pb-1 pt-0.5 pl-0.5 opacity-70' />
                </a>
                <input type="text"
                    className="flex bg-transparent target:border-cyan-50  text-slate-300 placeholder-slate-400 placeholder:italic focus:outline-none
                    px-1 text-sm" placeholder='What you looking for?' onInput={handleChange} />

            </div>
        </div >
    )
}
