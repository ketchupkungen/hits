import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.scss';
import logo from '../logo.svg';


class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="marge navbary navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
			      <button className="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
			        <span className="navbar-toggler-icon"></span>
			      </button>
			      <div>

			      </div>
			      <Link className="navbar-brand mr-auto" to="/">
			      	<img src={logo} className="logo" alt='logo' />
			      </Link>

			      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
			        <ul className="navbar-nav mr-auto">
			          <li className="nav-item active">
			            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
			          </li>
			          <li className="nav-item">
			            <Link className="nav-link" to="/chat">Chat</Link>
			          </li>
			        </ul>
			        <ul className='navbar-nav ml-auto'>
			        	<li className="nav-item">
			            <Link className="nav-link" to="/login">Login/User</Link>
			          </li>
			          <li className="nav-item">
			            <Link className="nav-link" to="/profile">ProfilePage</Link>
			          </li>
			        </ul>
			      </div>
			    </nav>
		    </div>
		);
	}
}

export default Navbar;