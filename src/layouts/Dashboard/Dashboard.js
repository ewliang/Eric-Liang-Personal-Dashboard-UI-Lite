import React, { Component } from 'react';
import './Dashboard.scss';

// Components
import MainNav from '../../components/Sidebar/MainNav/MainNav';

class Dashboard extends Component {
  render() {
    return (
      <div className = "main-dashboard">
        <MainNav></MainNav>
        <main>
          { this.props.children }
        </main>
      </div>
    );
  }
}

export default Dashboard;
