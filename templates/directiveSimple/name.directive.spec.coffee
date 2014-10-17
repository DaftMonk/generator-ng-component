'use strict'

describe 'Directive: <%= cameledName %>', ->

  # load the directive's module
  beforeEach module '<%= scriptAppName %>'
  element = undefined
  scope = undefined
  beforeEach inject ($rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    element = angular.element '<<%= _.dasherize(name) %>></<%= _.dasherize(name) %>>'
    element = $compile(element) scope<% if (hasFilter('jasmine')) { %>
    expect(element.text()).toBe 'this is the <%= cameledName %> directive'<% } if (hasFilter('mocha')) { %>
    expect(element.text()).to.equal 'this is the <%= cameledName %> directive'<% } %>
