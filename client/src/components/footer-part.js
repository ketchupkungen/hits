import React, {Component} from 'react';
import { Footer } from 'mdbreact';
import logo from '../logo.svg';

class FooterPart extends Component {
  render(){
    return(
      <Footer color="elegant-color-dark" className="font-small footer">
        <div className="footer-copyright text-center">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              &copy; {(new Date().getFullYear())} Copyright:
              <a href="http://www.humanit.se"> humanit.se
                <img className="footer-img" src={logo} alt="logo"/>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.facebook.com/humanit.se/?hc_ref=ARRvb_tANI-PaVFpIHa0VClrvO5nG-Wa7PSpJCqkAA7Tn3Og8X7BjWsEAd8X-tlU_Es&fref=nf"
                className="btn-floating btn-sm btn-tw  footer-link"
              >
                <i className="fab fa-facebook-f fb-link"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.linkedin.com/company/human-it-sverige/"
                className="btn-floating btn-sm btn-li footer-link"
              >
                <i className="fab fa-linkedin-in li-link"></i>
              </a>
            </li>
          </ul>
        </div>
      </Footer>
    );
  }
}

export default FooterPart;