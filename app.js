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
