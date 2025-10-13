import React from 'react';
import { useState } from 'react';



const Modal = ({
    setDate, 
    setKNummer, 
    setKunde, 
    kunde, 
    kNummer, 
    date, 
    handleClick, 
    slotName,
    setSlotList,
    slotList,
    machineid,
    machineposition,
    currentmachine,
    setmachinelist,
    machinelist}) => {

    const handleSwitch = (e) => {
        const newPosition = e.target.value;
        setmachinelist(machinelist.map(m => m.id === machineid ? {...m, position: newPosition} : m));
        setSlotList(
            slotList.map(s => {
                if (s.slotName === slotName) return { ...s, occupied: false }; // alter Slot leer
                if (s.slotName === newPosition) return { ...s, occupied: true }; // neuer Slot belegt
                return s;
        }))};
    

    return ( 
        <div>
            <p>Modal body text goes here.</p>
            <input value={kunde} onChange={(e)=> setKunde(e.target.value)} type="text" placeholder="Kunde" />
            <input value={kNummer} onChange={(e)=> setKNummer(e.target.value)} type="text" placeholder="K-Nummer" />
            <input value={date} onChange={(e)=> setDate(e.target.value)} type="date" />
            <p>Current Position{slotName}</p>
            <label>Switch to:</label>

            <select value={machineposition} onChange={handleSwitch}>
                <option value="">-- Choose new slot --</option>
                <option value="Slot 1">Slot 1</option>
                <option value="Slot 2">Slot 2</option>
                <option value="Slot 3">Slot 3</option>
                <option value="Slot 4">Slot 4</option>
                <option value="Slot 5">Slot 5</option>
                <option value="Slot 6">Slot 6</option>
                <option value="Slot 7">Slot 7</option>
                <option value="Slot 8">Slot 8</option>
                <option value="Slot 9">Slot 9</option>
            </select>

            <button onClick={handleClick} > Back </button>
        </div>
     );
}
 
export default Modal;