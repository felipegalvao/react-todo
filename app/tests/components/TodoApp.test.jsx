var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('../../../node_modules/jquery/dist/jquery.js');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp')

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist()
    })
})