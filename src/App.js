import React, { Component } from 'react';
import logo from './logo.svg';
import Storage from './components/Storage'
import Container from './components/Container'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

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

  saveGiphy = (url) => {
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
        return <Container saveGiphy={this.saveGiphy} saveJoke={this.saveJoke} showSavedItems={this.showSavedItems}/>
      default:
        console.log("Heyyyyyy")
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          
          <h2>Chuck Norris Jokes'n Giphs</h2>
        </div>
        <p className="App-intro">
          
        </p>
        
        <Router>
          <div>
            <Route exact path="/random" render={() => <Container jokes={this.state.jokes} giphys={this.state.giphys}/>}/>
            <Route exact path="/savedItems" render={() => <Storage jokes={this.state.jokes} giphys={this.state.giphys}/>}/>
          </div>
        </Router>
        
        
        {this.toggleDisplay()}


      </div>
    );
  }
}

export default App;
