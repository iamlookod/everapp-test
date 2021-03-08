const dotenv = require("dotenv");

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'localhost:27017';
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || 'app';

module.exports = {
  url: `mongodb://${MONGO_URI}/${MONGO_DB_NAME}`
};