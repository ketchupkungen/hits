import React from 'react';
import UserContainerAdmin from '../../containers/Admin/user_container_admin'
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
            <UserContainerAdmin/>
        </div>
    );
};

export default UsersAdmin;