import React from 'react';
import './Cart.css';

const Cart = (props) => {
    
    const cart = props.cart;
    const total = cart.reduce((total, player) => total + player.yearlySalary, 0);


    return (
        <div className="cart">
            <h6>Player Added: {cart.length}</h6>
            <div className="player-list">
                <h5>Players: </h5>
                {
                    cart.map(playerName => <li>{playerName.name},  Salary: {playerName.yearlySalary}</li>)
                }
            </div>
            
            <p>Total Salaries:<br/>{total}</p>
            
            
        </div>
    );
};

export default Cart;