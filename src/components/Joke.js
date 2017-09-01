import React from 'react';

const Joke = (props) => {
	const buttons = []
	for (var key in props.clickOptions) {
		buttons.push(<button key={key} onClick={props.clickOptions[key]}>{key}</button>)
	}

  return (
    <div>
      <h4>{props.joke}</h4>
      {buttons}
    </div>
  )
}




export default Joke
