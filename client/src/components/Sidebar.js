import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Transition from 'react-transition-group/Transition';
import { Button } from 'mdbreact';
import logo from '../assets/images/logo.svg'
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

	render() {
		return (
			<div>

				<div onClick={this.toggleSidebar} className="toggle">
					<i className="fa fa-bars"></i>
				</div>
				<Transition
					in={this.state.show}
					timeout={0}
				>
				{ state =>

					<div className="sidebar-box">
						<nav className={`sidebar sidebar-${state}`}>
							{/*Issue connecting user to sidebar*/}
							{/*<SidebarUser/>

								<hr/>
							*/}



							<Link to="/chat"><Button className="sidebar-icon-btn" color="dark-green"><i className="fa fa-home"></i></Button></Link>
							<Link to="/users"><Button className="sidebar-icon-btn" color="dark-green"><i className="fa fa-users"></i></Button></Link>
							<Link to="/chat"><Button className="sidebar-icon-btn" color="dark-green"><i className="fa fa-bars"></i></Button></Link>
							<Link to="/users-admin"><Button className="sidebar-icon-btn" color="dark-green"><i className="fa fa-wrench"></i></Button></Link>

					    <hr/>

					    <Link to="/chat"><Button className="sidebar-send-btn" color="dark-green"><i className="fa fa-comment"></i> Private message</Button></Link>

					    <hr/>

							<ul>
								<li><p><Link to="/profile">Profile page</Link></p></li>
								<li><p><Link to="/users">Users</Link></p></li>
								<li><p><Link to="/users-admin">Users admin</Link></p></li>
								<li><p><Link to="/chat">Options</Link></p></li>
								<li><p><Link to="/chat">Notifications</Link></p></li>
								<li><p><Link to="/chat">Help & feedback</Link></p></li>
								<li><p><Link to="/logout">Logout</Link></p></li>
							</ul>

							<hr/>

							<ul className="list-unstyled list-inline sidebar-links">
								<li className="list-inline-item">
									<a href="http://www.humanit.se">
										<img className="sidebar-img-link" src={logo} alt="logo"/>
									</a>
								</li>
								<li className="list-inline-item">
									<a
										href="https://www.facebook.com/humanit.se/?hc_ref=ARRvb_tANI-PaVFpIHa0VClrvO5nG-Wa7PSpJCqkAA7Tn3Og8X7BjWsEAd8X-tlU_Es&fref=nf"
										className="btn-floating btn-sm btn-tw  footer-link"
									>
										<i className="fab fa-facebook-f fb-link"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a
										href="https://www.linkedin.com/company/human-it-sverige/"
										className="btn-floating btn-sm btn-li footer-link"
									>
										<i className="fab fa-linkedin-in li-link"></i>
									</a>
								</li>
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