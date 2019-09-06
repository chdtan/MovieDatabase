import React, { Component } from 'react';
import './App.css';
// import MovieData from './MovieData';

class MovieList extends Component {
    constructor() {
        super()
        this.state = {
            displayGenreMovies: false
        }
    }

    displayGenreMovies = () => {
        this.setState = ({ displayGenreMovies: !this.state.displayGenreMovies })
    }




    render () {
        const { movies } = this.props
        const { action, comedy, documentary, drama, horror, romance, scifi, thriller } = this.props.movies
        const { addToCart } = this.props

        
        if (Object.keys(movies) === 0) {
            return null
        } 
        if (this.props.addToCart === 0) {
            return null
        }

        // if (this.state.displayGenreMovies) {
        //     {action.map((movie, index) => {
        //     return <ul>
        //             {/* <MovieData genre={this.props.movies}/> */}
        //             {/* <button onClick = {() => addToCart(movie)}
        //             >Purchase</button> */}
        //             <li>{movie.title}</li>
        //             <li>{movie.rating}</li>
        //             <li>{movie.cost}</li>  
        //         </ul>
        // })} // see how this logic can be nested for all the genres


        return (
            
            <div>
                <div className="genre">
                    <h2>{Object.keys(movies)[0]}</h2>
                    {/* <button className= "btn" onClick={this.displayGenreMovies}>Expand</button> */}
                    <div className="single-movie">
                        {action.map((movie, index) => {
                        return <ul className = "movie-poster">
                            {/* <MovieData genre={this.props.movies}/> */}
                            {/* <button onClick = {() => addToCart(movie)}
                            >Purchase</button> */}
                            <p>{movie.title}</p>
                            <p>Rating: {movie.rating}</p>
                            <p>Cost: {movie.cost}</p>
                            <button onClick = {() => addToCart(movie)}
                            >Purchase</button>
                        </ul>
                    })}
                    </div>
                </div>

                <div className="genre">
                    <h2>{Object.keys(movies)[1]}</h2>
                    <div className="single-movie">
                        {comedy.map((movie, index) => {
                            return <div className = "movie-poster">
                                {/* <MovieData genre={this.props.movies}/> */}
                                <p>{movie.title}</p>
                                <p>Rating: {movie.rating}</p>
                                <p>Cost: {movie.cost}</p>
                                <button onClick = {() => addToCart(movie)}
                            >Purchase</button>  
                            </div>
                        })}
                    </div>
                </div>

                <div className="genre">
                    <h2>{Object.keys(movies)[2]}</h2>
                    <div className="single-movie">
                        {documentary.map((movie, index) => {
                            return <div className = "movie-poster">
                                {/* <MovieData genre={this.props.movies}/> */}
                                <p>{movie.title}</p>
                                <p>Rating: {movie.rating}</p>
                                <p>Cost: {movie.cost}</p> 
                                <button onClick = {() => addToCart(movie)}
                            >Purchase</button> 
                            </div>
                        })}
                    </div>
                </div>

                <div className="genre">
                    <h2>{Object.keys(movies)[3]}</h2>
                    <div className="single-movie">
                        {drama.map((movie, index) => {
                            return <div className = "movie-poster">
                                {/* <MovieData genre={this.props.movies}/> */}
                                <p>{movie.title}</p>
                                <p>Rating: {movie.rating}</p>
                                <p>Cost: {movie.cost}</p>
                                <button onClick = {() => addToCart(movie)}
                            >Purchase</button>  
                            </div>
                        })}
                    </div>
                </div>

            
                <div className="genre">
                    <h2>{Object.keys(movies)[4]}</h2>
                    <div className="single-movie">
                        {horror.map((movie, index) => {
                            return <div className = "movie-poster">
                                {/* <MovieData genre={this.props.movies}/> */}
                                <p>{movie.title}</p>
                                <p>Rating: {movie.rating}</p>
                                <p>Cost: {movie.cost}</p> 
                                <button onClick = {() => addToCart(movie)}
                            >Purchase</button> 
                            </div>
                        })}
                    </div>
                </div>

                <div className="genre">
                <h2>{Object.keys(movies)[5]}</h2>
                    <div className="single-movie">
                        {romance.map((movie, index) => {
                        return <div className = "movie-poster">
                                {/* <MovieData genre={this.props.movies}/> */}
                                <p>{movie.title}</p>
                                <p>Rating: {movie.rating}</p>
                                <p>Cost: {movie.cost}</p>
                                <button onClick = {() => addToCart(movie)}
                            >Purchase</button>  
                            </div>
                        })}
                    </div>
                </div>

                <div className="genre">
                <h2>{Object.keys(movies)[6]}</h2>
                    <div className="single-movie">
                        {scifi.map((movie, index) => {
                            return <div className = "movie-poster">
                                {/* <MovieData genre={this.props.movies}/> */}
                                <p>{movie.title}</p>
                                <p>Rating: {movie.rating}</p>
                                <p>Cost: {movie.cost}</p>  
                                <button onClick = {() => addToCart(movie)}
                            >Purchase</button>
                            </div>
                        })}
                    </div>
                </div>

                <div className="genre">
                    <h2>{Object.keys(movies)[7]}</h2>
                    <div className="single-movie">
                        {thriller.map((movie, index) => {
                            return <div className = "movie-poster">
                                {/* <MovieData genre={this.props.genre}/> */}
                                <p>{movie.title}</p>
                                <p> Rating: {movie.rating}</p>
                                <p>Cost: {movie.cost}</p>
                                <button onClick = {() => addToCart(movie)}
                            >Purchase</button>  
                            </div>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieList;
