const express = require('express');
const pm = require('promisemaker');
const mysql = require('mysql');

const db = pm(
  mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Password94",
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

//test();

allUsers();
