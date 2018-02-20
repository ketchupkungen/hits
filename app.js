const express = require('express'),
      pm = require('promisemaker'),
      mysql = require('mysql'),
      devPassword = require('./dev-password');


const db = pm(
  mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: devPassword.unique(), // Edit to YOUR password in the file dev-password.js. Otherwise it will not work.
    database: "sitepoint", //database: "eia",
    multipleStatements: true
  }),
  {
    rejectOnErrors: false,
    mapArgsToProps: {
      query: ["RowDataPacket"]
    }
  }
);

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