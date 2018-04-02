import { combineReducers } from 'redux';
// reducer is the name of the function
// as it is importet from the redux-form library
// Renamed to reduxForm, to make it less confusing
import { reducer as reduxForm } from 'redux-form';

import auth from './auth';
import messages from './messages';

export default combineReducers({
	// survey, redux form
	form: reduxForm,

	// authentication
	auth: auth,
	// survey list
	messages: messages
});