import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addMessage, clearNewMessage } from '../actions'
import { Button } from 'mdbreact';
import MessageContainer from '../containers/message_container'

class MessageComposer extends Component {

    constructor(props){
        super(props);
    }

    state = {
        formdata:{
            text:''
        }
    }


    handleInput = (event,text) => {
        const newFormdata = {
            ...this.state.formdata
        }
        newFormdata[text] = event.target.value

        this.setState({
            formdata:newFormdata
        })
    }

    showNewMessage = (message) => (
        message.post ?
            <div className="conf_link">
                Cool !! <Link to={`/messages/${message.messageId}`}>
                    Click the link to see the post
                </Link>
            </div>
        :null
    )

    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(addMessage({
            ...this.state.formdata,
            ownerId:this.props.user.login.id
        }))
    }

    componentWillUnmount(){
        this.props.dispatch(clearNewMessage())
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>

                    <div>
                        <input
                            type="text"
                            placeholder="Enter message"
                            className="messageComposer"
                            value={this.state.formdata.text}
                            onChange={(event)=>this.handleInput(event,'text')}
                        />
                    </div>

                    <Button 
                        color="dark-green" 
                        type="submit"
                        style={{ bottom: '11px', right: '10px', position: 'fixed'}}
                    >
                        Add message
                    </Button>
                    {
                        this.props.messages.newmessage ? 
                            this.showNewMessage(this.props.messages.newmessage)
                        :null
                    }
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        messages:state.messages
    }
}

export default connect(mapStateToProps)(MessageComposer)