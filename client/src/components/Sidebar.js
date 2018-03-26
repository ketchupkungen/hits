import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/actions';
import { Link } from 'react-router-dom';
//import profile from 'http://s3-ap-southeast-1.amazonaws.com/hinrichfoundation-images/wp-content/uploads/2017/05/ds-placeholder-person.png';
import { Media } from 'reactstrap';
import Transition from 'react-transition-group/Transition';

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

  componentDidMount() {
		this.props.fetchUser();
	}

	/*renderUser() {
		return this.props.users.map(user => {
			return (
				<Media key={user._id}>
		      <Media left href="/profile">
		        <img className="profile-img-chat" src={user.imageUrl} alt="thumbnail"/>
						{/*<img className="profile-img-chat" src="http://s3-ap-southeast-1.amazonaws.com/hinrichfoundation-images/wp-content/uploads/2017/05/ds-placeholder-person.png" alt="thumbnail"/>
		      </Media>
		      <Media body>
		          <p>{user.username}</p>
		          <label htmlFor="slide" className="toggleBack"><i className="fa fa-times"></i></label>
		      </Media>
		    </Media>
			)
		})
	}*/

// Sidebar behavior
	state = {
		show:true
	}

	toggleSidebar = () => {
		this.setState({
			show:!this.state.show ? true:false
		})
	}

	hideSidebar = () => {
		this.setState({
			show:!this.state
		})
	}
/// Sidebar behavior

	render() {
		return (
			<div>
				<div onClick={this.toggleSidebar} className="toggle"><i className="fa fa-bars"></i>
				</div>
	      <Transition
	      	in={this.state.show}
	      	timeout={5}
	      >

				{ state =>
					<div className="sidebar-box">
						<nav className={`sidebar sidebar-${state}`}>
							<Media>
					      <Media left href="/profile">
									<img className="profile-img-chat" src="http://s3-ap-southeast-1.amazonaws.com/hinrichfoundation-images/wp-content/uploads/2017/05/ds-placeholder-person.png" alt="thumbnail"/>
					      </Media>
					      <Media body>
				          <p>Bob Bobsson</p>
					      </Media>
					    </Media>
							{/*{ this.renderUser() }*/}
					    <hr/>

							<Link className="sidebar-icon-btn" to="/chat"><i className="fa fa-home"></i></Link>
							<Link className="sidebar-icon-btn" to="/chat"><i className="fa fa-users"></i></Link>
							<Link className="sidebar-icon-btn" to="/chat"><i className="fa fa-bars"></i></Link>
							<Link className="sidebar-icon-btn" to="/chat"><i className="fa fa-wrench"></i></Link>

					    <hr/>

					    <Link className="sidebar-send-btn" to="/chat"><i className="fa fa-comment"></i> Private message
					    </Link>
					    <hr/>

							<ul>
								<li><p><Link to="/profile">Profile page</Link></p></li>
								<li><p><Link to="/chat">Options</Link></p></li>
								<li><p><Link to="/chat">Notifications</Link></p></li>
								<li><p><Link to="/chat">Help & feedback</Link></p></li>
								<li><p><a href="/api/logout">Logout</a></p></li>
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

function mapStateToProps({ users }) {
	return { users };
}

export default connect(mapStateToProps, { fetchUser })(Sidebar);