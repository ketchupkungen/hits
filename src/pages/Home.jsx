import React, { Component } from 'react';
import '../css/Home.scss';

// Components
import Navbar from '../components/Header.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Footer from '../components/Footer.jsx';


class Home extends Component {
	render() {
		return (
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

		);
	}
}

export default Home;