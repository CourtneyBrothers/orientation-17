const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("../bagOLoot.sqlite", err => {
  if (err) return console.log("error ");
  console.log("Connection to db successful");
});
module.exports.getChildren = ()=> {

}
module.exports.removeToy = (id) =>{
    db.run('DROP TABLE IF EXISTS children')
    .run(
        'CREATE TABLE IF NOT EXISTS children (children_id INTEGER PRIMARY KEY AUTOINCREMENT, toy TEXT, name TEXT, delivered TEXT, naughty TEXT)')
    db.run(`DELETE FROM children WHERE rowid=?`, id, function(err) {
        if (err) {
            return err;
        //   return console.error(err.message);
        }
        console.log(`Row(s) deleted ${this.changes}`);
      });
      db.close((err) => {
        if (err) {
            return err;
        //   return console.error(err.message);
        }
      });
      //callback  
}