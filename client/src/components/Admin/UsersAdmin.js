import React from 'react';
import UserListAdmin from './UserListAdmin'
import Sidebar from '../Sidebar'
import logo from '../../logo.svg'

const UsersAdmin = () => {
    return (
        <div>
    		<div className="header">
    			<h5>
    				<img src={logo} className="logo" alt="logo"/>
    				Users
    			</h5>
    		</div>
    		<Sidebar/>
            <UserListAdmin/>
        </div>
    );
};

export default UsersAdmin;