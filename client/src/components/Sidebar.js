import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import profile from '../images/profile-placeholder.png';
import { Media } from 'reactstrap';

class Sidebar extends Component {
	constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

	render() {
		return (
			<div>

				<div className="sidebar-frame">
					<input type="checkbox" id="slide" name="" value="" />
					<div className="container">
						<label htmlFor="slide" className="toggle">☰</label>
						<nav className="sidebar">
							<Media>
					      <Media left href="#">
					        <Media object src={profile} alt="Placeholder" height="50px" width="50px"/>
					      </Media>
					      <Media body>
					        <Media heading>
					          <p>Username</p>
					        </Media>
					        <p>Bob Bobsson</p>
					      </Media>
					    </Media>
					    <hr/>

					    <button className="sidebar-icon-btn"><i className="fa fa-users"></i></button>
							<button className="sidebar-icon-btn"><i className="fa fa-bars"></i></button>
							<button className="sidebar-icon-btn"><i className="fa fa-bars"></i></button>
							<button className="sidebar-icon-btn"><i className="fa fa-bars"></i></button>
							<button className="sidebar-icon-btn"><i className="fa fa-wrench"></i></button>

					    <hr/>

							<button className="sidebar-send-btn">Private message</button>
							<ul>
								<li><p><a href="/">Profile page</a></p></li>
								<li><p><a href="/">Options</a></p></li>
								<li><p><a href="/">Notifications</a></p></li>
								<li><p><a href="/">Help & feedback</a></p></li>
								<li><p><a href="/api/logout">Logout</a></p></li>
							</ul>
						</nav>
					</div>
	      </div>

      </div>
		)
	}
}

export default Sidebar;