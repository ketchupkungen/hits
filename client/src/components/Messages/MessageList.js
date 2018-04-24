import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getMessages } from '../../actions/message_actions.js';
//import ScrollEvent from 'react-onscroll';
import {Media,Button} from 'mdbreact';
import moment from 'moment-js';
import ImgFallback from 'react-img-fallback'
import userImagePlaceHolder from '../../assets/images/profile-placeholder2.png'


class MessageList extends Component {
	/*constructor(props) {
		super(props);

		this.handleScrollCallback = this.handleScrollCallback.bind(this);
	}*/

	componentWillMount(){
		this.props.dispatch(getMessages())
	}

	// How much to render on scroll. Also in what order.
	// NEED TO FIX! ATM it renders more messages both on scoll up and down

	// Also messages get rendered in wrong direction.
	/*handleScrollCallback = () => {
		let count = this.props.messages.list.length;
		this.props.dispatch(getMessages(20,count,'asc',this.props.messages.list))
	}*/

	scrollToBottom = () => {
	  this.messagesEnd.scrollIntoView({ behavior: "smooth" });
	}

	componentDidMount() {
	  this.scrollToBottom();
	}

	componentDidUpdate() {
	  this.scrollToBottom();
	}

	renderMessages = (messages) => (
		messages.list ?
			messages.list.map( item => (
				<div key={item._id}>
					<Media>
						<Link className="mr-3" to={`/chat/${item._id}`}>
							<ImgFallback
								className="profile-img-chat"
								//src={item.image}
								alt="user-img"
								fallback={userImagePlaceHolder}
							>
							</ImgFallback>
						</Link>
						<Media body>
							{/*<Link className="mr-3" to={`/users/${item._id}`}>
								{item.name} {item.lastname}
							</Link>*/}
							<Link to={`/chat/${item._id}`}>
								<b className="mess-name">
									Bob Bobssson
								</b>
							</Link>

							<i className="mess-time">
								{moment(item.createdAt).format("YYYY-MM-DD HH:mm")}
							</i>
							<Link to={`/chat/edit-message/${item._id}`}>
								<Button color="grey" className="mess-edit">
									<i className="fa fa-ellipsis-h"></i>
								</Button>
							</Link>
							<div className='mess-text'>
								<p className='mess-text'>
									{item.text}
								</p>
							</div>
						</Media>
					</Media>
					<hr/>
				</div>
			))
		:null
	)

	render() {
		return (
			<div>
				{/*<ScrollEvent handleScrollCallback={this.handleScrollCallback} />*/}
				<div className="main">
					{this.renderMessages(this.props.messages)}
				</div>
				<div style={{ float:"left", clear: "both" }}
          ref={(el) => { this.messagesEnd = el; }}>
      	</div>
			</div>
		);
	}
}

function mapStateToProps({messages}){
	return {messages}
}

export default connect(mapStateToProps)(MessageList)