const sqlite3 = require('sqlite3').verbose();
const { createTables } = require("./makeTable");

module.exports = (function createDb() {
    new sqlite3.Database('../bagOLoot.sqlite', () => {
      createTables()
      .then( (data) => {
        console.log("children ids", data);
      })
      .catch( (err) => {
        console.log("error", err);
      });
    });
  }());