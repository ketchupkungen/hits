import React from 'react';
import UserContainer from '../containers/user_container'
import Sidebar from './Sidebar'
import logo from '../logo.svg'

const Users = () => {
  return (
    <div>
		<div className="header">
			<img src={logo} className="logo" alt="logo"/>
			Users
		</div>
		<Sidebar/>
      <UserContainer/>
    </div>
  );
};

export default Users;