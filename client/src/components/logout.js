import React from 'react';
import axios from 'axios';
import logo from '../logo.svg'

const Logout = (props) => {
  let user = props.user.login;
  axios.get(`/api/logout`)
    .then(() =>{
      setTimeout(()=>{
        props.history.push('/')
      },1000)
    })

  return (
    <h1 className="logout">
      See you soon, {user.name}!
      <img src={logo} className="logo" alt="logo"/>
    </h1>
  );
};

export default Logout;