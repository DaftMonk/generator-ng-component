'use strict';

describe('Service: <%= serviceName %>', function() {

    beforeEach(function() {
        // load the service's module
        module('<%= scriptAppName %>');
        // instantiate service
        bard.inject('<%= serviceName %>');
    });

    it('should do something', function() {<% if (hasFilter('jasmine')) { %>
        expect(!!<%= serviceName %>).toBe(true);<% } if (hasFilter('mocha')) { %>
        expect(!!<%= serviceName %>).to.be.true;<% } %>
    });

});
