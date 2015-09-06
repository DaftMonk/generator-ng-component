'use strict'

describe 'Directive: <%= cameledName %>', ->

  # load the directive's module and view
  beforeEach module '<%= scriptAppName %>'
  beforeEach module '<%= htmlUrl %>'
  element = undefined
  scope = undefined
  beforeEach inject ($rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    element = angular.element '<<%= lodash.dasherize(name) %>></<%= lodash.dasherize(name) %>>'
    element = $compile(element) scope
    scope.$apply()<% if (hasFilter('jasmine')) { %>
    expect(element.text()).toBe 'this is the <%= cameledName %> directive'<% } if (hasFilter('mocha')) { %>
    <%= expect() %>element.text()<%= to() %>.equal 'this is the <%= cameledName %> directive'<% } %>
