import React from 'react';

//components
import Card from './Card';

//CSS
import '../styles/pool.css'


const Pool = () => {
    
    //dummy data
    const machineList = [
        {id:1, name:"Machine 1"},
        {id:2, name:"Machine 2"},
        {id:3, name:"Machine 3"},
        {id:4, name:"Machine 4"},
    ]

    return ( 
        <div className="pool">

                {machineList.map(machine => (
                    <Card key={machine.id} name={machine.name}/>
                ))}

        </div>
     );
}
 
export default Pool;