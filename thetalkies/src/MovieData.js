import React from 'react'

const MovieData = (props) => {


    return (
        <div>
            <button onClick = {() => this.props.addtoCart(item)}>Purchase</button>
        </div>
    )

}

export default MovieData





//  const MovieData = ( {genre : {  action, comedy,  documentary,  drama,  horror,  romance,  scifi,  thriller : {  title, rating, cost }}}) => {
//      return (
//          <div>
//              <button>Purchase</button>
//              <p>{title}</p>
//              <p>{rating}</p>
//              <p>{cost}</p>  
//          </div>
//      )

//  }

//  const MovieData = (props) => { const { action, comedy,  documentary,  drama,  horror,  romance,  scifi,  thriller } = props 
//      return (
//          <div>
//              <button>Purchase</button>
//              <p>{props.title}</p>
//              <p>{props.rating}</p>
//              <p>{props.cost}</p>  
//          </div>
//      )

//  }



