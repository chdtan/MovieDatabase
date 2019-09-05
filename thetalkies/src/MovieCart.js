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
            <div>
                {item.map((movie, index) => {
                    return <div key= {index}>
                        <button>Remove</button>
                        <p>{movie.title}</p>
                        <p>{movie.cost}</p>
                    </div>
                })}

            <p> Credits remaining: {this.total()}
            </p>    
            </div>    
            
        );
    }
}

export default MovieCart;
