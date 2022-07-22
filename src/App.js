import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="Star Star1" />
        <div className="Star Star2" />
        <div className="Star Star3" />
        <div className="Star Star4" />
        <div className="Star Star5" />
        <div className="Star Star6" />
        <div className="Star Star7" />
        <div className="Star Star8" />
        <Header />
        <div className="App">
          <SolarSystem />
          <Missions />
        </div>
      </>
    );
  }
}

export default App;
