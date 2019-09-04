import React, { Component } from 'react';
import './App.css';
import MovieList from "./MovieList.js";
import MovieCart from "./MovieCart.js";
// import MovieData from "./available_movies.json"

class App extends Component {
  constructor() {
    super()
    this.state = {
      item: null,
      cart: [],
      credit: 100,
      movies: {}
    }
  }

  componentDidMount(){
    fetch("./available_movies.json")
      .then(result => {
        return result.json();
      }).then(data => {
        console.log('data:', data)
      })
  }

  addToCart = item => {
    const cart = [...this.state.cart, item];
    console.log('item:', item)
    this.setState({ cart });
  }
  

  render () {
    return (
      <div className="App">
        <header>
          <h1>Welcome to the Talkies</h1>
        </header>
        <div>
          <MovieList addToCart={this.addToCart} movies={this.state.movies}/>
          <MovieCart items={this.state.cart} credit={this.state.credit} /> 
        </div>
      </div>
      
    );
  }
  
}

export default App;
