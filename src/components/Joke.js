import React from 'react';

const Joke = (props) => {


  return (
    <div>
      <h4>{props.joke}</h4>
      <button onClick={props.handleSaveJoke}>save
      </button>
    </div>
  )
}




export default Joke
