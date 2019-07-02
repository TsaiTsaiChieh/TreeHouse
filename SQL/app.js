const express = require('express');
const mysql = require('mysql');
const app = express();


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "07081009",
    database: "nodemysql"
});

// connect DB
db.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log("Connected!");
});
// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);

        res.send('Database created...');
    });
});
// Create table
app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE posts(id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), body VARCHAR(255))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Posts table created...');
    });
});

// Insert post 1
app.get('/addpost1', (req, res) => {
    let post = { title: "Post one", body: "This is post number one" };
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Posts 2 added...');
    });
});

// Select posts
app.get('/getposts', (req, res) => {
    // let post = { title: "Post two", body: "This is post number two" };
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.dir(result);
        res.send('Posts fetched...');
    });
});

// Select single post
app.get('/getposts/:id', (req, res) => {
    console.log(req.params.id);
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.dir(result);
        res.send('Post fetched...');
    });
});

// Update post 
app.get('/updateposts/:id', (req, res) => {
    let newTitile = 'Updated Title';
    let sql = `UPDATE posts SET title = '${newTitile}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.dir(result);
        res.send('Post updated...');
    });
});

// Delete post 
app.get('/deleteposts/:id', (req, res) => {
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.dir(result);
        res.send('Post deleted...');
    });
});
app.listen(8888, () => {
    console.log('App is running on localhost: 8888 by Tsai');
});