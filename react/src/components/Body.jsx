import React from 'react';


import './Body.css'
import { FaRocket } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaJediOrder } from "react-icons/fa";


// FaGlobeAmericas

const Body = () => {
    return (
        <div className='BodyContainer'>
            <h1 className='Tittle'>Be Your Future</h1>
            <div className="Cards">
                <div className="Card1">

                    <i><FaRocket/></i>

                    <h2>Rocket</h2>

                    <h4>Make you up to space like Humanity</h4>
                </div>

                <div className="Card2">
                    <i><FaGlobeAmericas/></i>

                    <h2>Planet</h2>

                    <h4>Get fat like a planet like your mother</h4>
                </div>

                <div className="Card3">
                    <i><FaJediOrder/></i>

                    <h2>Jedi Order</h2>

                    <h4>may the force be with you young padawan</h4>
                </div>
            </div>
        </div>
    )
}

export default Body;