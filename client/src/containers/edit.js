import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMessage, updateMessage, clearMessage, deleteMessage } from '../actions'
import { Button } from 'mdbreact'

class EditMessage extends PureComponent {

    state = {
        formdata:{
            _id:this.props.match.params.id,
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


    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(updateMessage(this.state.formdata))
    }

    deleteMessage = () => {
        this.props.dispatch(deleteMessage(this.props.match.params.id))
    }
    redirectUser = () => {
        setTimeout(()=>{
            this.props.history.push('/home')
        },1000)
    }


    componentWillMount(){
        this.props.dispatch(getMessage(this.props.match.params.id))
    }

    componentWillReceiveProps(nextProps){
        let message = nextProps.messages.message;
        this.setState({
            formdata:{
                _id:message._id,
                text:message.text
            }
        })
    }

    componentWillUnmount(){
        this.props.dispatch(clearMessage())
    }

    render() {
        let messages = this.props.messages;
        return (
            <div>
                {
                    messages.updateMessage ? 
                        <div>
                            message updated , <Link to={`/messages/${messages.message._id}`}>
                                Click here to see your message
                            </Link>
                        </div>
                    :null
                }
                {
                    messages.postDeleted ? 
                        <div>
                            Message Deleted
                            {this.redirectUser()}
                        </div>
                    :null
                }

                <form onSubmit={this.submitForm}>
                    <h2>Edit message</h2>

                    <div>
                        <input
                            type="text"
                            placeholder="Enter message"
                            value={this.state.formdata.text}
                            onChange={(event)=>this.handleInput(event,'text')}
                        />
                    </div>

                    <Button type="submit">Edit</Button>
                    <div>
                        <Button
                            onClick={this.deleteMessage}
                        >
                            Delete
                        </Button>
                    </div>
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

export default connect(mapStateToProps)(EditMessage)