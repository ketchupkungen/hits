import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getMessage, updateMessage, clearMessage, deleteMessage } from '../../actions/message_actions.js'
import { Button } from 'mdbreact'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar'
import logo from '../../assets/images/logo.svg'

class EditMessage extends PureComponent {

	state = {
		formdata:{
			_id:this.props.match.params.id,
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
		this.props.dispatch(updateMessage(this.state.formdata))
	}

	deleteMessage = () => {
		this.props.dispatch(deleteMessage(this.props.match.params.id))
	}
	redirectUser = () => {
		setTimeout(()=>{
			this.props.history.push('/chat')
		},1000)
	}


	componentWillMount(){
		this.props.dispatch(getMessage(this.props.match.params.id))
	}

	componentWillReceiveProps(nextProps){
		let message = nextProps.messages.message;
		this.setState({
			formdata:{
				_id:message._id,
				text:message.text
			}
		})
	}

	componentWillUnmount(){
		this.props.dispatch(clearMessage())
	}

	render() {
		let messages = this.props.messages;
		return (
			<div>
				<div className="header">
					<h5>
						<img src={logo} className="logo" alt="logo"/>
						Edit message
					</h5>
				</div>
				<Sidebar/>
				<div className="edit-message-screen">
					{
						messages.updateMessage ?
							<div>
								<p style={{color:'#59b300'}}>Message updated</p>
								{this.redirectUser()}
							</div>
						:null
					}
					{
						messages.postDeleted ?
							<div>
								<p style={{color:'#FF4500'}}>Message deleted</p>
								{this.redirectUser()}
							</div>
						:null
					}

					<form onSubmit={this.submitForm}>
						<textarea
							className="edit-message"
							placeholder="Enter message"
							value={this.state.formdata.text}
							onChange={(event)=>this.handleInput(event,'text')}
						/>

						<Link to={`/chat`}>
							<Button
								color="grey"
							>
								Back
							</Button>
						</Link>
						<Button
							type="submit"
							color="dark-green"
						>
							Edit
						</Button>
						<Button
							onClick={this.deleteMessage}
							color="red"
						>
							Delete
						</Button>
					</form>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		messages:state.messages
	}
}

export default connect(mapStateToProps)(EditMessage)
