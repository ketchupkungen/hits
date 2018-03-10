import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import { Button, Media } from 'reactstrap';

class SurveyList extends Component {
	constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


	componentDidMount() {
		this.props.fetchSurveys();
	}

	renderSurveys() {
		// Shows the latest on the bottom
		//return this.props.surveys.reverse().map(survey => {

		// Shows the latest on top
		return this.props.surveys.map(survey => {
			return (
				<div className="card" key={survey._id}>
					<div className="card-content">
						<span className="card-title">{survey.title}</span>
						<p>
							{survey.body}
						</p>
						<p className="right">
							Sent On: { new Date(survey.dateSent).toLocaleDateString() }
						</p>
					</div>
					<div className="card-action">
						<a>Yes: {survey.yes}</a>
						<a>No: {survey.no}</a>
						<a className="right">DELETE</a>
					</div>
				</div>
			)
		})
	}


	render() {
		return (
			<div className="main">
				{ this.renderSurveys() }
	      <li className="messageArea">
	        <Media>
	          <Media left>
	            {/*Temporary img*/}
	            <img className="profile-img-chat" src="https://react-bootstrap.github.io/thumbnail.png" alt="thumbnail" />
	          </Media>
	          <Media body>
	            <Media heading>
	            	<Button className="mess-edit">
								  <i className="fa fa-ellipsis-h"></i>
								</Button>
	              <b className="mess-name">
	                Erik Olsson
	              </b>
	              <i className="mess-time">
	                2018-02-20 13:37
	              </i>

	            </Media>
	            <p className='mess-text'>
	              Bacon ipsum dolor amet ham hock pancetta andouille, kielbasa ribeye corned beef pork strip steak sirloin filet mignon. Kevin pork chicken doner drumstick. Frankfurter shank tri-tip prosciutto sirloin strip steak buffalo short loin boudin andouille landjaeger ham hock meatball burgdoggen. Ground round pork belly short loin capicola brisket.
	              Bacon ipsum dolor amet ham hock pancetta andouille, kielbasa ribeye corned beef pork strip steak sirloin filet mignon. Kevin pork chicken doner drumstick. Frankfurter shank tri-tip prosciutto sirloin strip steak buffalo short loin boudin andouille landjaeger ham hock meatball burgdoggen. Ground round pork belly short loin capicola brisket.
	            </p>
	          </Media>
	        </Media>
	        <hr/>
	      </li>
	      <li className="messageArea">
	        <Media>
	          <Media left>
	            {/*Temporary img*/}
	            <img className="profile-img-chat" src="https://react-bootstrap.github.io/thumbnail.png" alt="thumbnail" />
	          </Media>
	          <Media body>
	            <Media heading>
	            	<Button className="mess-edit">
								  <i className="fa fa-ellipsis-h"></i>
								</Button>
	              <b className="mess-name">
	                Erik Olsson
	              </b>
	              <i className="mess-time">
	                2018-02-20 13:37
	              </i>

	            </Media>
	            <p className='mess-text'>
	              Bacon ipsum dolor amet ham hock pancetta andouille, kielbasa ribeye corned beef pork strip steak sirloin filet mignon. Kevin pork chicken doner drumstick. Frankfurter shank tri-tip prosciutto sirloin strip steak buffalo short loin boudin andouille landjaeger ham hock meatball burgdoggen. Ground round pork belly short loin capicola brisket.
	            </p>
	          </Media>
	        </Media>
	        <hr/>
	      </li>
	      <li className="messageArea">
	        <Media>
	          <Media left>
	            {/*Temporary img*/}
	            <img className="profile-img-chat" src="https://react-bootstrap.github.io/thumbnail.png" alt="thumbnail" />
	          </Media>
	          <Media body>
	            <Media heading>
	            	<Button className="mess-edit">
								  <i className="fa fa-ellipsis-h"></i>
								</Button>
	              <b className="mess-name">
	                Erik Olsson
	              </b>
	              <i className="mess-time">
	                2018-02-20 13:37
	              </i>

	            </Media>
	            <p className='mess-text'>
	              Bacon ipsum dolor amet chicken ham hock meatloaf, shankle t-bone tenderloin porchetta andouille kielbasa bacon fatback. Tail ground round kevin chuck strip steak, pancetta
	            </p>
	          </Media>
	        </Media>
	        <hr/>
	      </li>
	      <li className="messageArea">
	        <Media>
	          <Media left>
	            {/*Temporary img*/}
	            <img className="profile-img-chat" src="https://react-bootstrap.github.io/thumbnail.png" alt="thumbnail" />
	          </Media>
	          <Media body>
	            <Media heading>
	            	<Button className="mess-edit">
								  <i className="fa fa-ellipsis-h"></i>
								</Button>
	              <b className="mess-name">
	                Erik Olsson
	              </b>
	              <i className="mess-time">
	                2018-02-20 13:37
	              </i>

	            </Media>
	            <p className='mess-text'>
	              Bacon ipsum dolor amet ham hock pancetta andouille, kielbasa ribeye corned beef pork strip steak sirloin filet mignon. Kevin pork chicken doner drumstick. Frankfurter shank tri-tip prosciutto sirloin strip steak buffalo short loin boudin andouille landjaeger ham hock meatball burgdoggen. Ground round pork belly short loin capicola brisket.
	              Bacon ipsum dolor amet ham hock pancetta andouille, kielbasa ribeye corned beef pork strip steak sirloin filet mignon. Kevin pork chicken doner drumstick. Frankfurter shank tri-tip prosciutto sirloin strip steak buffalo short loin boudin andouille landjaeger ham hock meatball burgdoggen. Ground round pork belly short loin capicola brisket.
	            </p>
	          </Media>
	        </Media>
	        <hr/>
	      </li>
	      <li className="messageArea">
	        <Media>
	          <Media left>
	            {/*Temporary img*/}
	            <img className="profile-img-chat" src="https://react-bootstrap.github.io/thumbnail.png" alt="thumbnail" />
	          </Media>
	          <Media body>
	            <Media heading>
	            	<Button className="mess-edit">
								  <i className="fa fa-ellipsis-h"></i>
								</Button>
	              <b className="mess-name">
	                Erik Olsson
	              </b>
	              <i className="mess-time">
	                2018-02-20 13:37
	              </i>

	            </Media>
	            <p className='mess-text'>
	              Bacon ipsum dolor amet chicken ham hock meatloaf, shankle t-bone tenderloin porchetta andouille kielbasa bacon fatback. Tail ground round kevin chuck strip steak, pancetta
	            </p>
	          </Media>
	        </Media>
	        <hr/>
	      </li>
	      <li className="messageArea">
	        <Media>
	          <Media left>
	            {/*Temporary img*/}
	            <img className="profile-img-chat" src="https://react-bootstrap.github.io/thumbnail.png" alt="thumbnail" />
	          </Media>
	          <Media body>
	            <Media heading>
	            	<Button className="mess-edit">
								  <i className="fa fa-ellipsis-h"></i>
								</Button>
	              <b className="mess-name">
	                Erik Olsson
	              </b>
	              <i className="mess-time">
	                2018-02-20 13:37
	              </i>

	            </Media>
	            <p className='mess-text'>
	              Bacon ipsum dolor amet ham hock pancetta andouille, kielbasa ribeye corned beef pork strip steak sirloin filet mignon. Kevin pork chicken doner drumstick. Frankfurter shank tri-tip prosciutto sirloin strip steak buffalo short loin boudin andouille landjaeger ham hock meatball burgdoggen. Ground round pork belly short loin capicola brisket.
	            </p>
	          </Media>
	        </Media>
	        <hr/>
	      </li>
	      <li className="messageArea">
	        <Media>
	          <Media left>
	            {/*Temporary img*/}
	            <img className="profile-img-chat" src="https://react-bootstrap.github.io/thumbnail.png" alt="thumbnail" />
	          </Media>
	          <Media body>
	            <Media heading>
	            	<Button className="mess-edit">
								  <i className="fa fa-ellipsis-h"></i>
								</Button>
	              <b className="mess-name">
	                Erik Olsson
	              </b>
	              <i className="mess-time">
	                2018-02-20 13:37
	              </i>

	            </Media>
	            <p className='mess-text'>
	              Bacon ipsum dolor amet chicken ham hock meatloaf, shankle t-bone tenderloin porchetta andouille kielbasa bacon fatback. Tail ground round kevin chuck strip steak, pancetta
	            </p>
	          </Media>
	        </Media>
	        <hr/>
	      </li>
	      <li className="messageArea">
	        <Media>
	          <Media left>
	            {/*Temporary img*/}
	            <img className="profile-img-chat" src="https://react-bootstrap.github.io/thumbnail.png" alt="thumbnail" />
	          </Media>
	          <Media body>
	            <Media heading>
	            	<Button className="mess-edit">
								  <i className="fa fa-ellipsis-h"></i>
								</Button>
	              <b className="mess-name">
	                Erik Olsson
	              </b>
	              <i className="mess-time">
	                2018-02-20 13:37
	              </i>

	            </Media>
	            <p className='mess-text'>
	              Bacon ipsum dolor amet chicken ham hock meatloaf, shankle t-bone tenderloin porchetta andouille kielbasa bacon fatback. Tail ground round kevin chuck strip steak, pancetta
	            </p>
	          </Media>
	        </Media>
	        <hr/>
	      </li>
      </div>
		)
	}
}

function mapStateToProps({ surveys }) {
	return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);