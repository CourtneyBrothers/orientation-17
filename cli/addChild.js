const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("../bagOLoot.sqlite", err => {
  if (err) return console.log("error ");
  console.log("Connection to db successful");
});

module.exports.getChildren = () => {
  return [{}];
};


module.exports.addChild = (toy, name) => {
    console.log("toy and name",toy,name);

  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO children VALUES(
      null,
      "${toy}",
      "${name}",
      "Y",
      "N"
    )`, function(err){
        console.log({id:this.lastID})
        resolve( {id: this.lastID} );
    });
  });
};