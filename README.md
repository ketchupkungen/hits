# HITS

##### Human IT - Social

### Description
This is a WIP chat application where you can register an account, login, see other users, send messages, see your own profile, edit or remove messages sent, logout etc.

### Demo
Here is the application in its current state, deployed on heroku.com

https://ketchupkungen-chat.herokuapp.com/

### Guide to installing project 

Install
```
cd hits

npm install

cd client

npm install

```

Start
```
cd ../

npm run dev
```
Also, you need to ask me for the dev.js file and add it to config folder

Or you could create your own dev.js file and do the following:

Create an account on mlab.com, create a database, create admin user on db, copy mongoURI
and replace `<user>` and `<password>` with admin credentials. Make sure you don´t push this file
```
module.exports = {
    // Mongo URI
    mongoURI: 'mongodb://<user>:<password>@something.mlab.com:something/database-name',

    // Secret
    SECRET: 'SOMETHINGSECRET'
};


```
------------------

### Packages and libraries used
#### Backend
- bcrypt
- body-parser
- concurrently
- cookie-parser
- del-cli
- express
- jsonwebtoken
- moment-js
- mongoose
- path
#### Frontend
- axios
- bootstrap
- font-awesome
- mdbreact
- node-sass-chokidar
- npm-run-all
- prop-types
- react
- react-dom
- react-error-overlay
- react-fontawesome
- react-img-fallback
- react-onscroll
- react-redux
- react-router-dom
- react-scripts
- react-simple-sidenav
- react-transition-group
- recompose
- redux
- redux-promise
- redux-thunk

### Author & Contributor list

Björn Ohlsson

Kristoffer Annerfeldt
