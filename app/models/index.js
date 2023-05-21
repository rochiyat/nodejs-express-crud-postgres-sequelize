const dbConfig = require("../configs/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAlias: false,

    pool: {
        max: dbConfig.max,
        min: dbConfig.min,
        acquire: dbConfig.acquire,
        idle: dbConfig.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.postings = require('./posting.model.js')(sequelize, Sequelize);

module.exports = db;