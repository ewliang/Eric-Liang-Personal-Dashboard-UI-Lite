import React, { Component } from 'react';
import './App.scss';
import Chart from 'chart.js';

import Dashboard from './layouts/Dashboard/Dashboard';

class App extends Component {
  componentDidMount() {
    var visitorsChartContext = document.getElementById('visitorsChart').getContext('2d');
    var chart = new Chart(visitorsChartContext, {
      type: 'line',
      data: {
        labels: [0, 1, 2, 3],
        datasets: [{
          label: 'My Dataset',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgb(255, 99, 132)',
          data: [5, 1, 3, 0]
        }]
      },
      options: {}
    });
  }

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
          <br/>
          <table>
            <tr><td>Desktop</td><td><progress value="50" max="100"></progress></td></tr>
            <tr><td>Mobile</td><td><progress value="30" max="100"></progress></td></tr>
            <tr><td>Tablet</td><td><progress value="20" max="100"></progress></td></tr>
          </table>
        </div>
        <canvas id = "visitorsChart">
        </canvas>
        <table>
          <tr>
            <td>ID</td>
            <td>URL</td>
            <td>Views</td>
            <td>Bounce Rate</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </Dashboard>
    );
  }
}

export default App;
