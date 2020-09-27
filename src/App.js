import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import photographerList from './Components/CardList/photographerList';
import photoList from './Components/CardList/photoList';
import albumList from './Components/CardList/albumList';


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
            <Route exact path='/image-gallery/' component={photographerList} />
            <Route path='/photographers/albums/:id' component={albumList} />
            <Route path='/albums/photos/:id' component={photoList} />
          </Switch>
        </Router>
        {/* <CardList photographers={this.state.photographers} /> */}
      </div>
    )
  }
}

export default App;