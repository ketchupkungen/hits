import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import { getUsers, deleteUser } from '../../actions';

import { Card,CardBody,CardImage,Button } from 'mdbreact';

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
                  <CardImage className="img-fluid" src={item.image} />
                  <CardBody>
                    <h4>Name: {item.name} {item.lastname}</h4>
                    <h5>Username: {item.username}</h5>
                    <p>Email: {item.email}</p>
                    <p>Phone: {item.phone}</p>
                    <p>Career: {item.career}</p>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Button color="dark-green" href="#">Edit</Button>
                    <Button onClick={this.deletePost} color="red" href="#">Delete</Button>
                  </CardBody>
                </Card>
              </div>
            ))
        :null
    )


    render() {
        let user = this.props.user;
        return (
          <div className="container" style={{marginTop:'60px'}}>
            <h4>Current users:</h4>
            <div className="row">
            
              {this.showUsers(user)}
            </div>
          </div>
        );
    }
}
function mapStateToProps(state){
    return{
        user:state.user
    }
}

export default connect(mapStateToProps)(UserContainerAdmin)
