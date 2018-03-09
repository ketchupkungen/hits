import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'reactstrap';
import SurveyList from './surveys/SurveyList';
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
				<SurveyList />
			</ul>
	      <Input className="messageComposer" placeholder="Send Message" />
		</div>
	);
};

export default Dashboard;