import React from 'react';
import { useState } from 'react';

//CSS\
import '../styles/modal.css'



const Modal = ({
    handleClick, 
    slotName,
    setSlotList,
    slotList,
    machineid,
    machineposition,
    currentmachine,
    setmachinelist,
    machinelist,
    setShowModal}) => {

    /*
    const handleSwitch = (e) => {
        const newPosition = e.target.value;
        setmachinelist(machinelist.map(m => m.id === machineid ? {...m, position: newPosition} : m));
        setSlotList(
            slotList.map(s => {
                if (s.slotName === slotName) return { ...s, occupied: false }; // alter Slot auf leer setzten
                if (s.slotName === newPosition) return { ...s, occupied: true }; // neuer Slot belegt setzten
                return s;
        }))};
    */
const handleSwitch = (e) => {
  const newPosition = e.target.value;

  // Finde Maschine, die aktuell in den Zielslot gehört (falls belegt)
  const targetMachine = machinelist.find(m => m.position === newPosition);

  // Wenn Slot leer → einfache Bewegung
  if (!targetMachine) {
    setmachinelist(machinelist.map(m =>
      m.id === machineid ? { ...m, position: newPosition } : m
    ));

    setSlotList(slotList.map(s => {
      if (s.slotName === slotName) return { ...s, occupied: false };
      if (s.slotName === newPosition) return { ...s, occupied: true };
      return s;
    }));
  } 
  // Wenn Slot belegt → Maschinen tauschen
  else {
    setmachinelist(machinelist.map(m => {
      if (m.id === machineid) {
        // aktuelle Maschine in Zielslot bewegen
        return { ...m, position: newPosition };
      }
      if (m.id === targetMachine.id) {
        // Maschine aus Zielslot in alten Slot verschieben
        return { ...m, position: slotName };
      }
      return m;
    }));

    // SlotList bleibt gleich, da beide Slots weiterhin belegt sind
  }
    handleClick(); // Modal schließen nach dem Wechsel
};

const handleChange = (field, value) => {
    setmachinelist(prev =>
      prev.map(m => m.id === machineid ? { ...m, [field]: value } : m)
    );
  }
    
    

    return ( 
        <div>
            <div className='leerslot'>
            <p>Leerslot</p>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
            </div>
            
            
            <input value={currentmachine.kunde || ""} onChange={(e) => handleChange("kunde", e.target.value)} type="text" placeholder="Kunde" />
            <input value={currentmachine.kNummer || ""} onChange={(e) => handleChange("kNummer", e.target.value)} type="text" placeholder="K-Nummer" />
            <input value={currentmachine.date || ""} onChange={(e) => handleChange("date", e.target.value)} type="date" />
            <p>Current Position{slotName}</p>
            <label>Switch to:</label>
            
            <select value={machineposition} onChange={handleSwitch}>
            <option value="">--Select Slot--</option>
                {slotList.map(slot => (
                <option key={slot.id} value={slot.slotName}>
                    {slot.slotName}
                </option>
            ))}
            </select>

            <button onClick={handleClick} > Back </button>
        </div>
     );
}
 
export default Modal;