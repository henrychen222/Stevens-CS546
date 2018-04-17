// const MongoClient = require("mongodb").MongoClient;;

// const settings = {
//     mongoConfig: {
//         serverUrl: "mongodb://localhost:27017/",
//         database: "lab7-recipes"
//     }
// };

// let fullMongoUrl = settings.mongoConfig.serverUrl + settings.mongoConfig.database;
// let _connection = undefined

// let connectDb = () => {
//     if (!_connection) {
//         _connection = MongoClient.connect(fullMongoUrl)
//             .then((db) => {
//                 return db;
//             });
//     }

//     return _connection;
// };

// module.exports = connectDb;



const MongoClient = require("mongodb").MongoClient;
const settings = {
  mongoConfig: {
    serverUrl: "mongodb://localhost:27017/",
    database: "lab7-recipes"
  }
};
const mongoConfig = settings.mongoConfig;

let _connection = undefined;
let _db = undefined;

module.exports = async () => {
  if (!_connection) {
    _connection = await MongoClient.connect(mongoConfig.serverUrl);
    _db = await _connection.db(mongoConfig.database);
  }

  return _db;
};

