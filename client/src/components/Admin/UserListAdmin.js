import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import { getUsers, deleteUser } from '../../actions';

import { Card,CardBody,Button } from 'mdbreact';
import ImgFallback from 'react-img-fallback'

class UserContainerAdmin extends Component {

    deletePost = () => {
        this.props.dispatch(deleteUser(this.props.match.params.id))
    }

    componentWillMount(){
        this.props.dispatch(getUsers())
    }

    showUsers = (user) =>(
        user.users ?
            user.users.map(item => (
              <div className="col-md-4" key={item._id}>
                <Card cascade style={{height:'700px',marginBottom:'30px'}}>
                  <ImgFallback
                    className="img-fluid"
                    src={item.image}
                    alt="user-img"
                    fallback='https://stroops.com/wp-content/uploads/2016/11/placeholder-profile-male-500x500.png'
                  >
                  </ImgFallback>
                  <CardBody>
                    <h4>Name: {item.name} {item.lastname}</h4>
                    <h5>Username: {item.username}</h5>
                    <p>Email: {item.email}</p>
                    <p>Phone: {item.phone}</p>
                    <p>Career: {item.career}</p>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Button color="dark-green">Edit</Button>
                    <Button onClick={this.deletePost} color="red">Delete</Button>
                  </CardBody>
                </Card>
              </div>
            ))
        :null
    )


    render() {
        let user = this.props.user;
        return (
          <div className="container profile-page">
            <h4>Current users:</h4>
            <div className="row">

              {this.showUsers(user)}
            </div>
          </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return{
        user:state.user
    }
}

export default connect(mapStateToProps)(UserContainerAdmin)
