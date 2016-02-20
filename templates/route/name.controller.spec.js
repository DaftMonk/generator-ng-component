'use strict';

describe('Component: <%= cameledName %>Component', function () {

  // load the controller's module
  beforeEach(module('<%= scriptAppName %>'));

  var <%= cameledName %>Component, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    <%= cameledName %>Component = $componentController('<%= cameledName %>Component', {
      $scope: scope
    });
  }));

  it('should ...', function () {<% if (hasFilter('jasmine')) { %>
    expect(1).toEqual(1);<% } if (hasFilter('mocha')) { %>
    <%= expect() %>1<%= to() %>.equal(1);<% } %>
  });
});
