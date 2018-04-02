import React, { Component } from 'react';


class Header extends Component {
	render(){
		return (
      <footer className="footer">
        <div className="container">
          <span className="text-muted">Place sticky footer content here.</span>

          <div className="text-center center-block">
            <a href="https://www.facebook.com/bootsnipp"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
            <a href="https://twitter.com/bootsnipp"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
            <a href="https://plus.google.com/+Bootsnipp-page"><i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i></a>
            <a href="mailto:bootsnipp@gmail.com"><i id="social-em" className="fa fa-envelope-square fa-3x social"></i></a>
          </div>
        </div>
      </footer>
		);
	}
}

export default Header;