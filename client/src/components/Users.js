import React from 'react';
import UserContainer from '../containers/user_container'
import Sidebar from './Sidebar'
import logo from '../logo.svg'

const Users = () => {
    return (
        <div>
    		<div className="header">
    			<h5>
    				<img src={logo} className="logo" alt="logo"/>
    				Users 
    			</h5>
    		</div>
    		<Sidebar/>
            <UserContainer/>
        </div>
    );
};

export default Users;