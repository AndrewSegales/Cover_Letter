
import { useState } from 'react'
import React from 'react'
import './Card.css'

function Card() {

    const [name,setName] = useState('Andrew Eibar Segales Sejas');
    const [job, setJob] = useState('Developer');
    const [about, setAbout] = useState('Soy un desarrollador web, estoy estudiando ingenieria de sistemas');

    return (
        <div className='Card'>
            <div className='image'>
                    <img src="/src/assets/images/me.jpg" alt="andrew.img" height="190px" width="190px" />
            </div>
            <div className='lowerContainer'>
                <h3>{name}</h3>
                <h4>{job}</h4>
                <p>{about}</p>
            </div>
        </div>
    )
}

export default Card
