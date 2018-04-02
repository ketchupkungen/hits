import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getMessageWithSender, clearMessageWithSender } from '../../actions';
import { connect } from 'react-redux';
import { Media,Button } from 'mdbreact';
import Sidebar from '../Sidebar'
import logo from '../../logo.svg'

class MessageView extends Component {

    componentWillMount(){
        this.props.dispatch(getMessageWithSender(this.props.match.params.id))
    }

    componentWillUnmount(){
        this.props.dispatch(clearMessageWithSender())
    }

    renderMessage = (messages) => (
        messages.message ? 
        <div>
          <div className="header">
              <h5>
                  <img src={logo} className="logo" alt="logo"/>
                  {messages.sender.name} {messages.sender.lastname} 
              </h5>
          </div>
          <Sidebar/>
          <div className="main">
          <ul>
            <li className="messageArea">
                <Media>
                  <Media left>
                    <img className="profile-img" alt="profile-img" src={messages.sender.image}/>

                  </Media>
                  <Media body>
                    <Media heading>
                      <Link to={
                        `/edit-messages/${messages._id}`
                      }>
                    
                        <Button className="mess-edit">
                          <i className="fa fa-ellipsis-h"></i>
                        </Button>
                      </Link>
                      <a href="/profile">
                      <b className="mess-name">
                        {messages.sender.name} {messages.sender.lastname}
                      </b>
                      </a>
                      <i className="mess-time">
                        { new Date(messages.message.dateSent).toLocaleString() }
                      </i>

                    </Media>
                    <p className='mess-text'>
                      {messages.message.text}
                    </p>
                    <hr/>
                  </Media>
                </Media>
              </li>
            </ul>
          </div>
        </div>
        :null
    )

    render() {
        let messages = this.props.messages;
        return (
            <div>
                {this.renderMessage(messages)}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps)(MessageView)