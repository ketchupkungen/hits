// SurveyFormReview shows users their
// form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions/actions';
import { Button } from 'reactstrap';

const MessageFormReview = ({ onCancel, formValues, submitMessage, history }) => {
	const reviewFields = _.map(formFields, ({ name, label }) => {
		return (
			<div key={name}>
				<label>{label}</label>
				<div>
					{formValues[name]}
				</div>
			</div>
		);
	})


	return (
		<div>
			<h5>Please confirm your entries</h5>
			{reviewFields}
			<Button
				onClick={onCancel}
			>
				Back
			</Button>
			<Button
				onClick={() => submitMessage(formValues, history)}
				type="submit">
				Send Message
			</Button>
		</div>
	);
};

// from redux store
function mapStateToProps(state) {
	//console.log(state);

	return {
		formValues: state.form.messageForm.values
	};
}

export default connect(mapStateToProps, actions)(withRouter(MessageFormReview));