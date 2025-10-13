import React from 'react';
import { useState } from 'react';
 
//CSS
import '../styles/slot.css'

//Components
import Card from './Card';

const Slot = ({slotName, machinelist, setmachinelist, setSlotList, slotList}) => {
    
    const currentMachine = machinelist.find(m => m.position === slotName);

    const handleCreateMachine = () => {
        if(!currentMachine) {
            const newMachine = {
                id: machinelist.length + 1,
                machine: `Machine ${machinelist.length + 1}`,
                position: slotName
            };
            setmachinelist([...machinelist, newMachine])
            setSlotList(slotList.map(s => s.slotName === slotName ? {...s, occupied: true} : s))
            //console.log(slotList)
        }
            }

    return ( 
        <div className='slot' onClick={handleCreateMachine}>
            <h3>{slotName}</h3>
            {currentMachine ? (
                <Card 
                    machineid={currentMachine.id} 
                    currentmachine={currentMachine}
                    slotName={slotName} 
                    setSlotList={setSlotList}
                    slotList={slotList}
                    setmachinelist={setmachinelist}
                    machinelist={machinelist}/>

            ) : (
                <h1>+</h1>  
            )}
        </div>
        
     );
}
 
export default Slot;