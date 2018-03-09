import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
//import { connect } from 'react-redux';
import { Card, CardBody, Input } from 'reactstrap';

const Landing = () => {
	return (
		<div className="login-page">
			<Card className="login-card">
        <CardBody>
          <h1>
	          <Link className="mr-auto" to="/">
			      	<img src={logo} className="logo" alt='logo' />
			      </Link>
		      	Human IT - Social
		      </h1>
          <br/>

          <Input className="login-field" placeholder="username" />
          <Input className="login-field" placeholder="********" />
          <a className="login-btn">Login</a>
          <a className="login-btn" href="/auth/google">Login with Google</a>
        </CardBody>
      </Card>
			{/*<Footer />*/}
		</div>
	);
}

export default Landing;