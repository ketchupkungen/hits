import React from 'react';
import Sidebar from '../components/Sidebar';
import logo from '../logo.svg'
import ImgFallback from 'react-img-fallback'

const Profile = (props) => {
  let user = props.user.login;
  return (
    <div>
      <div className="header">
        <h5>
          <img src={logo} className="logo" alt='logo' />
          {user.name} {user.lastname}
        </h5>
      </div>
      <Sidebar />
      <div className="profile-page">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              {/*<img className="profile-img" alt="profile-img" src="http://s3-ap-southeast-1.amazonaws.com/hinrichfoundation-images/wp-content/uploads/2017/05/ds-placeholder-person.png"/>*/}
              <ImgFallback
	              className="profile-img"
	              src={user.image}
	              alt="user-img"
	              fallback='http://s3-ap-southeast-1.amazonaws.com/hinrichfoundation-images/wp-content/uploads/2017/05/ds-placeholder-person.png'
	            >
	            </ImgFallback>
            </div>
            <div className=" col-sm-8">
              <p>
                <strong>Firstname: </strong>{user.name}
              </p>
              <p>
                <strong>Lastname: </strong>{user.lastname}
              </p>
              <p>
                <strong>Username: </strong>{user.username}
              </p>
              <p>
                <strong>Email: </strong>{user.email}
              </p>
              <p>
                <strong>Phone: </strong>{user.phone}
              </p>
              <p>
                <strong>Career: </strong>{user.career}
              </p>
            </div>
          </div>

          <br/>

          <div className="row">
            <div className="col">
              <p>
                <strong>Description: </strong>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>
                Bacon ipsum dolor amet ham hock pancetta andouille, kielbasa ribeye corned beef pork strip steak sirloin filet mignon. Kevin pork chicken doner drumstick. Frankfurter shank tri-tip prosciutto sirloin strip steak buffalo short loin boudin andouille landjaeger ham hock meatball burgdoggen. Ground round pork belly short loin capicola brisket.

                Tongue meatball tenderloin porchetta sausage meatloaf kevin chuck pork pork loin cow. Flank doner porchetta jerky. Boudin landjaeger shankle, ground round pig turducken rump leberkas tongue. Hamburger flank brisket cow corned beef, porchetta prosciutto filet mignon pork. Frankfurter beef kielbasa leberkas, short ribs biltong filet mignon fatback chuck.

                Andouille leberkas landjaeger sirloin short ribs, swine tenderloin pancetta kielbasa. Andouille short loin ground round, alcatra ham hock t-bone cow shank strip steak pork chop tenderloin picanha biltong chuck. Porchetta burgdoggen shoulder, tenderloin boudin cupim pork belly kevin buffalo ham hock bacon turducken pork. Ribeye corned beef jowl pork chop turducken. Tenderloin alcatra corned beef, bresaola brisket picanha ham burgdoggen meatball.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;