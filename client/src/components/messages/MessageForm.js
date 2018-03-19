// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
// Field is for any traditional html text-field,
// text-inputs, dropdowns etc
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import MessageField from './MessageField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class MessageForm extends Component {
	renderFields() {
		// Assigns label and name to the following fields
		return _.map(formFields, ({ label, name}) => {
			return (
				<Field
					key={name}
					component={MessageField}
					type="text"
					label={label}
					name={name}
				/>
			);
		});
	}
	render() {
		return(
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onMessageSubmit)}>
					{this.renderFields()}
					<Link to="/chat">
						<Button>Cancel</Button>
					</Link>

					<Button type="submit">Next
					</Button>
				</form>
			</div>
		);
	}
}

function validate (values) {
	// takes a singel argument of values
	// and the values thing is the object
	// containing all the different values coming
	// of of the form
	const errors = {};

	// Validates emails
	errors.recipients = validateEmails(values.recipients || '');

	// Asignes error to empty strings on
	// the different fields
	_.each(formFields, ({ name, noValueError }) => {
		if(!values[name]) {
			errors[name] = noValueError;
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: 'messageForm',
	// text in input fields does not
	// get dumped on viewchange
	destroyOnUnmount: false
})(MessageForm);