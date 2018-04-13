import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getMessages } from '../../actions';
import ScrollEvent from 'react-onscroll';
import {Media,Button} from 'mdbreact';
import moment from 'moment-js';
import ImgFallback from 'react-img-fallback'

class HomeContainer extends Component {
  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false,
      };

      this.handleScrollCallback = this.handleScrollCallback.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  componentWillMount(){
      this.props.dispatch(getMessages(20,0,'desc'))
  }

  renderItems = (messages) => (
    messages.list ?
      messages.list.map( item => (
        //<MessageItem {...item} key={item._id}/>
        <div key={item._id}>
        <Media>
          <Link className="mr-3" to={`/chat/${item._id}`}>
            <ImgFallback
              className="profile-img-chat"
              src={item.image}
              alt="user-img"
              fallback='http://s3-ap-southeast-1.amazonaws.com/hinrichfoundation-images/wp-content/uploads/2017/05/ds-placeholder-person.png'
            >
            </ImgFallback>
          </Link>
          <Media body>
              {/*<Link className="mr-3" to={`/users/${item._id}`}>
                {item.name} {item.lastname}
              </Link>*/}
              <Link to={`/chat/${item._id}`}>
                <b className="mess-name">
                  Bob Bobssson
                </b>
              </Link>

              <i className="mess-time">
                {moment(item.createdAt).format("YYYY-MM-DD HH:mm")}
              </i>
              <Link to={`/chat/edit-message/${item._id}`}>
                <Button color="grey" className="mess-edit">
                  <i className="fa fa-ellipsis-h"></i>
                </Button>
              </Link>
              <div className='mess-text'>
                <p className='mess-text'>
                  {item.text}
                </p>
              </div>
          </Media>
        </Media>
        <hr/>
        </div>
      ))
    :null
  )

  handleScrollCallback = () => {
    let count = this.props.messages.list.length;
    this.props.dispatch(getMessages(20,count,'desc',this.props.messages.list))
  }

  render() {
    return (
      <div>
        <ScrollEvent handleScrollCallback={this.handleScrollCallback} />
        <div className="main">
          <div className="messageArea">

            {this.renderItems(this.props.messages)}
          </div>
        </div>
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