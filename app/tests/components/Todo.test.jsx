var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('../../../node_modules/jquery/dist/jquery.js');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo')

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist()
    });

    it('should call onToggle prop with id on click', () => {
        var todoData = {
            id: 199,
            text: 'write todo.test.jsx',
            completed: true
        };

        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);

        var $el = $(ReactDOM.findDOMNode(todo));
        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(todoData.id);
    });
});