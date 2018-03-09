import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  UncontrolledDropdown
} from 'reactstrap';


class Header extends React.Component {
	constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

	renderContent() {
		switch (this.props.auth) {
			// Show nothing when loading
			case null:
				return;
			// Show login
			case false:
				return <li><a href="/auth/google">Login with google</a></li>
			// Show whos logged in?
			// Logout
			default:
				return [
					<li key="3"><a href="/api/logout">Logout</a></li>
				];
		}
	}

	render(){
		return (
			<div>
				<Navbar color="faded" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

		  </div>
		);
	}
}

function mapStateToProps({auth}){
	return { auth };
}

export default connect(mapStateToProps)(Header);
/*<Link
	to={ this.props.auth ? '/surveys' : '/' }
	className="left brand-logo">HITS</Link>
<ul id="nav-mobile" className="right">
  {this.renderContent()}
</ul>*/