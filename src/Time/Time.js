import React from 'react';
import './Time.css'



const calcultime = timer =>{

    const secondes = 1000;
    const minutes= secondes*60;
    const hours = minutes*60;
    const calHours = Math.floor(timer / hours);
    const restHours = timer % hours;
    const calMinutes = Math.floor(restHours / minutes);
    const restMinutes =  restHours % minutes;
    const calSecondes = Math.floor(restMinutes / secondes);
    return (

        String(calHours).padStart(2,0) 
        + ':' + 
        String(calMinutes).padStart(2,0) 
        + ':' + 
       String(calSecondes).padStart(2,0) 

    )
    
}

const Time = (timer)=>
{
   
 return(


            <div className='body-time'>

                <div className='numbers'>
                    <h1>{calcultime(timer)}</h1> 
                </div>

                <div className='names'>
                    <h2>Hour</h2>
                    <h2>Minute</h2>
                    <h2>Seconde</h2>
                    
                </div>   
        </div>

           
 )
    
}

export default Time;