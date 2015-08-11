import Book from '../src/book/book';
var expect = require('chai').expect;
var React = require('react');

describe("Book", function() {
  it("outputs html", function() {
    var result = React.renderToString(<Book />);
    var expectation = 'h1';
    expect(result).to.contain(expectation);
  });
});