import React, { Component } from 'react';
import './App.css';
import DogsListContainer from './components/DogsListContainer';
import DogBreedsImagesContainer from './components/DogBreedsImagesContainer';
import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/" component={DogsListContainer} />
          <Route path="/dog-breeds/:breed" component={DogBreedsImagesContainer} />
        </main>
      </div>
    );
  }
}

export default App;
