import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
//import * as actions from '../actions'
//import { Link } from 'react-router-dom';
import logo from '../logo.svg';
//import { connect } from 'react-redux';
import { Card, CardBody, Input,Container,Row,Col,Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

export default class Landing extends Component {


	constructor(props,context) {
    super(props,context);
    this.state = {
      modal: false,
     // username: this.props.landing || '',
     // password: '',
     // confirmPassword: ''
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


	render() {
		return (
			<div>
				<div className="login-page-desk">
					<Container>
						<Card className="login-card">
			        <CardBody>
			          <h2>
						      <img src={logo} className="logo" alt='logo' />
					      	Human IT - Social
					      </h2>
			          <br/>

			          <Input className="login-field" placeholder="Username" />
			          <Input type="password" name="password" className="login-field" placeholder="Password" />
			          <a href="/login" className="login-btn">Login</a>
			          <a href="/auth/google" className="login-btn">Login with Google</a>
			          <a onClick={this.toggle}>{this.props.buttonLabel}Register?</a>
			          <a href="/">Glömt lösenord?</a>

				        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
				          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
				          <ModalBody>
				            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
				            <Input className="login-field" placeholder="username" />
				            {/*<Input type="email" name="email" id="exampleEmail" placeholder="email" />*/}
				            <Input type="password" name="password" id="examplePassword" placeholder="password" />
				          </ModalBody>
				          <ModalFooter>
				            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
				            <Button color="success" onClick={this.toggle}>Register</Button>{' '}
				          </ModalFooter>
				        </Modal>
			        </CardBody>

			      </Card>
		      </Container>
					{/*<Footer />*/}
				</div>
				<div className="login-page-mobile">
					<Container>
						<Row>
							<Col>
								<img src={logo} className="logo" alt='logo' />
								<h3>
					      	Human IT - Social
					      </h3>
			          <br/>

			          <Input className="login-field" placeholder="Username" />
			          <Input type="password" name="password" className="login-field" placeholder="Password" />
			          <a href="/login" className="login-btn">Login</a>
			          <a href="/auth/google" className="login-btn">Login with Google</a>
			          <a onClick={this.toggle}>{this.props.buttonLabel}Register?</a>
			          <a href="/">Glömt lösenord?</a>
			        </Col>
						</Row>
		      </Container>
					{/*<Footer />*/}
				</div>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
	        <ModalHeader toggle={this.toggle}>Register user</ModalHeader>
	        <ModalBody>
	          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
	          <Input className="login-field" placeholder="username" />
	          <Input type="email" name="email" id="exampleEmail" placeholder="email" />
	          <Input type="password" name="password" id="examplePassword" placeholder="password" />
	          <Input type="password" name="password" id="examplePassword" placeholder="confirm password" />
	        </ModalBody>
	        <ModalFooter>
	          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
	          <Button color="success" onClick={this.toggle}>Register</Button>{' '}
	        </ModalFooter>
	      </Modal>
			</div>
		);
	}
}