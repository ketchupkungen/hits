import React, { Component } from 'react';
import moment from 'moment';
import { Input } from 'reactstrap';
import uuid from 'uuid/v1';

import '../css/Chat.scss';

// Message input (The field where you type your message)
export default class MessageComposer extends Component {


  render() {
    return (
      <div>
      <div className='messageComposer'>
        <Input
            type="text"
            name="message"
            ref="messageComposer"
            autoFocus="true"
            placeholder="Send a message?"
          />
      </div>
      </div>
    );
  }
}
