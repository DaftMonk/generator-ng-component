/* jshint -W117, -W030 */
'use strict';

describe('Service: <%= dataServiceName %>', function() {

    beforeEach(function() {
        // load the service's module
        module('<%= scriptAppName %>');
        // instantiate service
        bard.inject('<%= dataServiceName %>');
    });

    it('should do something', function() {<% if (hasFilter('jasmine')) { %>
        expect(!!<%= dataServiceName %>).toBe(true);<% } if (hasFilter('mocha')) { %>
        expect(!!<%= dataServiceName %>).to.be.true;<% } %>
    });

});

