import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
						<label htmlFor="slide" className="toggle"><i className="fa fa-bars"></i></label>
						<nav className="sidebar">
							<Media>
					      <Media left href="/profile">
					        <Media className="profile-img-chat" object src={profile} alt="Placeholder"/>
					      </Media>
					      <Media body>
					          <p>Bob</p>
					          <p>Bobsson</p>
					          <label htmlFor="slide" className="toggleBack"><i className="fa fa-times"></i></label>
					      </Media>
					    </Media>
					    <hr/>

							<Link className="sidebar-icon-btn" to="/chat"><i className="fa fa-home"></i></Link>
							<Link className="sidebar-icon-btn" to="/chat"><i className="fa fa-users"></i></Link>
							<Link className="sidebar-icon-btn" to="/chat"><i className="fa fa-bars"></i></Link>
							<Link className="sidebar-icon-btn" to="/chat"><i className="fa fa-wrench"></i></Link>

					    <hr/>

					    <Link className="sidebar-icon-btn" to="/chat"><i className="fa fa-comment"></i> Private message</Link>

					    <hr/>

							<ul>
								<li><p><Link to="/profile">Profile page</Link></p></li>
								<li><p><Link to="/chat">Options</Link></p></li>
								<li><p><Link to="/chat">Notifications</Link></p></li>
								<li><p><Link to="/chat">Help & feedback</Link></p></li>
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