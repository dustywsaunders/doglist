import React, { Component } from 'react';
import './App.css';
import DogsList from './components/DogList';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          
        </header> */}
        <main>
          <DogsList />
        </main>
      </div>
    );
  }
}

export default App;
