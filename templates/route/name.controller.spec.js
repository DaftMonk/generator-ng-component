'use strict';

describe('Controller: <%= classedName %>Controller', function () {

  // load the controller's module
  beforeEach(module('<%= scriptAppName %>'));

  var <%= classedName %>Controller, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    <%= classedName %>Controller = $controller('<%= classedName %>Controller', {
      $scope: scope
    });
  }));

  it('should ...', function () {<% if (hasFilter('jasmine')) { %>
    expect(1).toEqual(1);<% } if (hasFilter('mocha')) { %>
    <%= expect() %>1<%= to() %>.equal(1);<% } %>
  });
});
