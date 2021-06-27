import React from 'react';
import './SinglePlayer.css';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const SinglePlayer = (props) => {
    const {name, yearlySalary, img} = props.player;
    
    return (
        <div className="single-player">
            <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Yearly Salary: {yearlySalary} </Card.Text>
                
                <Button onClick={() => props.handleAddPlayer(props.player)} variant="dark"><FontAwesomeIcon icon={faUserPlus} />Add Player</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default SinglePlayer;