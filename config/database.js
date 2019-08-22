const Sequelize = require("sequelize");

module.exports = new Sequelize("codegig", "postgres", "Munmun12", {
  host: "localhost",
  dialect: "postgres",
  operatorAliases: false
});
