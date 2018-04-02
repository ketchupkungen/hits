import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions'
import logo from '../logo.svg';

import { Card, CardBody, Button } from 'mdbreact';

class Login extends Component {

  state = {
      email:'',
      password:'',
      error:'',
      success:false
  }

  handleInputEmail = (event) => {
      this.setState({email:event.target.value})
  }
  handleInputPassword = (event) => {
      this.setState({password:event.target.value})
  }

  componentWillReceiveProps(nextProps){
      if(nextProps.user.login.isAuth){
          this.props.history.push('/home')
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
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleInputEmail}
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

                <div className="loginError">
                  {
                    user.login ?
                      <p style={{textAlign:'center'}}>{user.login.message}</p>
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
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleInputEmail}
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

            <div className="loginError">
              {
                user.login ?
                  <p style={{textAlign:'center'}}>{user.login.message}</p>
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

