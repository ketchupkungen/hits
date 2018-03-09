import React, { Component } from 'react';
import '../css/Footer.scss';

class Footer extends Component {
	render() {
		return(
			<footer className='footer'>
		      <div className="container">
		        <span className="text-muted">Copyright@2018 HITS</span>
		      </div>
		    </footer>
		);
	}
}

export default Footer;