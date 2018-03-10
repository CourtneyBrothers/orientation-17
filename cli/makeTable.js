const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("../bagOLoot.sqlite");
const { children} = require("../data/childrenToys");

module.exports.createTables = () => {
  return new Promise((resolve, reject) => {
    db
      .run(`DROP TABLE IF EXISTS children`)
      .run(
        `CREATE TABLE IF NOT EXISTS children (children_id INTEGER PRIMARY KEY AUTOINCREMENT, toy TEXT, name TEXT, delivered TEXT, naughty TEXT)`,
        err => {
          if (err) return reject(err);
          resolve(insertRows());
        }
      );
  });
};

const insertRows = () => {
  return Promise.all(children.map( ({toy, name, delivered, naughty}) => {
      return new Promise( (resolve, reject) => {
          db.run(`INSERT INTO children VALUES (null, "${toy}", "${name}", "${delivered}", "${naughty}")`, function(err) {
              if (err) return reject(err);
              resolve(this.lastID)
          });
      });

  }))
}