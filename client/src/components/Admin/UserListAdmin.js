import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers } from '../../actions/user_actions.js';

//import { ListGroup, ListGroupItem, Button } from 'mdbreact';
//import ImgFallback from 'react-img-fallback'

class UserContainerAdmin extends Component {

	/*deletePost = () => {
			this.props.dispatch(deleteUser(this.props.match.params.id))
	}*/

	componentWillMount(){
			this.props.dispatch(getUsers())
	}

	showUsers = (user) =>(
		user.users ?
			user.users.map(item => (
				<tr key={item._id}>
					<td><p>{item.name} {item.lastname}</p></td>
					<td><p>{item.email}</p></td>
					<td><p>0</p></td>
					<td><p>no</p></td>
					<td><p>user</p></td>
					<td><Link to="/users-admin"><i className="fas fa-edit" color="green"></i></Link></td>
				</tr>
			))
		:null
	)


	render() {
		let user = this.props.user;
		return (
			<div className="profile-page">
				<table className="table">
					<thead>
						<tr>
							<th><strong>NAME</strong></th>
							<th><strong>EMAIL</strong></th>
							<th><strong>WARNINGS</strong></th>
							<th><strong>BANNED</strong></th>
							<th><strong>ROLE</strong></th>
							<th><strong>EDIT</strong></th>
						</tr>
					</thead>
					<tbody>
						{this.showUsers(user)}
					</tbody>
				</table>
			</div>
		);
	}
}
function mapStateToProps (state) {
	return{
		user:state.user
	}
}

export default connect(mapStateToProps)(UserContainerAdmin)
