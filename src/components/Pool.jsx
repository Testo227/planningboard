import React, { use } from 'react';
import { useState } from 'react';

//components
import Card from './Card';
import Slot from './Slot';

//CSS
import '../styles/pool.css'


const Pool = () => {

    //dummy slot data
    const [slotList, setSlotList] = useState([
        {id:1, slotName:"Slot 1", occupied: false},
        {id:2, slotName:"Slot 2", occupied: true},
        {id:3, slotName:"Slot 3", occupied: false},
        {id:4, slotName:"Slot 4", occupied: true},
        {id:5, slotName:"Slot 5", occupied: true},
        {id:6, slotName:"Slot 6", occupied: false},
        {id:7, slotName:"Slot 7", occupied: true},
        {id:8, slotName:"Slot 8", occupied: false},
        {id:9, slotName:"Slot 9", occupied: false}
    ])

    
    //dummy data
    const [machinelist, setmachinelist] = useState([
        {id:1, machine:"Machine 1", position:"Slot 2", kunde: "Firma A", kNummer: "K123", date: "2023-10-01"},
        {id:2, machine:"Machine 2", position:"Slot 4", kunde: "Firma B", kNummer: "K456", date: "2023-11-15"},
        {id:3, machine:"Machine 3", position:"Slot 5" ,kunde: "Firma C", kNummer: "K789", date: "2023-12-20"},
        {id:4, machine:"Machine 4", position:"Slot 7", kunde: "Firma D", kNummer: "K012", date: "2024-01-10"}])

    return ( 
        <div className="pool">

                {slotList.map(slot => (
                    <Slot 
                        key={slot.id} 
                        slotName={slot.slotName} 
                        machinelist={machinelist}
                        setmachinelist={setmachinelist}
                        setSlotList={setSlotList}
                        slotList={slotList}
                    />
                ))}

        </div>
     );
}
 
export default Pool;