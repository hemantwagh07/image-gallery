import React, { Component } from 'react'
import axios from 'axios';
import './App.css';
import CardList from './CardList/cardList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      photographers: [],
      searchField: ''
    }
  }
  componentDidMount = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // handle success
        //console.log(response.data);
        this.setState({ photographers: response.data });
        //this.getproducts('', response.data[0].id)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  render() {
    console.log(this.state.photographers);
    return (
      <div><CardList photographers={this.state.photographers} /></div>
    )
  }
}

export default App;