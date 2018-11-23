import React, { Component } from 'react';
import './App.scss';

import Dashboard from './layouts/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <Dashboard>
        <header>
          <h1>Home</h1>
        </header>
        <div>
          <div className = "text-center">
            <div className = "activeVisitorsValue">30</div>
            <div className = "activeVisitorsLabel">Active Visitors</div>
          </div>
          <form>
            <label>Direct</label>&nbsp;&nbsp;<progress value="22" max="100"></progress>
            <label>Direct</label>&nbsp;&nbsp;<progress value="22" max="100"></progress>
            <label>Direct</label>&nbsp;&nbsp;<progress value="22" max="100"></progress>
          </form>
        </div>
      </Dashboard>
    );
  }
}

export default App;
