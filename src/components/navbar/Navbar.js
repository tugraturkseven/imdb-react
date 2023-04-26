import React from 'react'
export default function Navbar() {
    return (
        <div className="bg-slate-800 w-full h-10 flex m-auto">
            <a href="#" className="p-2  text-slate-200 font-medium my-auto">🍿 Movie App</a>
            <a href="#" className="p-2 text-slate-400 hover:text-slate-100 transition-colors">Series</a>
            <a href="#" className="p-2 text-slate-400 hover:text-slate-100 transition-colors">Films</a>
            <a href="#" className="p-2 text-slate-400 hover:text-slate-100 transition-colors">Favourites</a>
            <div className="absolute border rounded-lg p-1 h-7 my-auto end-2 top-1 border-slate-500 hover:border-slate-300 second:bg-red-600">
                <svg color="white" opacity="0.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-5 h-5 float-left  m-auto"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <input type="text"
                    className="flex bg-slate-800 target:border-cyan-50  text-slate-300 placeholder-slate-400 placeholder:italic focus:outline-none
                    px-1 text-sm" placeholder='What you looking for?' />

            </div>
        </div >
    )
}
