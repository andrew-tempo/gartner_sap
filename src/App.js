import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import PageContainer from './components/PageContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <PageContainer />
      </div>
    );
  }
}

export default App;
