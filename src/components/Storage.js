import React from 'react';
import Joke from './Joke';
import Giphy from './Giphy'

const Storage = (props) =>{
	const jokes = props.jokes.map(joke => <Joke joke={joke}/>)
	const giphs = props.giphs.map(giphy => <Giphy giphy={giphy}/>)
	return ( 
		<div>
			{jokes} 
			{giphs}
		</div>
	)
}


export default Storage;