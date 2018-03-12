const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("../bagOLoot.sqlite", err => {
  if (err) return console.log("error ");
  console.log("Connection to db successful");
});


module.exports.updateStatus = (name) => {

    return new Promise((resolve, reject) => {
        let data = ["Y", name];
        let sql = `UPDATE children
        SET delivered = "Y"
        WHERE name = "${name}"`;
        db.run(sql, data, function(err) {
            if (err) {
            return console.error(err.message);
            }
            console.log(`Row(s) updated: ${this.changes}`);
        
        });
        db.close();
    })
}

module.exports.updateNaughtyStatus = (name) => {

    return new Promise((resolve, reject) => {

        db.run(`UPDATE children
        SET naughty = "Y"
        WHERE name = "${name}"`, function(err) {
            if (err) {
            return console.error(err.message);
            }
            console.log(`Row(s) updated: ${this.changes}`);
        
        });
        db.close();
    })
}