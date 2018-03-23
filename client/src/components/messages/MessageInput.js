import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { Input } from 'reactstrap'

class MessageInput extends Component {
	render(input) {
		return(
			<div>
				<form>
				  <Input
          	type="input"
          	className="messageComposer"
						placeholder="Send Message"
						//value={this.state.value}
						//onChange={this.handleChange}
						{...input}
					/>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'messages'
})(MessageInput);