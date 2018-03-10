const sqlite3 = require('sqlite3').verbose();
const { createTables } = require("./makeTable");
const { addChild } = require("./addChild");
const {listChildren} = require("./listChild");
const {listToy} = require("./listChild");

(function createDb() {
  new sqlite3.Database('../bagOLoot.sqlite', () => {
    createTables()
    .then( (data) => {
      console.log("children ids", data);
    })
    .catch( (err) => {
      console.log("oops", err);
    });
  });
}());

if (process.argv[2] === "add"){
    addChild(process.argv[3],process.argv[4]).then(data=>{
        console.log(data,"data");
    })
} else if (process.argv[2] === "remove"){
   getChildren();

   removeToy();
} else if (process.argv[2] === "ls" && [process.argv[3]]){
  listToy(process.argv[3]);
} else if (process.argv[2]==="ls"){
  listChildren();
}

console.log(process.argv[2]);