'use strict'

describe 'Controller: <%= classedName %>Controller', ->

  # load the controller's module
  beforeEach module '<%= scriptAppName %>'
  <%= classedName %>Controller = undefined
  scope = undefined

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    <%= classedName %>Controller = $controller '<%= classedName %>Controller',
      $scope: scope

  it 'should ...', -><% if (hasFilter('jasmine')) { %>
    expect(1).toEqual 1<% } if (hasFilter('mocha')) { %>
    <%= expect() %>1<%= to() %>.equal 1<% } %>
