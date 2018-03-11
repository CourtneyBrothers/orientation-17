const {assert: {equal,isFunction,isObject,isArray,isNumber,isPromise}} = require('chai');
const {listToy} = require("../cli/listChild");
//return doSomethingAsync().should.eventually.equal("foo");
const {should} = require('chai');
const { createTables } = require("../cli/makeTable");




describe('list all Toy recieving presents',()=>{
    // beforeEach((done)=>{
    //     createTables()
    //     .then(()=>{  // probably unnecessary but may want to ask about this
    //         done()
    //     });
    // });
    it('should be a function',()=>{
        isFunction(listToy);
    });
});