import React, { Component } from 'react';

// Components
import Navbar from '../components/Header.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Footer from '../components/Footer.jsx';

class Login extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Jumbotron title='Login' subtitle="Gain full access" />
				<div className="container">
					<h2>Welcome!</h2>

					<p>Bacon ipsum dolor amet tongue beef doner alcatra. Venison pancetta jerky, pork chop andouille t-bone bresaola. Venison pancetta jerky, pork chop andouille t-bone bresaola. Bacon ipsum dolor amet tongue beef doner alcatra. Venison pancetta jerky, pork chop andouille t-bone bresaola.</p>

					<form>
						<div className='form-group'>
							<label htmlFor="exampleInputEmail1">Email address</label>
	    				<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
		    			</div>
	    				<div className="form-group">
						    <label htmlFor="exampleInputPassword1">Password</label>
						    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
						</div>
						  	<button type="submit" className="btn btn-success">Login</button>
					</form>

				</div>
				<Footer />
			</div>
		);
	}
}

export default Login;