'use strict';

describe('Controller: <%= classedName %>Controller', function () {

  // load the controller's module
  beforeEach(module('<%= scriptAppName %>'));

  var <%= classedName %>Controller;

  // Initialize the controller
  beforeEach(inject(function ($controller) {
    <%= classedName %>Controller = $controller('<%= classedName %>Controller', {});
  }));

  it('should ...', function () {<% if (hasFilter('jasmine')) { %>
    expect(1).toEqual(1);<% } if (hasFilter('mocha')) { %>
    expect(1).to.equal(1);<% } %>
  });
});
