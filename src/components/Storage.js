import React from 'react';
import Joke from './Joke';
import Giphy from './Giphy'

class Storage extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			clickOptions: {
				delete: this.handleDelete
			}
		}

		// this.props = props
	}

	handleDelete = (event) => {
		switch (event.target.name) {
			case "giphy":
				this.handleDeleteGiphy(event.target.giphy)
				//should event.target.giphy be handled in handleDeleteGiphy? what bout losing event?
			break;
			case "joke":
				this.handleDeleteJoke(event.target.value)
			break;
			default:
				console.log("yoooo")
		}
	}

	handleDeleteGiphy = (url) => {
		this.props.deleteGiphy(url)

	}

	handleDeleteJoke = (joke) => {
		this.props.deleteJoke(joke)
	}

	render() {

		const jokes = this.props.jokes.map((joke, index) => <Joke key={index} joke={joke} clickOptions={this.state.clickOptions}/>)
		const giphs = this.props.giphys.map((giphy, index) => <Giphy key={index} giphy={giphy} clickOptions={this.state.clickOptions}/>)

		return (
			<div>
				{jokes}
				{giphs}
			</div>
		)
	}
}


export default Storage;
