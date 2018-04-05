import React from 'react';
import { Link } from 'react-router-dom';
import { Media } from 'mdbreact';

const UserItem = (item) => {
  return (
    <Link to={`/users/${item._id}`}>
      <Media key={item._id}>
        <Media left className="mr-3" href="#">
          <Media object className="profile-img-chat" src={item.image} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            {item.name} {item.lastname}
          </Media>
        </Media>
      </Media>
    </Link>
  );
};

export default UserItem;