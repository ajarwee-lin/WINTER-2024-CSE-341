const dotenv = require('dotenv');
dotenv.config();
const Mongoclient = require('mongodb').MongoClient;

let _db;

const initDB = (callback) => {
    if (db) {
        console.log('Db is already initialized');

        return callback(null, db);
    }
    Mongoclient.connect(process.env.MONGODB_URI,)
    .then(client => {
        _db = client.db();
        callback(null, _db);
    })
    .catch(err => {
        callback(err);
    });
};

const getDB = () => {
    if (!_db) {
        throw Error('Db not initialized');
    }
    return _db;
};

module.exports = {
    initDB,
    getDB
}