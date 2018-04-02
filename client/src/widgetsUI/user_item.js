import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = (item) => {
    return (
        <Link to={`/users/${item._id}`}>
            <h2>{item.name}</h2>
            <p>{item.lastname}</p>
        </Link>
    );
};

export default UserItem;