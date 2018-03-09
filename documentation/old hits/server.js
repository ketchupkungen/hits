const express = require('express');
const fs = require('fs');
const mysql = require('mysql');
const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
console.log("NODE_ENV: ", process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  // Return the main index.html, so react-router render the route in the client
  app.get('/', (req, res) => {
    res.sendFile(path.resolve('client/build', 'index.html'));
  });
}

const host = "localhost"
const user = "root"
const pswd = "1234"
const dbname = "books"

// config db ====================================
const pool = mysql.createPool({
  host: host,
  user: user,
  password: 1234,
  port: "3306",
  database: hits
});

const COLUMNS = [
  'lastname',
  'firstname'
];

app.get('/api/books', (req, res) => {

  const firstName = req.query.firstName;

  if (!firstName) {
    res.json({
      error: 'Missing required parameters',
    });
    return;
  }

  let queryString = ``;
  if(firstName=="*"){
    queryString = `SELECT * from test`
  }else{
     queryString = `SELECT * from authors WHERE firstname REGEXP '^${firstName}'`
  }

  pool.query(queryString,
         function(err, rows, fields) {
          if (err) throw err;

          if (rows.length > 0){
            res.json(
              rows.map((entry) => {
                const e = {};
                COLUMNS.forEach((c) => {
                  e[c] = entry[c];
                });
                return e;
                })
              );
            } else {
              res.json([]);
            }
      });

});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});




/*const express = require('express'),
      pm = require('promisemaker'),
      mysql = require('mysql'),
      devPassword = require('./dev-password');


const db = pm(
  mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: devPassword.unique(), // Edit to YOUR password in the file dev-password.js. Otherwise it will not work.
    database: "hits", //database: "hits",
    multipleStatements: true
  }),
  {
    rejectOnErrors: false,
    mapArgsToProps: {
      query: ["RowDataPacket"]
    }
  }
);

async function test() {
  let tables = await db.query('SHOW TABLES');
  console.log(tables);
}

async function allUsers() {
  let users = await db.query('SELECT * FROM users');
  console.log(users);
}

async function allMessages() {
  let messages = await db.query('SELECT * FROM messages');
  console.log(messages);
}

async function addUser(email, phone, username, firstname, lastname, password, gender) {
  let users = await db.query('INSERT INTO users SET?', {
    email: email,
    phone: phone,
    username: username,
    firstname: firstname,
    lastname: lastname,
    password: password,
    gender: gender
  });
  console.log(users);
}

async function updateUser() {

}

async function addMessage(message) {
  let messages = await db.query('INSERT INTO messages SET message');
  console.log(messages);
}

//addUser("testingThis@gmail.com", "67897098", "Stevo", "Stuart", "Bond", "whatever123", "Man");


addMessage("okej");
// If no error, it says its ok
db.connect((err) => {
  if(err){
    console.log('Error connecting to DB');
    return;
  }
  console.log('Connection established');
});

// The connection is terminated gracefully
// Ensures all previously enqueued queries are still
// before sending a COM_QUIT packet to the MySQL server.
db.end((err) => {
});
*/