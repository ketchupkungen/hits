import React from 'react';
import { Link } from 'react-router-dom';
import MessageList from './messages/MessageList';
import MessageComposer from './messages/MessageComposer';
import Sidebar from './Sidebar';
import logo from '../logo.svg';

const Dashboard = () => {
	return (
		<div>
			<div className="header">
				<h5>
					<Link className="mr-auto" to="/">
		      	<img src={logo} className="logo" alt='logo' />
		      </Link>
			  	General
			  </h5>
			</div>
			<Sidebar />
			<ul>
				<MessageList />
			</ul>
	      <MessageComposer />
		</div>
	);
};

export default Dashboard;