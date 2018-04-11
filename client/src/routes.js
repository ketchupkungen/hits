import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Chat from './components/Chat';
import Users from './components/Users/Users'
import UsersAdmin from './components/Admin/UsersAdmin'
import VisitUser from './components/Users/VisitUser'
import MessageView from './components/Messages/MessageView'
import Login from './components/Login'
import Profile from './components/Users/Profile'
import EditMessage from './components/Messages/EditMessage';
import Register from './components/Register';
//import Logout from './components/Logout';


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
        <Route path="/chat" exact component={Auth(Chat,true)}/>
        <Route path="/chat/edit-message/:id" exact component={Auth(EditMessage,true)}/>
        <Route path="/chat/:id" exact component={Auth(MessageView,true)}/>
        <Route path="/users" exact component={Auth(Users,true)}/>
        <Route path="/users/:id" exact component={Auth(VisitUser,true)}/>
        <Route path="/users-admin" exact component={Auth(UsersAdmin,true)}/>
        {/*<Route path="/logout" exact component={Auth(Logout,true)}/>*/}
        <Route path="/profile" exact component={Auth(Profile,true)}/>
      </Switch>
    </Layout>
  );
};

export default Routes;