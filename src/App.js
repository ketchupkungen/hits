import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home.jsx';
import WelcomePage from './pages/WelcomePage.jsx';
import Chat from './pages/Chat.jsx';
import Login from './pages/Login.jsx';
import ProfilePage from './pages/ProfilePage.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/welcome' component={WelcomePage} />
            <Route exact path='/chat' component={Chat} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/profile' component={ProfilePage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;