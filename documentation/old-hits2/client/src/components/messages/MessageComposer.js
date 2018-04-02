// MessageComposer shows MessageForm and MessageFormReview

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions/actions';
import { Button, Input } from 'reactstrap'

const MessageComposer = props => {
  const { formValues, submitMessage, history, pristine, submitting, input} = props
  return (
    <form onSubmit={() => submitMessage(formValues,history)}>
      <div>
        <div>
          <Input
          	type="input"
          	className="messageComposer"
						placeholder="Send Message"
						//value={this.state.value}
						//onChange={this.handleChange}
						{...input}
					/>
        </div>
      </div>
      <div>
        <Button
        	type="submit"
        	style={{ bottom: '25px', right: '10px', position: 'fixed'}}
        	disabled={pristine || submitting}
        	>
          	Send
        </Button>
      </div>
    </form>
  )
}

function mapStateToProps(state) {
	//console.log(state);

	return {
		formValues: state.messages.values
	};
}

export default connect(mapStateToProps, actions)(MessageComposer);