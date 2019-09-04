import React, { Component } from 'react';
import './App.css';
import MovieData from './MovieData';

class MovieList extends Component {
    render () {
        const { movies } = this.props
        const { action, comedy, documentary, drama, horror, romance, scifi, thriller } = this.props.movies
        
        
        if (Object.keys(movies) === 0) {
            return null
        } console.log(Object.keys(movies));

        return (
            <div>
                {Object.keys(movies).map((genre, index) => {
                    return <p>{genre}</p>
                })}
                {action.map((movie, index) => {
                    return <div>
                            {/* <MovieData genre={this.props.movies}/> */}
                            <MovieData cart={this.addToCart} />
                            <p>{movie.title}</p>
                            <p>{movie.rating}</p>
                            <p>{movie.cost}</p>  
                        </div>
                })}
                {comedy.map((movie, index) => {
                    return <div>
                            {/* <MovieData genre={this.props.movies}/> */}
                            <MovieData cart={this.addToCart}/>
                            <p>{movie.title}</p>
                            <p>{movie.rating}</p>
                            <p>{movie.cost}</p>  
                        </div>
                })}
                {documentary.map((movie, index) => {
                    return <div>
                            {/* <MovieData genre={this.props.movies}/> */}
                            <MovieData cart={this.addToCart} />
                            <p>{movie.title}</p>
                            <p>{movie.rating}</p>
                            <p>{movie.cost}</p>  
                        </div>
                })}
                {drama.map((movie, index) => {
                    return <div>
                            {/* <MovieData genre={this.props.movies}/> */}
                            <MovieData cart={this.addToCart}/>
                            <p>{movie.title}</p>
                            <p>{movie.rating}</p>
                            <p>{movie.cost}</p>  
                        </div>
                })}
                {horror.map((movie, index) => {
                    return <div>
                            {/* <MovieData genre={this.props.movies}/> */}
                            <MovieData cart={this.addToCart} />
                            <p>{movie.title}</p>
                            <p>{movie.rating}</p>
                            <p>{movie.cost}</p>  
                        </div>
                })}
                {romance.map((movie, index) => {
                    return <div>
                            {/* <MovieData genre={this.props.movies}/> */}
                            <MovieData cart={this.addToCart} />
                            <p>{movie.title}</p>
                            <p>{movie.rating}</p>
                            <p>{movie.cost}</p>  
                        </div>
                })}
                {scifi.map((movie, index) => {
                    return <div>
                            {/* <MovieData genre={this.props.movies}/> */}
                            <MovieData cart={this.addToCart} />
                            <p>{movie.title}</p>
                            <p>{movie.rating}</p>
                            <p>{movie.cost}</p>  
                        </div>
                })}
                {thriller.map((movie, index) => {
                    return <div>
                            {/* <MovieData genre={this.props.genre}/> */}
                            <MovieData cart={this.addToCart} />
                            <p>{movie.title}</p>
                            <p>{movie.rating}</p>
                            <p>{movie.cost}</p>  
                        </div>
                })}

                {/* <table border = "1">
                    <tbody>
                        <tr>
                            <th>Genre</th>
                            <th>Title</th>
                            <th>Rating</th>
                            <th>Cost</th>
                        </tr>
                        <ul>
                            {genre.map((genre, index) => {
                                return <ul>
                                    <li key={index}>{genre}</li>
                                </ul>            
                            })}
                        </ul>
                        {Object.values(titles).map((movie, index) =>{
                            return <tr key= {index}>
                                <td>{movie[index].title}</td>
                            </tr>
                        })} */}
                        {/* {genre.action.map((movie, index) => {
                            return <tr key= {index}>
                                <button onClick={ () => this.props.addToCart()}>
                                    Purchase
                                    </button>
                                <td>{movie.title}</td>
                                <td>{movie.rating}</td>
                                <td>{movie.cost}</td>
                            </tr>
                        })}
                        {genre.comedy.map((movie, index) => {
                            return <tr key= {index}>
                                
                                <td>{movie.title}</td>
                                <td>{movie.rating}</td>
                                <td>{movie.cost}</td>
                            </tr>
                        })}
                        
                        {genre.drama.map((movie, index) => {
                            return <tr key= {index}>
                                
                                <td>{movie.title}</td>
                                <td>{movie.rating}</td>
                                <td>{movie.cost}</td>
                            </tr>
                        })}
                        {genre.horror.map((movie, index) => {
                            return <tr key= {index}>
                                
                                <td>{movie.title}</td>
                                <td>{movie.rating}</td>
                                <td>{movie.cost}</td>
                            </tr>
                        })}
                        {genre.romance.map((movie, index) => {
                            return <tr key= {index}>
                                
                                <td>{movie.title}</td>
                                <td>{movie.rating}</td>
                                <td>{movie.cost}</td>
                            </tr>
                        })}
                        {genre.scifi.map((movie, index) => {
                            return <tr key= {index}>
                                
                                <td>{movie.title}</td>
                                <td>{movie.rating}</td>
                                <td>{movie.cost}</td>
                            </tr>
                        })}
                        {genre.thriller.map((movie, index) => {
                            return <tr key= {index}>
                                
                                <td>{movie.title}</td>
                                <td>{movie.rating}</td>
                                <td>{movie.cost}</td>
                            </tr>
                        })}
                        
                    </tbody>    
                </table> */}
            </div>
        );
    }
}

export default MovieList;
