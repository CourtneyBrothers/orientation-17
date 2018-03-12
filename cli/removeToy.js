const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("../bagOLoot.sqlite", err => {
  if (err) return console.log("error ");
  console.log("Connection to db successful");
});


module.exports.removeToy = (name) =>{

  return new Promise((resolve, reject) => {
  
    // db.run('DROP TABLE IF EXISTS children')
    db.run(`DELETE FROM children WHERE name="${name}"and toy="${toy}`, function(err) {
        if (err) {
            return err;
        //   return console.error(err.message);
        }
      });
  })
};