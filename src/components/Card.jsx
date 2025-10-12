import React from 'react';
import { useState } from 'react';

//CSS
import '../styles/card.css'

//Components
import Modal from './Modal';


const Card = ({name}) => {
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
            <p>{name}</p>
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
            handleClick={handleClick}/>   
        )}
        </div>
        
        
     );
}
 
export default Card;