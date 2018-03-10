import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
//import { connect } from 'react-redux';
import { Card, CardBody, Input,Container,Row,Col } from 'reactstrap';

export default class Landing extends Component {
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

			          <Input className="login-field" placeholder="username" />
			          <Input type="password" name="password" className="login-field" placeholder="********" />
			          <a className="login-btn">Login</a>
			          <a className="login-btn" href="/auth/google">Login with Google</a>
			          <a href="/">Glömt lösenord?</a>
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

			          <Input className="login-field" placeholder="username" />
			          <Input type="password" name="password" className="login-field" placeholder="********" />
			          <a className="login-btn">Login</a>
			          <a className="login-btn" href="/auth/google">Login with Google</a>
			          <a href="/">Glömt lösenord?</a>
			        </Col>
						</Row>
		      </Container>
					{/*<Footer />*/}
				</div>
			</div>
		);
	}
}