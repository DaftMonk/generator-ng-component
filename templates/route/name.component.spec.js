'use strict';

describe('Component: <%= classedName %>Component', function() {
  // load the controller's module
  beforeEach(module('<%= scriptAppName %>'));

  var <%= classedName %>Component;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    <%= classedName %>Component = $componentController('<%= name %>', {});
  }));

  it('should ...', function() {<% if(hasFilter('jasmine')) { %>
    expect(1).toEqual(1);<% } if(hasFilter('mocha')) { %>
    <%= expect() %>1<%= to() %>.equal(1);<% } %>
  });
});
