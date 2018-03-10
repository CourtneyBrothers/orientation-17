const {assert: {equal,isFunction,isObject,isArray,isNumber,isPromise}} = require('chai');
const {addChild} = require("../cli/addChild");
//return doSomethingAsync().should.eventually.equal("foo");
const {should} = require('chai');
const { createTables } = require("../cli/makeTable");



describe('add toy for a Child',()=>{

    let newChild = {
        children_id:5,
        name: "Tim",
        toy:"Makeup set",
        delivered:"N",
        naughty:"N"
      };
    beforeEach((done)=>{
        createTables()
        .then(()=>{
            done()
        });
    });
    it('should be a function',()=>{
        isFunction(addChild);
    });

    it("should return an object", () => {
        return addChild(newChild).then(data => {
          isObject(data);
        });
      });
      it("should add a new item to the db", () => {
        return addChild(newChild).then(obj => {
            console.log(obj,"obj");
          equal(5, obj.id);
        });
      });

});