// SurveyField contains logic to render a single
// label and text input
import React from 'react';
import { Input } from 'reactstrap';

export default ({ input, label, meta: { error, touched } }) => {
	//console.log(props);
	//console.log(meta);
	return (
		<div>
			<label>{label}</label>
			<Input style={{ marginBottom: '5px' }} {...input} />
		{/* if touched(next button) when field is
		empty, throw error*/}
			<div style={{color: 'red' ,marginBottom: '20px' }}>{touched && error}</div>
		</div>
	);
};