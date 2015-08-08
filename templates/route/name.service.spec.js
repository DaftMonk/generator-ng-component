/* jshint -W117, -W030 */
'use strict';

describe('Service: <%= serviceName %>', function() {

    beforeEach(function() {
        // load the service's module
        module('<%= scriptAppName %>');
        // include previous module containing mocked service which will override actual service
        // , because it's declared later
        module('mock.<%= dataServiceName %>');
        // instantiate service
        bard.inject('<%= serviceName %>', '<%= dataServiceName %>');
    });

    it('should do something', function() {<% if (hasFilter('jasmine')) { %>
        expect(!!<%= serviceName %>).toBe(true);<% } if (hasFilter('mocha')) { %>
        expect(!!<%= serviceName %>).to.be.true;<% } %>
    });

});
