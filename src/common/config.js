const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.join(__dirname, '../../.env')
});

module.exports = {
  PORT: 9999,
  NODE_ENV: process.env.NODE_ENV,
  MONGO_CONNECTION_STRING:
    'mongodb+srv://react-english-learn:react-english-learn@cluster0.qjbpy0x.mongodb.net/',
  AUTH_MODE: process.env.AUTH_MODE === 'true',
  MAX_SYMBOLS_PER_OBJECT: 10000,
  MAX_OPTIONAL_PROPERTIES: 100,
  MIN_PASSWORD_LENGTH: 8,
  LOGS_DIR: path.join(__dirname, '../../logs'),
  JWT_SECRET_KEY: 'JWT_SECRET_KEY',
  JWT_EXPIRE_TIME: '4h',
  JWT_REFRESH_SECRET_KEY: 'JWT_REFRESH_SECRET_KEY',
  JWT_REFRESH_EXPIRE_TIME: 4.5 * 60 * 60
};
