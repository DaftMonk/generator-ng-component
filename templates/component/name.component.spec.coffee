'use strict'

describe 'Component: <%= cameledName %>', ->

  # load the component's module
  beforeEach module '<%= scriptAppName %>'
  <%= cameledName %>Component = undefined
  scope = undefined

  # Initialize the component and a mock scope
  beforeEach inject ($componentController, $rootScope) ->
    scope = $rootScope.$new()
    <%= cameledName %>Component = $componentController '<%= cameledName %>',
      $scope: scope

  it 'should ...', -><% if (hasFilter('jasmine')) { %>
    expect(1).toEqual 1<% } if (hasFilter('mocha')) { %>
    <%= expect() %>1<%= to() %>.equal 1<% } %>
