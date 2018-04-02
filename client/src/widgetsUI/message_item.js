import React from 'react';
import { Link } from 'react-router-dom';

const MessageItem = (item) => {
    return (
        <Link to={`/home/${item._id}`}>
            <div>
                <div>{item.text}</div>
            </div>
        </Link>
    );
};

export default MessageItem;