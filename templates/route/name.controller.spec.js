'use strict';

describe('Component: <%= lowerCameledName %>Component', function () {

  // load the controller's module
  beforeEach(module('<%= scriptAppName %>'));

  var <%= lowerCameledName %>Component, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    <%= lowerCameledName %>Component = $componentController('<%= lowerCameledName %>Component', {
      $scope: scope
    });
  }));

  it('should ...', function () {<% if (hasFilter('jasmine')) { %>
    expect(1).toEqual(1);<% } if (hasFilter('mocha')) { %>
    <%= expect() %>1<%= to() %>.equal(1);<% } %>
  });
});
