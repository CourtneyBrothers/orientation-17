const sqlite3 = require('sqlite3').verbose();
const { createTables } = require("./makeTable");
const { addChild } = require("./addChild");
const {listChildren} = require("./listChild");
const {listToy} = require("./listChild");
const {removeToy} =require("./removeToy");
const {updateStatus,updateNaughtyStatus } = require("./updateStatus");


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

   removeToy(process.argv[3],process.argv[4]);

} else if (process.argv[2] === "ls" && [process.argv[3]]){
  listToy(process.argv[3]);
} else if (process.argv[2]==="ls"){
  listChildren();
} else if (process.argv[2]==="delivered"){
  updateStatus(process.argv[3]);
} else if (process.argv[2]==="naughy"){
  updateNaughtyStatus(process.argv[3]);
}

console.log(process.argv[2]);