const express = require('express'),
      pm = require('promisemaker'),
      mysql = require('mysql'),
      devPassword = require('./dev-password');


const db = pm(
  mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: devPassword.unique(), // Edit to YOUR password in the file dev-password.js. Otherwise it will not work.
    database: "hits"
  }),
  {
    rejectOnErrors: false,
    mapArgsToProps: {
      query: ["rows", "fields"]
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

test();

allUsers();
