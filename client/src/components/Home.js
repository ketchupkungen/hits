import React,{Component} from 'react';
import { connect } from 'react-redux';
import { addMessage, clearNewMessage } from '../actions'
//import { Button } from 'mdbreact';
import MessageContainer from '../containers/message_container'
import Sidebar from './Sidebar'
import logo from '../logo.svg'

class Home extends Component {

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
                <div className="header">
                    <h5>
                        <img src={logo} className="logo" alt="logo"/>
                        General
                    </h5>
                </div>
                <Sidebar/>
                <MessageContainer/>
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

                    {/*<Button
                        color="dark-green"
                        type="submit"
                        style={{ padding:'5px',bottom: '17px', right: '10px', position: 'fixed'}}
                    >
                        Send
                    </Button>*/}
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

export default connect(mapStateToProps)(Home)