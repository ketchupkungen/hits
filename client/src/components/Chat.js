import React,{Component} from 'react';
import { connect } from 'react-redux';
import { addMessage, clearNewMessage, getMessages } from '../actions/message_actions.js'
import MessageList from './Messages/MessageList'
import Sidebar from './Sidebar'
import logo from '../assets/images/logo.svg'

class Chat extends Component {

	state = {
		formdata:{
		 text:''
		}
	}

	handleInput = (event,text) => {
		const newFormdata = {
			...this.state.formdata
		}
		newFormdata[text] = event.target.value

		this.setState({
			formdata:newFormdata
		})
	}

	submitForm = (e) => {
		e.preventDefault();
		this.props.dispatch(addMessage({
			...this.state.formdata,
			ownerId:this.props.user.login.id
		}))
	}

	componentDidMount(){
		this.startPolling();
	}

	startPolling = () => {
	  setInterval(() => {
	    this.props.dispatch(getMessages());
	  }, 1500);
	}

	componentWillUnmount(){
		this.props.dispatch(clearNewMessage())
	}

	render() {
		return (
			<div>
				<div className="header">
					<img src={logo} className="logo" alt="logo"/>
					General
				</div>
				<Sidebar/>
				<MessageList/>
				<form onSubmit={this.submitForm}>
					<input
						type="text"
						placeholder="Enter a message"
						className="messageComposer"
						ref="messageComposer"
						name="message"
						autoFocus="true"
						autoComplete="off"
						value={this.state.formdata.text}
						onChange={(event)=>this.handleInput(event,'text')}
					/>
				</form>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		messages:state.messages
	}
}

export default connect(mapStateToProps)(Chat)
