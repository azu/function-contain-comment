/**
 * User: azu
 * Date: 2013/05/18
 * License: MIT License
 */
var assert = require("assert")
describe('Function', function (){
    describe('When function contain /* comment */', function (){
        it('should contain comment', function (){
            var result = (function(){/*comment*/}).toString();
            var isContain = result.indexOf("comment") !== -1;
            assert.ok(isContain, "result contain comment");
        });
    });
    describe('When function contain multiline /*comment*/', function (){
        it('should contain comment', function (){
            var result = (function (){/*
            comment
            */}).toString();
            var isContain = result.indexOf("comment") !== -1;
            assert.ok(isContain, "result contain comment");
        });
    });
    describe('When function contain //comment ', function (){
        it('should contain comment', function (){
            var result = (function (){
                // comment
            }).toString();
            var isContain = result.indexOf("// comment") !== -1;
            assert.ok(isContain, "result contain comment");
        });
    });
});