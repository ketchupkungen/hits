import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions';
import { Link } from 'react-router-dom';
import ImgFallback from 'react-img-fallback'

import { Media } from 'mdbreact';

class UserContainer extends Component {

    componentWillMount(){
        this.props.dispatch(getUsers())
    }

    showUsers = (user) =>(
        user.users ?
            user.users.map(item => (
            <div key={item._id} style={{marginBottom:'20px'}}>
              <Media>
                <Link className="mr-3" to={`/users/${item._id}`}>
                  <ImgFallback
                    className="profile-img-chat"
                    src={item.image}
                    alt="user-img"
                    fallback='https://stroops.com/wp-content/uploads/2016/11/placeholder-profile-male-500x500.png'
                  >
                  </ImgFallback>
                </Link>
                <Media body>
                  <Media heading>
                    {item.name} {item.lastname}
                  </Media>
                </Media>
              </Media>
            </div>
            ))
        :null
    )


    render() {
        let user = this.props.user;
        return (
          <div className="container" style={{marginTop:'60px'}}>
            <h4>Users:</h4>
              {this.showUsers(user)}
          </div>
        );
    }
}
function mapStateToProps(state){
    return{
        user:state.user
    }
}

export default connect(mapStateToProps)(UserContainer)


/*import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions';
import UserItem from '../widgetsUI/user_item';
import ScrollEvent from 'react-onscroll';

class UserContainer extends Component {
  constructor(props) {
      super(props);

      this.handleScrollCallback = this.handleScrollCallback.bind(this);
  }

  componentWillMount(){
      this.props.dispatch(getUsers(20,0,'desc'))
  }

  renderItems = (users) => (
    users.list ?
      users.list.map( item => (
        <UserItem {...item} key={item._id}/>
      ))
    :null
  )
  handleScrollCallback = () => {
    let count = this.props.users.list.length;
    this.props.dispatch(getUsers(20,count,'desc',this.props.users.list))
  }

  render() {
      return (
        <div>
          <div className="main">
          <ScrollEvent handleScrollCallback={this.handleScrollCallback} />
            <div>{this.renderItems(this.props.users)}</div>
          </div>
        </div>
      );
  }
}

function mapStateToProps(state){
  return {
    users:state.users
  }
}

export default connect(mapStateToProps)(UserContainer)*/