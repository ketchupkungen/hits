import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/Home.scss';

import {Form, FormGroup, Input, Button, Container, Row, Table} from 'reactstrap';

import { connect } from 'react-redux';

// Components
import Navbar from '../components/Header.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Footer from '../components/Footer.jsx';


class Home extends Component {

	constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this)
    this.onClear = this.onClear.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }
  onChange(e)
  {
    if(e.target.value ===""){
      this.props.fetchData({firstName: "*"})
    }
    else {
      this.props.fetchData({firstName: e.target.value})
    }
  }

  onClear(e)
  {
    let searchInput = ReactDOM.findDOMNode(this.refs.searchInput)
    searchInput.value=""
    this.props.fetchData({firstName: "*"})

  }

  onSubmit(e)
  {
    //prevents full page reload
    e.preventDefault();
  }





	render() {
    return (
    	<div>
     <Container>
      <Row className="show-grid top10">
        <h2> Filter Authors Database by First Name</h2>
      </Row>
      <Row className="show-grid top10">
          <Form inline onSubmit={this.onSubmit}>
          <FormGroup >
              <Input type="search" name="search" id="searchInput" placeholder="First Name" onChange={this.onChange} />
          </FormGroup>
          {' '}
          <Button className ="btn-ll5" onClick={ this.onClear }>
                 Clear
          </Button>
          </Form>
      </Row>
      <Row className="show-grid top10">
        <Table data={ this.props.searchData } search={ false }>
	        <thead dataField='first_name'>First Name</thead>
	        <thead dataField='last_name' key={ true } >Last Name</thead>
        </Table>
      </Row>
      </Container>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      </div>

    );

		{/*return (
			<div>
				<Navbar />
				<Jumbotron title='Welcome!' subtitle="Stuff and things" />

				<div className="container" >
					<h2>Stuff</h2>

					<p>Bacon ipsum dolor amet tongue beef doner alcatra. Venison pancetta jerky, pork chop andouille t-bone bresaola. Fatback shoulder filet mignon kielbasa biltong cow ball tip. Rump tongue leberkas meatball picanha. Sirloin sausage jerky chicken. Fatback ham hock andouille shank boudin ground round. Burgdoggen ribeye kielbasa tongue swine.</p>
					<p>Bresaola pancetta ribeye, shankle jowl frankfurter short ribs boudin kevin porchetta pork belly. Andouille shankle picanha meatball porchetta ground round pork belly shank biltong cupim kielbasa fatback beef capicola. Salami burgdoggen prosciutto drumstick, filet mignon ham hock spare ribs andouille swine ribeye chuck beef ribs. Strip steak turkey ground round capicola jowl.</p>
					<p>Turkey kielbasa tenderloin pig, prosciutto ribeye sausage ham pastrami strip steak rump pork belly jerky brisket. Sausage ham hock drumstick leberkas salami pork ham bresaola sirloin shoulder pork loin chicken porchetta capicola. Ball tip bresaola short ribs venison boudin. T-bone kevin biltong shank hamburger picanha shankle chicken. Biltong pork ground round, pork chop turducken buffalo strip steak.</p>
					<p>Salami kielbasa meatball, turducken swine rump tri-tip beef ribs drumstick biltong strip steak meatloaf brisket. Swine short ribs pork chop, buffalo frankfurter shank beef ribs bacon burgdoggen boudin sausage. Alcatra spare ribs meatloaf hamburger, landjaeger chuck cow beef ribs ground round pastrami pork loin jerky. Strip steak picanha ground round brisket, drumstick turducken cow landjaeger andouille chicken flank tongue alcatra pork belly capicola. Ham salami chicken, shankle landjaeger sirloin ground round tail biltong.</p>
				</div>





				<Footer />
			</div>

		);*/}
	}
}


function mapStatetoProps(state){
  return {
    searchData: state.searchData
  }
}


function mapDispatchToProps(dispatch){
  return {
    fetchData: firstName => dispatch({type: 'FETCH_SEARCH_DATA', payload:firstName}),
  }
}

/*const ConnectedSearch = connect(mapStatetoProps, mapDispatchToProps)(Search)*/


export default Home;