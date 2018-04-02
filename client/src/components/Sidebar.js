import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Transition from 'react-transition-group/Transition';
import { Button } from 'mdbreact';
//import SidebarUser from './SidebarUser';


class Sidebar extends Component {
	constructor(props){
		super(props);

		this.state = {
			isOpen: false
		};
	}

  state = {
  	show:true
  }

  toggleSidebar = () => {
  	this.setState({
  		show:!this.state.show ? true:false
  	})
  }

  toggle

	render() {
		return (
			<div>

				<div onClick={this.toggleSidebar} className="toggle">
					<i className="fa fa-bars"></i>
				</div>
				<Transition
					in={this.state.show}
					timeout={5}
				>
				{ state =>
					
					<div className="sidebar-box">
						<nav className={`sidebar sidebar-${state}`}>
							{/*Issue connecting user to sidebar*/}
							{/*<SidebarUser/>

								<hr/>
							*/}

					    

							<Link to="/home"><Button className="sidebar-icon-btn" color="dark-green"><i className="fa fa-home"></i></Button></Link>
							<Link to="/users"><Button className="sidebar-icon-btn" color="dark-green"><i className="fa fa-users"></i></Button></Link>
							<Link to="/home"><Button className="sidebar-icon-btn" color="dark-green"><i className="fa fa-bars"></i></Button></Link>
							<Link to="/users-admin"><Button className="sidebar-icon-btn" color="dark-green"><i className="fa fa-wrench"></i></Button></Link>

					    <hr/>

					    <Link to="/home"><Button className="sidebar-send-btn" color="dark-green"><i className="fa fa-comment"></i> Private message</Button></Link>

					    <hr/>

							<ul>
								<li><p><Link to="/profile">Profile page</Link></p></li>
								<li><p><Link to="/users">Users</Link></p></li>
								<li><p><Link to="/users-admin">Users admin</Link></p></li>
								<li><p><Link to="/home">Options</Link></p></li>
								<li><p><Link to="/home">Notifications</Link></p></li>
								<li><p><Link to="/home">Help & feedback</Link></p></li>
								<li><p><Link to="/logout">Logout</Link></p></li>
							</ul>
						</nav>
						<div
							className={`screenHide screenHide-${state}`}
							onClick={this.toggleSidebar}
						>
							
						</div>
					</div>
	    	}
	    	</Transition>
      </div>
		)
	}
}

export default Sidebar;