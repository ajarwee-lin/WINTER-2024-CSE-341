const express = require('express');
const bodyparser = require('body-parser');
const Mongodb = require('./config/db.config');
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const app = express();

app 
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/', require('./routes'));

mongodb.initDB((err, db) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Connected to DB and listening on ${port}`);
        });
    }
});
