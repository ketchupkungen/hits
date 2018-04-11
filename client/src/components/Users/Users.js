import React from 'react';
import UserList from './UserList'
import Sidebar from '../Sidebar'
import logo from '../../logo.svg'

const Users = () => {
  return (
    <div>
		<div className="header">
			<img src={logo} className="logo" alt="logo"/>
			Users
		</div>
		<Sidebar/>
      <UserList/>
    </div>
  );
};

export default Users;