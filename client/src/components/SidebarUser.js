import React from 'react';
import { Media } from 'mdbreact';

const SidebarUser = (props) => {
  let user = props.user.login;
  return (
    <div>
      <Media>
        <Media left className="mr-3" href="#">
          <Media className="profile-img-chat" object src="http://s3-ap-southeast-1.amazonaws.com/hinrichfoundation-images/wp-content/uploads/2017/05/ds-placeholder-person.png" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            {user.name} {user.lastname}
          </Media>
            faucibus.
        </Media>
      </Media>
    </div>
  );
};

export default SidebarUser;