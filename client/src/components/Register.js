import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers, userRegister } from '../actions';

import logo from '../logo.svg';
import { Card,CardBody,Button } from 'mdbreact';

class Register extends Component {

    state ={
        name:'',
        lastname:'',
        email:'',
        username:'',
        phone:'',
        image:'',
        gender:'',
        career:'',
        password:'',
        error:''
    }

    componentWillMount(){
        this.props.dispatch(getUsers())
    }


    handleInputEmail = (event) => {
        this.setState({email:event.target.value})
    }
    handleInputPassword= (event) => {
        this.setState({password:event.target.value})
    }
    handleInputUsername= (event) => {
        this.setState({username:event.target.value})
    }
    handleInputName = (event) => {
        this.setState({name:event.target.value})
    }
    handleInputLastname = (event) => {
        this.setState({lastname:event.target.value})
    }
    handleInputPhone = (event) => {
        this.setState({phone:event.target.value})
    }
    handleInputGender = (event) => {
        this.setState({gender:event.target.value})
    }
    handleInputCareer = (event) => {
        this.setState({career:event.target.value})
    }
    handleInputImage = (event) => {
        this.setState({image:event.target.value})
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user.register === false){
            this.setState({error:'Invalid input, try again'})
        } else{
            this.setState({
              name:'',
              lastname:'',
              email:'',
              username:'',
              phone:'',
              image:'',
              gender:'',
              career:'',
              password:'',
            })
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        this.setState({error:''});

        this.props.dispatch(userRegister({
            email:this.state.email,
            password:this.state.password,
            username:this.state.username,
            name:this.state.name,
            lastname:this.state.lastname,
            phone:this.state.phone,
            image:this.state.image,
            gender:this.state.gender,
            career:this.state.career,
        },this.props.user.users))

    }

    render() {
        return (

          <div>
            <div className="login-page-desk">
              <Card className="login-card">
                <CardBody>
                  <form onSubmit={this.submitForm}>
                    <h2>
                      <img src={logo} className="logo" alt='logo' />
                      Human IT - Social
                    </h2>

                    <br/>
                    <div className="login-field">
                    <input
                      type="text"
                      placeholder="Firstname"
                      value={this.state.name}
                      onChange={this.handleInputName}
                    />
                    </div>
                    <div className="login-field">
                    <input
                      type="text"
                      placeholder="Lastname"
                      value={this.state.lastname}
                      onChange={this.handleInputLastname}
                    />
                    </div>
                    <div className="login-field">
                    <input
                      type="email"
                      placeholder="mail@mail.com"
                      value={this.state.email}
                      onChange={this.handleInputEmail}
                    />
                    </div>
                    <div className="login-field">
                    <input
                      type="text"
                      placeholder="username"
                      value={this.state.username}
                      onChange={this.handleInputUsername}
                    />
                    </div>
                    <div className="login-field">
                    <input
                      type="text"
                      placeholder="phone"
                      value={this.state.phone}
                      onChange={this.handleInputPhone}
                    />
                    </div>
                    <div className="login-field">
                    <input
                      type="text"
                      placeholder="career"
                      value={this.state.career}
                      onChange={this.handleInputCareer}
                    />
                    </div>
                    <div className="login-field">
                    <input
                      type="text"
                      placeholder="imageURL"
                      value={this.state.image}
                      onChange={this.handleInputImage}
                    />
                    </div>
                    {/*<div className="login-field">
                      <select
                        value={this.state.gender}
                        onChange={this.handleInputGender}
                      >
                        <option val="Man">Man</option>
                        <option val="Woman">Woman</option>
                        <option val="Other">Other</option>
                      </select>
                    </div>*/}
                    <div className="login-field">
                    <input
                      type="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handleInputPassword}
                    />
                    </div>
                    <Button className="login-btn" color="dark-green" type="submit">Register</Button>
                    <Link to="/"><Button className="login-btn" color="red">Back</Button></Link>

                    <p className="loginError">{this.state.error}</p>
                  </form>
                </CardBody>
              </Card>
            </div>
            <div className="login-page-mobile">
              <form onSubmit={this.submitForm}>
                <h2>
                  <img src={logo} className="logo" alt='logo' />
                  Human IT - Social
                </h2>

                <br/>
                <div className="login-field">
                <input
                  type="text"
                  placeholder="Firstname"
                  value={this.state.name}
                  onChange={this.handleInputName}
                />
                </div>
                <div className="login-field">
                <input
                  type="text"
                  placeholder="Lastname"
                  value={this.state.lastname}
                  onChange={this.handleInputLastname}
                />
                </div>
                <div className="login-field">
                <input
                  type="email"
                  placeholder="mail@mail.com"
                  value={this.state.email}
                  onChange={this.handleInputEmail}
                />
                </div>
                <div className="login-field">
                <input
                  type="text"
                  placeholder="username"
                  value={this.state.username}
                  onChange={this.handleInputUsername}
                />
                </div>
                <div className="login-field">
                <input
                  type="text"
                  placeholder="phone"
                  value={this.state.phone}
                  onChange={this.handleInputPhone}
                />
                </div>
                <div className="login-field">
                <input
                  type="text"
                  placeholder="career"
                  value={this.state.career}
                  onChange={this.handleInputCareer}
                />
                </div>
                <div className="login-field">
                <input
                  type="text"
                  placeholder="imageURL"
                  value={this.state.image}
                  onChange={this.handleInputImage}
                />
                </div>
                {/*<div className="login-field">
                  <select
                    value={this.state.gender}
                    onChange={this.handleInputGender}
                  >
                    <option val="Man">Man</option>
                    <option val="Woman">Woman</option>
                    <option val="Other">Other</option>
                  </select>
                </div>*/}
                <div className="login-field">
                <input
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleInputPassword}
                />
                </div>
                <Button className="login-btn" color="dark-green" type="submit">Register</Button>
                <Link to="/"><Button className="login-btn" color="red">Back</Button></Link>

                <p className="loginError">{this.state.error}</p>
              </form>
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

export default connect(mapStateToProps)(Register)