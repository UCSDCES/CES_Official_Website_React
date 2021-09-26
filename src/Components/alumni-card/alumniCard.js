import React from 'react';
import { Col } from 'react-bootstrap';
import './alumniCard.css';

const alumniCard = (props) => (
    <Col lg={3} md={4} s={6} xs={12}>
        <div className='a-card'>
            <h4 className='a-card-name'>{props.name}</h4>
            <div className='a-card-role'>{props.role}</div>
        </div>
    </Col>
)

export default alumniCard;