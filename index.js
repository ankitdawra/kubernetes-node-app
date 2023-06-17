const express = require('express');
const mysql = require('mysql');
const app = express();
const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB } = process.env;
const connection = mysql.createConnection({
  host     : MYSQL_HOST,
  user     : MYSQL_USER,
  password : MYSQL_PASSWORD,
  database : MYSQL_DB
});
const port = 5000;

app.use(express.static('public'));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  const get_users_query = 'SELECT * from user_data;';
  connection.query(get_users_query, function (err, result) {
    if (err) {
      console.log(err);
      throw err;
    }
    res.render("index", {users: result});
  });
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});