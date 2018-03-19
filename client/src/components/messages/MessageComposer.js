// MessageComposer shows MessageForm and MessageFormReview

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import MessageForm from './MessageForm';
import MessageFormReview from './MessageFormReview';

class MessageComposer extends Component {
	state = { showFormReview: false };

	renderContent() {
		if (this.state.showFormReview){
			return <MessageFormReview
				onCancel={() => this.setState({ showFormReview: false })}
			/>;
		}

		// else
		return(
			<MessageForm
				onMessageSubmit={() => this.setState({ showFormReview: true})}
			/>
		);
	}

	render() {
		return(
			<div>
				{this.renderContent()}
			</div>
		);
	}
}

export default reduxForm({
	form: 'messageForm'
})(MessageComposer);













/*import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Input, Button } from 'reactstrap';
import * as actions from '../../actions';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';






const MessageComposer = ({ formValues, submitMessage, history }) => {
	render() {
		return(
			<div>
				<Input className="messageComposer" placeholder="Send Message" />
				<button
				onClick={() => submitMessage(formValues, history)}
				className="sucess"
				type="submit">
				Send Survey
			  <i className="material-icons right">Send</i>
			</button>
			</div>
		);
	}
}

export default MessageComposer;*/

