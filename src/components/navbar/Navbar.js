import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
export default function Navbar() {
    return (
        <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black w-full h-10 flex m-auto">
            <FontAwesomeIcon icon={faFilm} style={{ color: "#fd3a3a", }} className="text-2xl my-auto ml-5" />
            <a href="#" className=" my-auto ml-2 mr-2 text-slate-100 font-bold font-mono ">Movie App</a>
            <a href="/series" className="p-2 text-slate-400 hover:text-slate-100 transition-colors">Series</a>
            <a href="/movies" className="p-2 text-slate-400 hover:text-slate-100 transition-colors">Films</a>
            <a href="#" className="p-2 text-slate-400 hover:text-slate-100 transition-colors">Favourites</a>


            <div className="absolute border rounded-lg p-1 h-7 my-auto end-2 top-1 border-slate-500 hover:border-slate-300 second:bg-red-600 invisible md:visible">

                <svg color="white" opacity="0.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-5 h-5 float-left  m-auto"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <input type="text"
                    className="flex bg-transparent target:border-cyan-50  text-slate-300 placeholder-slate-400 placeholder:italic focus:outline-none
                    px-1 text-sm" placeholder='What you looking for?' />

            </div>
        </div >
    )
}
