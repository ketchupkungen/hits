import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMessages } from '../actions';
import MessageItem from '../widgetsUI/message_item';

class HomeContainer extends Component {

  componentWillMount(){
      this.props.dispatch(getMessages(10,0,'desc'))
  }

  renderItems = (messages) => (
    messages.list ?  
      messages.list.map( item => (
        <MessageItem {...item} key={item._id}/>
      ))
    :null
  )

  loadmore = () => {
    let count = this.props.messages.list.length;
    this.props.dispatch(getMessages(10,count,'desc',this.props.messages.list))
  }

  render() {
      return (
        <div>
          <div className="main">
            {this.renderItems(this.props.messages)}
          </div>
          <div 
              className="loadmore"
              onClick={this.loadmore}
          >Load More</div>
        </div>
      );
  }
}

function mapStateToProps(state){
  return {
    messages:state.messages
  }
}

export default connect(mapStateToProps)(HomeContainer)