'use strict';

describe('Filter: <%= cameledName %>', function () {

  // load the filter's module
  beforeEach(module('<%= scriptAppName %>'));

  // initialize a new instance of the filter before each test
  var <%= cameledName %>;
  beforeEach(inject(function ($filter) {
    <%= cameledName %> = $filter('<%= cameledName %>');
  }));

  it('should return the input prefixed with "<%= cameledName %> filter:"', function () {
    var text = 'angularjs';<% if (hasFilter('jasmine')) { %>
    expect(<%= cameledName %>(text)).toBe('<%= cameledName %> filter: ' + text);<% } if (hasFilter('mocha')) { %>
    expect(<%= cameledName %>(text)).to.equal('<%= cameledName %> filter: ' + text);<% } %>
  });

});
