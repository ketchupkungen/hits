import React, { Component,PropTypes } from 'react';
import { Link } from 'react-router-dom';
import '../css/Chat.scss';

// Components
import profile from '../images/profile-placeholder.png';
import logo from '../logo.svg';
import Header from '../components/Header.jsx';
import MessageListItem from '../components/MessageListItem';
import MessageComposer from '../components/MessageComposer.jsx';
import Footer from '../components/Footer.jsx';
import {
	Button,
	ButtonDropdown,
	Dropdown, DropdownToggle, DropdownMenu, DropdownItem, MenuItem,
	Modal, ModalHeader, ModalBody, ModalFooter,
	Collapse,
  Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
  UncontrolledDropdown,
  Container, Row, Col } from 'reactstrap';



class Chat extends Component {
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


	render() {
		const {screenWidth,socket} = this.props;

		return (
			<div>
				<div className="smallApp">
					<Container>
					<div className="smallScreen">
				        <input type="checkbox" id="slide" name="" value="" />
								<div className="container">
									<label htmlFor="slide" className="toggle">☰</label>
									<nav className="sidebar">
										<Row>
											<Col>
												<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
									        <DropdownToggle
									          tag="span"
									          onClick={this.toggle}
									          data-toggle="dropdown"
									          aria-expanded={this.state.dropdownOpen}
									        >
									          <img src={profile} alt="Placeholder" height="40px" width="40px"/>
									        </DropdownToggle>
									        <DropdownMenu>
									        	<DropdownItem header>Mr User</DropdownItem>
									          <DropdownItem header>Göran Stenström</DropdownItem>
								          	<DropdownItem divider/>
								          	<DropdownItem onClick={this.toggle}><Link className="nav-link" to="/profile">ProfilePage</Link></DropdownItem>
												    <DropdownItem onClick={this.toggle}>Options</DropdownItem>
												    <DropdownItem onClick={this.toggle}>Notifications</DropdownItem>
												    <DropdownItem onClick={this.toggle}>Help and feedback</DropdownItem>
												    <DropdownItem divider/>
												    <DropdownItem onClick={this.toggle}><Link className="nav-link" to="/">Log Out</Link></DropdownItem>

									        </DropdownMenu>
									      </Dropdown>

									    </Col>
										<Col>Göran Stenström</Col>
										<Link className="navbar-brand mr-auto" to="/">
							      	<img src={logo} className="logo" alt='logo' />
							      </Link> {/*For giggles*/}
									</Row>
									<hr/>
									<br/>

									<Button color="success">Private message</Button>

									<ul>
										<Row>
											<Col><strong>Channels</strong></Col>
											<Col><a href="#">+</a></Col>
										</Row>
										<li><a href="#"> Channel 1 </a></li>
										<li><a href="#"> Channel 2 </a></li>
										<li><a href="#"> And more...btn? </a></li>
									</ul>
									<br/>
									<ul>
									<Row>
										<Col><strong>Direct messages</strong></Col>
										<Col><a href="#">+</a></Col>
									</Row>
									<li><a href="#"> Tore STore </a></li>
									<li><a href="#"> Bengt Ekhammar </a></li>
									<li><a href="#"> And more...btn? </a></li>
								</ul>
							</nav>
						</div>
								<div className="main">
									  <h5 className="smallScreenHeader">
									  	Active channel
									  </h5>
								  	<ul style={{wordWrap: 'break-word', margin: '0', overflowY: 'auto', padding: '0',paddingTop:'50px', paddingBottom: '10px', flexGrow: '1', order: '1'}} ref="messageList">
						          <MessageListItem />
						        </ul>
						        <MessageComposer />
	       					</div>
		      </div>
		      </Container>
		    </div>

		    <div className="bigApp">
		      <Container className="rowFit">
			      <Row className="rowFit">
				      <Col className="rowFit" xs="3">
								<div className="bigScreen">
									<div className="sidebarBig">

										<Row>

											<Col>
												<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
									        <DropdownToggle
									          tag="span"
									          onClick={this.toggle}
									          data-toggle="dropdown"
									          aria-expanded={this.state.dropdownOpen}
									        >
									          <img src={profile} alt="Placeholder" height="40px" width="40px"/>
									        </DropdownToggle>
									        <DropdownMenu>
									        	<DropdownItem header>Mr User</DropdownItem>
									          <DropdownItem header>Göran Stenström</DropdownItem>
								          	<DropdownItem divider/>
								          	<DropdownItem onClick={this.toggle}><Link className="nav-link" to="/profile">ProfilePage</Link></DropdownItem>
												    <DropdownItem onClick={this.toggle}>Options</DropdownItem>
												    <DropdownItem onClick={this.toggle}>Notifications</DropdownItem>
												    <DropdownItem onClick={this.toggle}>Help and feedback</DropdownItem>
												    <DropdownItem divider/>
												    <DropdownItem onClick={this.toggle}><Link className="nav-link" to="/">Log Out</Link></DropdownItem>

									        </DropdownMenu>
									      </Dropdown>

									    </Col>
											<Col>Göran Stenström</Col>
											<Link className="navbar-brand mr-auto" to="/">
								      	<img src={logo} className="logo" alt='logo' />
								      </Link> {/*For giggles*/}
										</Row>
										<hr/>
										<br/>

										<Button color="success">Private message</Button>

										<ul>
											<Row>
												<Col><strong>Channels</strong></Col>
												<Col><a href="#">+</a></Col>
											</Row>
											<li><a href="#"> Channel 1 </a></li>
											<li><a href="#"> Channel 2 </a></li>
											<li><a href="#"> And more...btn? </a></li>
										</ul>
										<br/>
										<ul>
											<Row>
												<Col><strong>Direct messages</strong></Col>
												<Col><a href="#">+</a></Col>
											</Row>
											<li><a href="#"> Tore STore </a></li>
											<li><a href="#"> Bengt Ekhammar </a></li>
											<li><a href="#"> And more...btn? </a></li>
										</ul>
									</div>
								</div>
					    </Col>

							{/*Message area*/}
							<Col xs="9">
								<div className="main">
								  <h3 className="activeChannel">
								  	Active channel
								  </h3>
							  	<ul style={{wordWrap: 'break-word', margin: '0', overflowY: 'auto', padding: '0',paddingTop:'50px', paddingBottom: '10px', flexGrow: '1', order: '1'}} ref="messageList">
					          <MessageListItem />
					        </ul>
					        <MessageComposer />
       					</div>
       				</Col>
       			</Row>
       		</Container>
      	</div>
      </div>
		);
	}
}

export default Chat;