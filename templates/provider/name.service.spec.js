'use strict';

describe('Service: <%= cameledName %>', function() {

    // load the service's module
    beforeEach(module('<%= scriptAppName %>'));

    // instantiate service
    beforeEach(function() {
        bard.inject('<%= cameledName %>');
    });

    it('should do something', function() {<% if (hasFilter('jasmine')) { %>
        expect(!!<%= cameledName %>).toBe(true);<% } if (hasFilter('mocha')) { %>
        expect(!!<%= cameledName %>).to.be.true;<% } %>
    });

});
