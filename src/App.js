import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PhotographerList from './CardList/photographerList';
import albumList from './CardList/albumList';
import photoList from './CardList/photoList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      photographers: [],
      searchField: ''
    }
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={PhotographerList} />
            <Route path='/albums/photographer/:id' component={albumList} />
            <Route path='/photos/album/:id' component={photoList} />
          </Switch>
        </Router>
        {/* <CardList photographers={this.state.photographers} /> */}
      </div>
    )
  }
}

export default App;