'use strict';

describe('Controller: <%= classedName %>Ctrl', function() {
  // load the controller's module
  beforeEach(module('<%= scriptAppName %>'));

  var <%= classedName %>Ctrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    <%= classedName %>Ctrl = $controller('<%= classedName %>Ctrl', {});
  }));

  it('should ...', function() {<% if(hasFilter('jasmine')) { %>
    expect(1).toEqual(1);<% } if(hasFilter('mocha')) { %>
    <%= expect() %>1<%= to() %>.equal(1);<% } %>
  });
});
