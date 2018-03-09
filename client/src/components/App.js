import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Container } from 'reactstrap';


//import Header from './Header';
//import Footer from './Footer';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';


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
						{/*<Header/>*/}
						<Route exact path="/" component={Landing} />
						<Route exact path="/surveys" component={Dashboard} />
						<Route exact path="/surveys/new" component={SurveyNew} />
						{/*<Footer/>*/}
					</Container>
				</BrowserRouter>
			</div>
		)
	}
}

export default connect(null, actions)(App);