const sqlite3 = require('sqlite3').verbose();
const { createTables } = require("./makeTable");
const { addChild } = require("./addChild");
const {listChildren} = require("./listChild");
const {listToy} = require("./listChild");
const {removeToy} =require("./removeToy");
const {updateStatus,updateNaughtyStatus } = require("./updateStatus");
const db = new sqlite3.Database("../bagOLoot.sqlite", err => {
  if (err) return console.log("error ");
  console.log("Connection to db successful");
});


if (process.argv[2] === "add"){
  
    addChild(process.argv[3],process.argv[4]).then(data=>{
        console.log(data,"data");
  })
} else if (process.argv[2] === "remove"){
   removeToy(process.argv[3],process.argv[4]);
}else if (process.argv[2] === "ls" && process.argv[3] != undefined){
  listToy(process.argv[3]);
} else if (process.argv[2]==="ls"){
  listChildren();
} else if (process.argv[2]==="delivered"){
  updateStatus(process.argv[3]);
} else if (process.argv[2]==="naughty"){
  updateNaughtyStatus(process.argv[3]);
}

console.log(process.argv[2]);