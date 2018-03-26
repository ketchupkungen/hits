/*import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions/actions';
import { Button, Input } from 'reactstrap'


export default class MessageComposer extends Component {

  static propTypes = {
    activeChannel: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    socket: PropTypes.object.isRequired
  };
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: '',
      typing: false
    };
  }
  handleSubmit(event) {
    const { user, socket, activeChannel} = this.props;
    const text = event.target.value.trim();
    if (event.which === 13) {
      event.preventDefault();
      var newMessage = {
        channelID: this.props.activeChannel,
        text: text,
        user: user
      };
      socket.emit('new message', newMessage);
      socket.emit('stop typing', { user: user.username, channel: activeChannel });
      this.props.onSave(newMessage);
      this.setState({ text: '', typing: false });
    }
  }
  handleChange(event) {
    const { socket, user, activeChannel } = this.props;
    this.setState({ text: event.target.value });
    if (event.target.value.length > 0 && !this.state.typing) {
      socket.emit('typing', { user: user.username, channel: activeChannel });
      this.setState({ typing: true});
    }
    if (event.target.value.length === 0 && this.state.typing) {
      socket.emit('stop typing', { user: user.username, channel: activeChannel });
      this.setState({ typing: false});
    }
  }
  render() {
    return (
      <div style={{
        zIndex: '52',
        left: '21.1rem',
        right: '1rem',
        width: '100%',
        flexShrink: '0',
        order: '2',
        marginTop: '0.5em'
      }}>
        <Input
          className="messageComposer"
          placeholder="Send Message"
          type="textarea"
          name="message"
          ref="messageComposer"
          autoFocus="true"
          value={this.state.text}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
        />
      </div>
    );
  }
}*/


import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { Button, Input } from 'reactstrap'

const MessageComposer = ({formValues, submitMessage, history, pristine, submitting, input}) => {
  return (
    //<form onSubmit={() => submitMessage(formValues,history)}>
    <form>
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
          onClick={() => submitMessage(formValues, history)}
        	style={{ bottom: '25px', right: '10px', position: 'fixed'}}
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
    formValues: state.messages
  };
}

export default connect(mapStateToProps, actions)(MessageComposer);