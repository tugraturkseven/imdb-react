import React from 'react'

export default function Navbar() {
    return (
        <div className="bg-teal-400 w-full h-10 flex">
            <a href="#" className="p-2 font-medium">Movie App</a>
            <a href="#" className="p-2 hover:text-slate-100 transition-colors">Series</a>
            <a href="#" className="p-2 hover:text-slate-100 transition-colors">Films</a>
            <input type="text"
                className="bg-teal-400
                border rounded-lg h-8 my-1 flex justify-end place-content-end
                px-3 target:border-cyan-50
             text-slate-100 
            placeholder='merhaba' " />
        </div>
    )
}
