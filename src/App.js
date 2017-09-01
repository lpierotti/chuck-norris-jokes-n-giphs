import React, { Component } from 'react';
import logo from './logo.svg';
import Storage from './components/Storage'
import Container from './components/Container'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      jokes: [],
      giphys: [],
      display: "container"

    }
  }

  showSavedItems = () => {
    this.setState({
      display: "saved"
    })
    //routes to the storage bin
    //passes this.state.storedItems
  }

  saveJoke = (joke) => {
    console.log(joke)
    this.setState({
      jokes: [...this.state.jokes, joke]
    })
  }

  saveGiph = (url) => {
    this.setState({
      giphys: [...this.state.giphys, url]
    })
  }

  toggleDisplay = () => {
    console.log("t is for toggle")
    switch (this.state.display) {
      case "saved":
        return <Storage jokes={this.state.jokes} giphys={this.state.giphys} />
      case "container":
        return <Container saveJoke={this.saveJoke} showSavedItems={this.showSavedItems}/>
      default:
        console.log("Heyyyyyy")
    }
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {this.toggleDisplay()}


      </div>
    );
  }
}

export default App;
