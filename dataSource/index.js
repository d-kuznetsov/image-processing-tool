const lowdb = require("lowdb");
const FileAsync = require("lowdb/adapters/FileAsync");

const adapter = new FileAsync("./dataSource/data.json");
const dataSourcePreparing = lowdb(adapter);

module.exports = {
  getDataSource: () => dataSourcePreparing,
};
