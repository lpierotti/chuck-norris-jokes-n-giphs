import React from 'react';

class Container extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentJoke: null,
			currentGiphy: null
			clickOptions: ["next", "save"]
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
			.then(json => this.setState({currentGiphy: json.data[sampler()].images.fixed_height.url}))
	}

	componentDidMount() {
		this.getJoke()
		this.getGiphy()

	}

	render(){
		return (
			<div>
				<Joke joke={this.state.currentJoke} onClick={this.state.clickOptions} clickOptions={this.state.clickOptions}/>
				<Giphy giphy={this.state.currentGiphy}/>
				<button onClick={this.props.showSaved}>Show Saved Items</button>
			</div>

		)
	}
}





export default Container

function sampler(){
	Math.floor(Math.random() * 40 + 1)
}
