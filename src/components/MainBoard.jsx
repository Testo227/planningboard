import React from 'react';
import { useState } from 'react';

//components
import PPM1_Pool from './PPM1_Pool';
import PPM1_Line from './PPM1_Line';
import PPM1_NAorWait from './PPM1_NAorWait';

//CSS
import '../styles/ppm1.css'
import '../styles/mainboard.css'


const MainBoard = () => {

     //dummy slot data
    const [areas, setAreas] = useState([
        {
            id: 1,
            name: "PPM1-Pool",
            slots: [
            { id: 1, slotName: "Pos 1", occupied: false },
            { id: 2, slotName: "Pos 2", occupied: true },
            { id: 3, slotName: "Pos 3", occupied: false },
            { id: 4, slotName: "Pos 4", occupied: true },
            { id: 5, slotName: "Pos 5", occupied: true },
            { id: 6, slotName: "Pos 6", occupied: false },
            { id: 7, slotName: "Pos 7", occupied: true },
            { id: 8, slotName: "Pos 8", occupied: false },
            { id: 9, slotName: "Pos 9", occupied: false }
            ]
        },
        {
            id: 2,
            name: "PPM1-Line",
            slots: [
            { id: 10, slotName: "Pos 1", occupied: false },
            { id: 11, slotName: "Pos 2", occupied: false },
            { id: 12, slotName: "Pos 3", occupied: false },
            { id: 13, slotName: "Pos 4", occupied: false },
            { id: 14, slotName: "Pos 5", occupied: false },
            { id: 15, slotName: "Pos 6", occupied: false },
            { id: 16, slotName: "Pos 7", occupied: false },
            { id: 17, slotName: "Pos 8", occupied: false }
            ]
        },
        {
            id: 3,
            name: "PPM1-NAorWait",
            slots: [
            { id: 18, slotName: "Pos 1", occupied: false },
            { id: 19, slotName: "Pos 2", occupied: false },
            { id: 20, slotName: "Pos 3", occupied: false }
            ]
        },
]);

    
    //dummy data
    const [machinelist, setmachinelist] = useState([
        {id:1, machine:"Machine 1", position:"Pos 2", kunde: "Firma A", kNummer: "K123", date: "2023-10-01", area: "PPM1-Pool"},
        {id:2, machine:"Machine 2", position:"Pos 4", kunde: "Firma B", kNummer: "K456", date: "2023-11-15", area: "PPM1-Pool"},
        {id:3, machine:"Machine 3", position:"Pos 5" ,kunde: "Firma C", kNummer: "K789", date: "2023-12-20", area: "PPM1-Pool"},
        {id:4, machine:"Machine 4", position:"Pos 7", kunde: "Firma D", kNummer: "K012", date: "2024-01-10", area: "PPM1-Pool"},])



    return ( 
        <div className='MainBoard'>

        
            <div className='PPM1'> 
                <PPM1_Pool
                    machinelist={machinelist} 
                    setmachinelist={setmachinelist}
                    areas={areas}
                    thisarea={areas[0]}
                    setAreas={setAreas}> 
                </PPM1_Pool>
                <PPM1_Line 
                    machinelist={machinelist} 
                    setmachinelist={setmachinelist}
                    areas={areas}
                    thisarea={areas[1]}
                    setAreas={setAreas}
                />
                <PPM1_NAorWait 
                    machinelist={machinelist} 
                    setmachinelist={setmachinelist}
                    areas={areas}
                    thisarea={areas[2]}
                    setAreas={setAreas}
                />

            </div>
        </div>
     )
}
 
export default MainBoard;