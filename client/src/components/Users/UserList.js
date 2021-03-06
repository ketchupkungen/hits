import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/user_actions.js';
import { Link } from 'react-router-dom';
import ImgFallback from 'react-img-fallback'
import userImagePlaceHolder from '../../assets/images/profile-placeholder2.png'
import { Media } from 'mdbreact';

class UserContainer extends Component {

	componentWillMount(){
		this.props.dispatch(getUsers())
	}

	showUsers = (user) =>(
		user.users ?
			user.users.map(item => (
				<div key={item._id} style={{marginBottom:'20px'}}>
					<Media>
						<Link className="mr-3" to={`/users`}>
							<ImgFallback
								className="profile-img-chat"
								src={item.image}
								alt="user-img"
								fallback={userImagePlaceHolder}
							>
							</ImgFallback>
						</Link>
						<Media body>
							<Media heading>
								{item.name} {item.lastname}
							</Media>
						</Media>
					</Media>
				</div>
			))
		:null
	)


	render() {
		let user = this.props.user;
		return (
			<div className="container profile-page">
				{this.showUsers(user)}
			</div>
		);
	}
}
function mapStateToProps(state){
	return{
		user:state.user
	}
}

export default connect(mapStateToProps)(UserContainer);