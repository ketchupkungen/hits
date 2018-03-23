import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages,fetchUser } from '../../actions/actions';
import { Button, Media } from 'reactstrap';

class MessageList extends Component {
	constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

	componentDidMount() {
		this.props.fetchMessages();
		this.props.fetchUser();
	}

	renderMessages() {
		// Shows the latest on the bottom
		// Temporarily added the reverse, showing the latest on top.
		// Since autoscroll to bottom is not in place yet
		return this.props.messages.reverse().map((message, submitMessage, history) => {
			return (
					<li className="messageArea" key={message._id}>
		        <Media>
		          <Media left>
		            <img className="profile-img-chat" src="http://s3-ap-southeast-1.amazonaws.com/hinrichfoundation-images/wp-content/uploads/2017/05/ds-placeholder-person.png" alt="thumbnail"/>

		          </Media>
		          <Media body>
		            <Media heading>
		            	<Button className="mess-edit">
									  <i className="fa fa-ellipsis-h"></i>
									</Button>
		              <a href="/profile">
		              <b className="mess-name">
		                {message._user}
		              </b>
		              </a>
		              <i className="mess-time">
		                { new Date(message.dateSent).toLocaleString() }
		              </i>

		            </Media>
		            <p className='mess-text'>
		              {message.text}test
		            </p>
		            <hr/>
		          </Media>
		        </Media>
		      </li>
			)
		})
	}

	renderMessages2() {
		// Temporary: Latest is on top
		return this.props.users.reverse().map((user, history) => {
			return (
					<li className="messageArea" key={user._id}>
		        <Media>
		          <Media left>
		            <img className="profile-img-chat" src="https://react-bootstrap.github.io/thumbnail.png" alt="thumbnail" />
		          </Media>
		          <Media body>
		            <Media heading>
		            	<Button className="mess-edit">
									  <i className="fa fa-ellipsis-h"></i>
									</Button>
		              <a href="/profile">
		              <b className="mess-name">
		                {user.username}
		              </b>
		              </a>


		            </Media>

		          </Media>
		        </Media>
		      </li>
			)
		})
	}


	render() {
		return (
			<div className="main">
				{
					this.renderMessages() }
      </div>
		)
	}
}

function mapStateToProps({ messages,users }) {
	return { messages,users };
}

export default connect(mapStateToProps, { fetchMessages,fetchUser })(MessageList);