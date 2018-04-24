import React from 'react';
import axios from 'axios';
import logo from '../assets/images/logo.svg'

const Logout = (props) => {
	let user = props.user.login;
	axios.get(`/api/logout`)
	.then(() =>{
		setTimeout(()=>{
			props.history.push('/')
		},1500)
	})

	return (
		<div className="theLoader">
			<h1 className="logout">
				See you soon, {user.name}!
				<img src={logo} className="logo" alt="logo"/>
			</h1>
		</div>
	);
};

export default Logout;