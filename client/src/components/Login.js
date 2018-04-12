import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions'
import logo from '../logo.svg';

import { Card, CardBody, Button } from 'mdbreact';

class Login extends Component {

  state = {
      username:'',
      password:'',
      error:'',
      success:false
  }

  handleInputUsername = (event) => {
      this.setState({username:event.target.value})
  }
  handleInputPassword = (event) => {
      this.setState({password:event.target.value})
  }

  componentWillReceiveProps(nextProps){
      if(nextProps.user.login.isAuth){
        this.props.history.push('/chat')
      }
  }


  submitForm = (e) =>{
      e.preventDefault();
      this.props.dispatch(loginUser(this.state))
  }

  render() {
    let user = this.props.user;
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
                <div className="login-field">
                  <input
                    type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleInputUsername}
                  />
                </div>
                <div className="login-field">
                  <input
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleInputPassword}
                  />
                </div>

                <Button className="login-btn" color="dark-green" type="submit">Log in</Button>
                <Link to="/register"><Button className="login-btn" color="dark-green">Register</Button></Link>

                <div>
                  {
                    user.login ?
                      <p className="loginError">{user.login.message}</p>
                    :null
                  }
                </div>
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
            <div className="login-field">
              <input
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleInputUsername}
              />
            </div>
            <div className="login-field">
              <input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInputPassword}
              />
            </div>

            <Button className="login-btn" color="dark-green" type="submit">Log in</Button>
            <Button className="login-btn" color="dark-green"><Link to="/register">Register</Link></Button>

            <div>
              {
                user.login ?
                  <p className="loginError">{user.login.message}</p>
                :null
              }
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user:state.user
  }
}

export default connect(mapStateToProps)(Login)

