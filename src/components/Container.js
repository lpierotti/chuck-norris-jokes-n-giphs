import React from 'react';
import Giphy from './Giphy'
import Joke from './Joke'

class Container extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentJoke: null,
			currentGiphy: null,
			clickOptions: {
				next: this.reload, 
				save: this.handleSave
			}
		}
	}

	reload = () => {
		this.getJoke();
		this.getGiphy();
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

	handleSave = (event) => {
		switch (event.target.name) {
			case "giphy":
				this.handleSaveGiphy()
			break;
			case "joke":
				this.handleSaveJoke()
			break;
			default: 
				console.log("hiiiiii")
		}
	}

	handleSaveJoke = () => {
		this.props.saveJoke(this.state.currentJoke)
	}

	handleSaveGiphy = () => {
		this.props.saveGiphy(this.state.currentGiphy)
	} 


	render(){
		return (
			<div>
				<Joke joke={this.state.currentJoke} saveJoke={this.handleSave} clickOptions={this.state.clickOptions}/>
				<Giphy giphy={this.state.currentGiphy} saveGiphy={this.handleSave} clickOptions={this.state.clickOptions}/>
				<button onClick={this.props.showSaved}>Show Saved Items</button>
			</div>

		)
	}
}





export default Container

function sampler(){
	return Math.floor(Math.random() * 40 + 1)

}
