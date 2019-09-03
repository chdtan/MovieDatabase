import React, { Component } from 'react';
import './App.css';
import MovieList from "./MovieList.js";
import MovieCart from "./MovieCart.js";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: null,
      cart: [],
      credit: 100,
    }
    this.addToCart = this.addToCart.bind(this);
    console.log(this.state.cart);
  }

  addToCart(item) {
    console.log('item:', item)
    const cart = [...this.state.cart, item]
    this.setState({cart})
    
  }

  render () {
    return (
      <div class="App">
        <header>
          <h1>Welcome to the Talkies</h1>
        </header>
        <div>
          <MovieList addToCart={this.addToCart}/>
          <MovieCart items={this.state.cart} credit={this.state.credit} /> 
        </div>
      </div>
      
    );
  }
  
}

export default App;
