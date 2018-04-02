import React from 'react';
import axios from 'axios';

const Logout = (props) => {
  let user = props.user.login;
  axios.get(`/api/logout`)
    .then(() =>{
      setTimeout(()=>{
        props.history.push('/')
      },1000)
    })

  return (
    <h1  className="logout">
        See you soon, {user.name}!
    </h1>
  );
};

export default Logout;