import React from "react";
import "./eventCard.css"
import {Col} from 'react-bootstrap';

const eventCard = (props) => (
    <Col lg={4} md={6} xs={12}>
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
    </Col>
        

)

export default eventCard;