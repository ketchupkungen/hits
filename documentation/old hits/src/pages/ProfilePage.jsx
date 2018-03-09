import React, { Component } from 'react';
import {
	Button,
	ButtonDropdown,
	Dropdown, DropdownToggle, DropdownMenu, DropdownItem, MenuItem,
	Modal, ModalHeader, ModalBody, ModalFooter,
	Collapse,
  Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
  UncontrolledDropdown,
  Container, Row, Col } from 'reactstrap';
import '../css/Login.scss';

// Components
import Header from '../components/Header.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Footer from '../components/Footer.jsx';

class ProfilePage extends Component {
	render() {
		return (
			<div>
				<Header />
				<Jumbotron title='Profile page' subtitle="Göran Stenström" />
					<h2>ProfilePage</h2>

					<p>Bacon ipsum dolor amet tongue beef doner alcatra. Venison pancetta jerky, pork chop andouille t-bone bresaola. Venison pancetta jerky, pork chop andouille t-bone bresaola. Bacon ipsum dolor amet tongue beef doner alcatra. Venison pancetta jerky, pork chop andouille t-bone bresaola.</p>

				<Container>
					<Row>
						<Col>
							<div className='form-group'>
								<label>Email address</label>
							</div>
						</Col>
						<Col>
							<div className='form-group'>
								<button type="submit" className="btn btn-success">Change</button>
							</div>
						</Col>
					</Row>
					<Row>
						<Col>
							<div className='form-group'>
								<label>Username</label>
							</div>
						</Col>
						<Col>
							<div className='form-group'>
								<button type="submit" className="btn btn-success">Change</button>
							</div>
						</Col>
					</Row>
					<Row>
						<Col>
							<div className='form-group'>
								<label>Firstname</label>
							</div>
						</Col>
						<Col>
							<div className='form-group'>
								<button type="submit" className="btn btn-success">Change</button>
							</div>
						</Col>
					</Row>
					<Row>
						<Col>
							<div className='form-group'>
								<label>Lastname</label>
							</div>
						</Col>
						<Col>
							<div className='form-group'>
								<button type="submit" className="btn btn-success">Change</button>
							</div>
						</Col>
					</Row>
					<Row>
						<Col>
							<div className='form-group'>
								<label>Password</label>
							</div>
						</Col>
						<Col>
							<div className='form-group'>
								<button type="submit" className="btn btn-success">Change</button>
							</div>
						</Col>
					</Row>
				</Container>
				<Footer />
			</div>
		);
	}
}

export default ProfilePage;