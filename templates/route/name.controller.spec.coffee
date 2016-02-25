'use strict'

describe 'Component: <%= classedName %>Component', ->

  # load the controller's module
  beforeEach module('<%= scriptAppName %>')
  <%= classedName %>Component = undefined
  scope = undefined

  # Initialize the controller and a mock scope
  beforeEach inject(($componentController, $rootScope) ->
    scope = $rootScope.$new()
    <%= classedName %>Component = $componentController('<%= classedName %>Component', $scope: scope)
  )

  it 'should ...', -><% if (hasFilter('jasmine')) { %>
    expect(1).toEqual 1<% } if (hasFilter('mocha')) { %>
    <%= expect() %>1<%= to() %>.equal 1<% } %>
