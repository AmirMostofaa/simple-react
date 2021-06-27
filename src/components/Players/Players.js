import React from 'react';
import './Players.css';
import fakeData from '../../fakeData/players';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import Cart from '../Cart/Cart';

const Players = () => {
    
    const [players, setPlayers] = useState(fakeData);
    const [cart, setCart] = useState([]);
    
    const handleAddPlayer = (player) =>{
        
        const newCart = [...cart, player];
        setCart(newCart)

        
    }
  

    return (
        <div className="players">
            <Container>
                <Row>
                    <Col xs={8} className="d-flex flex-wrap">
                        {
                            players.map(player => <SinglePlayer 
                                player={player}
                                 handleAddPlayer={handleAddPlayer}
                                ></SinglePlayer>)
                        }
                    </Col>
                    <Col xs={4}>
                        <Cart cart={cart}></Cart>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Players;