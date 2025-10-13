import React from 'react';
import { useState } from 'react';

//CSS
import '../styles/card.css'

//Components
import Modal from './Modal';


const Card = ({
    machineid, 
    slotName, 
    setSlotList, 
    slotList, 
    machineposition,
    currentmachine, 
    machinelist,
    setmachinelist}) => {

    const [showModal,setShowModal] = useState(true);
    const handleClick = () => {
        setShowModal(!showModal)
    }

    const [kunde, setKunde] = useState('');
    const [kNummer, setKNummer] = useState('');
    const [date, setDate] = useState('');

    return (
        <div className="card">
            {showModal ? (
        <div onClick={handleClick}>
            <p>{machineid}</p>
            <p>{slotName}</p>
            <img src='/machine.jpg' alt='machine' style={{width:'80px', height:'80px'}}/>
        </div>
        ) : (
        <Modal 
            setKunde={setKunde} 
            kunde={kunde}
            setKNummer={setKNummer} 
            kNummer={kNummer}
            setDate={setDate} 
            date={date}
            handleClick={handleClick}
            slotName={slotName}
            setSlotList={setSlotList}
            slotList={slotList}
            machineid={machineid}
            machineposition={machineposition}
            currentmachine={currentmachine}
            setmachinelist={setmachinelist}
            machinelist={machinelist}/>
        )}
        </div>
        
        
     );
}
 
export default Card;