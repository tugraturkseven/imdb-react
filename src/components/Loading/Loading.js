import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckRampBox } from '@fortawesome/free-solid-svg-icons';

function Loading() {
    return (
        <div className="grid grid-cols-1 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 min-h-screen">
            <FontAwesomeIcon icon={faTruckRampBox} style={{ color: '#ffffff' }} className="m-auto w-72 h-72 opacity-75" />
            <p className="text-center text-3xl text-slate-200 italic">Loading...</p>
        </div>
    )
}

export default Loading