require('dotenv').config();

const getClientConfig = async (clientKey) => {
  const config = {
    freshbiteId: process.env.SQL_DB_NAME_FRESH,
    mealkartId: process.env.SQL_DB_NAME_MEAL,
    tastytiffinId: process.env.SQL_DB_NAME_TIFFIN
  };

  if (!config[clientKey]) return null;

  return {
    host: process.env.SQL_DB_HOST,
    database: config[clientKey],
    username: process.env.SQL_DB_USERNAME,
    password: process.env.SQL_DB_PASSWORD
  };
};

module.exports = { getClientConfig };