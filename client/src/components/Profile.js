import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
//import SurveyList from './surveys/SurveyList';
import Sidebar from './Sidebar';
import logo from '../logo.svg';

const Profile = () => {
	return (
		<div>
			<div className="header">
				<h5>
					<Link className="mr-auto" to="/">
		      	<img src={logo} className="logo" alt='logo' />
		      </Link>
			  	Bob Bobsson
			  </h5>
			</div>
			<Sidebar />
			<div className="profile-page">
				<Container>
					<Row>
						<Col sm="12" md="6">
							<img className="profile-img" alt="profile-img" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"/>
						</Col>
						<Col sm="12" md="6">
							<p>
								<strong>Name: </strong>Bob Bobsson
							</p>
							<p>
								<strong>Username: </strong>Userbob
							</p>
							<p>
								<strong>Email: </strong>bob.bobsson@gmail.com
							</p>
							<p>
								<strong>Phone: </strong>0707876369
							</p>
							<p>
								<strong>Gender: </strong>Man
							</p>
							<p>
								<strong>Role: </strong>Web developer
							</p>
						</Col>
					</Row>

					<br/>

					<Row>
						<Col>
							<p>
								<strong>Description: </strong>
							</p>
						</Col>
					</Row>
					<Row>
						<Col>
							<p>
								Bacon ipsum dolor amet ham hock pancetta andouille, kielbasa ribeye corned beef pork strip steak sirloin filet mignon. Kevin pork chicken doner drumstick. Frankfurter shank tri-tip prosciutto sirloin strip steak buffalo short loin boudin andouille landjaeger ham hock meatball burgdoggen. Ground round pork belly short loin capicola brisket.

								Tongue meatball tenderloin porchetta sausage meatloaf kevin chuck pork pork loin cow. Flank doner porchetta jerky. Boudin landjaeger shankle, ground round pig turducken rump leberkas tongue. Hamburger flank brisket cow corned beef, porchetta prosciutto filet mignon pork. Frankfurter beef kielbasa leberkas, short ribs biltong filet mignon fatback chuck.

								Andouille leberkas landjaeger sirloin short ribs, swine tenderloin pancetta kielbasa. Andouille short loin ground round, alcatra ham hock t-bone cow shank strip steak pork chop tenderloin picanha biltong chuck. Porchetta burgdoggen shoulder, tenderloin boudin cupim pork belly kevin buffalo ham hock bacon turducken pork. Ribeye corned beef jowl pork chop turducken. Tenderloin alcatra corned beef, bresaola brisket picanha ham burgdoggen meatball.
							</p>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default Profile;