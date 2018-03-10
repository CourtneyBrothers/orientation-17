const {assert: {equal,isFunction,isObject,isArray,isNumber,isPromise}} = require('chai');
const {removeToy} = require("../cli/removeToy");
//return doSomethingAsync().should.eventually.equal("foo");
const {should} = require('chai');
const { createTables } = require("../cli/makeTable");
const {expect} = require("chai");

describe('remove toy for a Child',()=>{
    afterEach((done)=>{
        createTables()
        .then(()=>{
            done()
        });
    });
    it('should be a function',()=>{
        isFunction(removeToy);
    });
    it('should return an undefined if children id >4 is passed in',()=>{
        expect(removeToy(10)).to.be.an('undefined');
    });
});
