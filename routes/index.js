const routes = require('express').Router();

routes.get('/', (req, res, next) => {
    res.json('Awesome Person');
});


mondule.exports = routes;
