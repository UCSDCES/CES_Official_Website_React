import React from "react";
import "./eventCard.css"

const eventCard = (props) => (
    
        <div className='event-card'>
            <div>
                <img src={props.image} alt="#"/>
            </div>
            
            <div className='event-card-info'>
                <h2>{props.title}</h2>
                <h3>{props.date}</h3>
                <p>{props.intro}</p>
            </div>
        </div>

)

export default eventCard;