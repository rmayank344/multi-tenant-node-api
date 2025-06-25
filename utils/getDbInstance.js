const { Sequelize } = require('sequelize');
const { getClientConfig } = require('../config/clientDbMap');
const USERMODEL = require('../models/user_model');

const syncedClients = new Set();

const getClientDBInstance = async (clientId) => {
  const clientConfig = await getClientConfig(clientId);

  if (!clientConfig) return null;

  const sequelize = new Sequelize(clientConfig.database, clientConfig.username, clientConfig.password, {
    host: clientConfig.host,
    dialect: 'mysql',
    logging: false,
  });

  // Define model attached to DB before sync
  USERMODEL(sequelize);

  // Sync only once per client
  if (!syncedClients.has(clientId)) {
    await sequelize.sync();
    syncedClients.add(clientId);
  }

  return sequelize;
};

module.exports = { getClientDBInstance };