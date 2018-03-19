import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import MessageList from './messages/MessageList';
//import MessageComposer from './messages/MessageComposer';
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
	      <Link to="/chat/new" className="btn-floating btn-large red">
			    <Button>Add message</Button>
			  </Link>
		</div>
	);
};

export default Dashboard;