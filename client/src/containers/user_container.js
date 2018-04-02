import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions';

import { Media } from 'mdbreact';

class UserContainer extends Component {

    componentWillMount(){
        this.props.dispatch(getUsers())
    }

    showUsers = (user) =>(
        user.users ? 
            user.users.map(item => (
              <Media key={item._id}>
                <Media left className="mr-3" href="#">
                  <Media object className="profile-img-chat" src={item.image} alt="Generic placeholder image" />
                </Media>
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
