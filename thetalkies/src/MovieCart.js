import React, { Component } from 'react';
import './App.css';

class MovieCart extends Component {
    constructor() {
        super()
        this.state = {
            credit: []
        }
    }
    
    
    total = () => {
        return this.props.item.reduce((total, item) => { return (total === 0) ? "Not enough credit remaining to purchase this movie" : total - item.cost
        }, 100)
    }
    

    render () {
        
        const item = this.props.item
    
        if (item.length === 0) {
            return <div>
                <p>Your cart is empty</p>
            </div>
        }

        return (
            <div className="cart">
                {item.map((movie, index) => {
                    return <div className="checkout" key= {index}>
                        <p>{movie.title}</p>
                        <p>Cost: {movie.cost} Credits</p>
                        <button>Remove</button>
                    </div>
                })}

            <p> Credits remaining: {this.total()}
            </p>    
            </div>    
            
        );
    }
}

export default MovieCart;
