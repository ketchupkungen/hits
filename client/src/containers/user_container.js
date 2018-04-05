import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions';
import { Link } from 'react-router-dom';

import { Media } from 'mdbreact';

class UserContainer extends Component {

    componentWillMount(){
        this.props.dispatch(getUsers())
    }

    showUsers = (user) =>(
        user.users ?
            user.users.map(item => (
              <Media key={item._id}>
                <Link className="mr-3" to={`/users/${item._id}`}>
                  <Media object className="profile-img-chat" src={item.image} alt="Generic placeholder image" />
                </Link>
                <Media body>
                  <Media heading>
                    {item.name} {item.lastname}
                  </Media>
                </Media>
              </Media>
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