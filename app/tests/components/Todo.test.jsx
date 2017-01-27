var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('../../../node_modules/jquery/dist/jquery.js');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo')

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist()
    })
})