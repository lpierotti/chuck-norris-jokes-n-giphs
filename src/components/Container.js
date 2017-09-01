import React from 'react';

function sampler(){
	Math.floor(Math.random()*40 + 1)
}

class Container extends React.Component {
	constructor() {
		super();
		this.state = {
			currentJoke: null,
			currentGiphy: null
		}
	}

	getJoke = () => {
		fetch('https://api.chucknorris.io/jokes/random')
			.then(resp => resp.json())
			.then(json => this.setState({currentJoke: json.value}))
	}

	getGiphy = () => {
		fetch('https://api.giphy.com/v1/gifs/search?q=chuck+norris&api_key=64db678ec9b14166b11841c927a4f28f&limit=40')
			.then(resp => resp.json())
			.then(json => this.setState({currentGiphy: json.sample()})) 
	}

	componetDidMount() {

	}

	render(){
		return (
			<div>
				<Joke joke={this.state.currentJoke}/>
				<Giphy giphy={this.state.currentGiphy}/>
			</div>

		)
	}
}





export default Container