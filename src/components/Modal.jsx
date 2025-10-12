import React from 'react';
import { useState } from 'react';



const Modal = ({setDate, setKNummer, setKunde, kunde, kNummer, date, handleClick}) => {
    

    return ( 
        <div>
            <p>Modal body text goes here.</p>
            <input value={kunde} onChange={(e)=> setKunde(e.target.value)} type="text" placeholder="Kunde" />
            <input value={kNummer} onChange={(e)=> setKNummer(e.target.value)} type="text" placeholder="K-Nummer" />
            <input value={date} onChange={(e)=> setDate(e.target.value)} type="date" />
            <button onClick={handleClick} > Back </button>
        </div>
     );
}
 
export default Modal;