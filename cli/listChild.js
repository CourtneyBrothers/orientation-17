const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("../bagOLoot.sqlite", err => {
  if (err) return console.log("error ");
  console.log("Connection to db successful");
});

module.exports.listChildren = () =>{
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM children", (err, allRows) => {
            // allRows is an array containing each row from the query
            allRows.forEach(each => {
              console.log(each.name);
            });
          });
        
      });
}

module.exports.listToy = (name) =>{
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM children", (err, allRows) => {
            // allRows is an array containing each row from the query
            allRows.forEach(each => {
              if (each.name === name){
                  console.log(each.toy);
              }
            });
          });
        
      });
}