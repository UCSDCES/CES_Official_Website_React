import React from 'react';
import { Col } from 'react-bootstrap';
import './MemberCard.css';

const memberCard = (props) => (
    <Col lg={4} md={6} s={12}>
        <div className='m-card'>
            <h4 className='m-card-name'>{props.name}</h4>
            <p className='m-card-info'>{props.info}</p>
            <div className='m-card-role'>{props.role}</div>
            <div className='m-card-dep'>{props.department}</div>
        </div>
    </Col>
)

export default memberCard;