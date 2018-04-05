import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Users from './components/Users'
import UsersAdmin from './components/Admin/UsersAdmin'
import VisitUser from './components/VisitUser'
import MessageView from './components/Messages'
import Login from './containers/login'
import Profile from './containers/Profile'
import EditMessage from './containers/edit';
import Register from './containers/Admin/register';
import Logout from './components/logout';


import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Layout from './hoc/layout'
import Auth from './hoc/auth'

import './css/style.css';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Login,null)}/>
        <Route path="/register" exact component={Auth(Register,null)}/>
        <Route path="/home" exact component={Auth(Home,true)}/>
        <Route path="/home/edit-message/:id" exact component={Auth(EditMessage,true)}/>
        <Route path="/home/:id" exact component={Auth(MessageView,true)}/>
        <Route path="/users" exact component={Auth(Users,true)}/>
        <Route path="/users/:id" exact component={Auth(VisitUser,true)}/>
        <Route path="/users-admin" exact component={Auth(UsersAdmin,true)}/>
        <Route path="/logout" exact component={Auth(Logout,true)}/>
        <Route path="/profile" exact component={Auth(Profile,true)}/>
      </Switch>
    </Layout>
  );
};

export default Routes;