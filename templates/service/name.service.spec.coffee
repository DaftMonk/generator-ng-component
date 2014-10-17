'use strict'

describe 'Service: <%= cameledName %>', ->

  # load the service's module
  beforeEach module '<%= scriptAppName %>'

  # instantiate service
  <%= cameledName %> = undefined
  beforeEach inject (_<%= cameledName %>_) ->
    <%= cameledName %> = _<%= cameledName %>_

  it 'should do something', -><% if (hasFilter('jasmine')) { %>
    expect(!!<%= cameledName %>).toBe true<% } if (hasFilter('mocha')) { %>
    expect(!!<%= cameledName %>).to.be.true<% } %>
