import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { Container } from 'reactstrap';

import Landing from './Landing'
import MessageComposer from './messages/MessageComposer';
import Dashboard from './Dashboard';
import Profile from './Profile';


import '../css/style.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
		return (
			<div>
				<BrowserRouter>
					<Container className="container-fluid" fluid>
						<Route exact path="/" component={Landing} />
						<Route exact path="/chat" component={Dashboard}/>
						<Route exact path="/chat/new" component={MessageComposer} />
						<Route exact path="/profile" component={Profile} />
					</Container>
				</BrowserRouter>
			</div>
		)
	}
}

export default connect(null, actions)(App);