import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../../actions/actions';
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
	}

	renderMessages() {
		// Shows the latest on the bottom
		return this.props.messages.map((message, submitMessage, history) => {
			return (
					<li className="messageArea" key={message._id}>
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
		                {message.user}
		              </b>
		              </a>
		              <i className="mess-time">
		                { new Date(message.dateSent).toLocaleDateString() }
		              </i>

		            </Media>
		            <p className='mess-text'>
		              {message.text}
		            </p>
		          </Media>
		        </Media>
		        <hr/>
		      </li>
			)
		})
	}


	render() {
		return (
			<div className="main">
				{ this.renderMessages() }
	      <li className="messageArea">
	        <Media>
	          <Media left>
	            {/*Temporary img*/}
	            <img className="profile-img-chat" src="https://react-bootstrap.github.io/thumbnail.png" alt="thumbnail" />
	          </Media>
	          <Media body>
	            <Media heading>
	            	<Button className="mess-edit">
								  <i className="fa fa-ellipsis-h"></i>
								</Button>
	              <a href="/profile">
	              <b className="mess-name">
	                Erik Olsson
	              </b>
	              </a>
	              <i className="mess-time">
	                2018-02-20 13:37
	              </i>

	            </Media>
	            <p className='mess-text'>
	              Bacon ipsum dolor amet ham hock pancetta andouille, kielbasa ribeye corned beef pork strip steak sirloin filet mignon. Kevin pork chicken doner drumstick. Frankfurter shank tri-tip prosciutto sirloin strip steak buffalo short loin boudin andouille landjaeger ham hock meatball burgdoggen. Ground round pork belly short loin capicola brisket.
	              Bacon ipsum dolor amet ham hock pancetta andouille, kielbasa ribeye corned beef pork strip steak sirloin filet mignon. Kevin pork chicken doner drumstick. Frankfurter shank tri-tip prosciutto sirloin strip steak buffalo short loin boudin andouille landjaeger ham hock meatball burgdoggen. Ground round pork belly short loin capicola brisket.
	            </p>
	          </Media>
	        </Media>
	        <hr/>
	      </li>
      </div>
		)
	}
}

function mapStateToProps({ messages }) {
	return { messages };
}

export default connect(mapStateToProps, { fetchMessages })(MessageList);