/* jshint -W117, -W030 */
'use strict';

describe('Service: <%= cameledName %>Service', function() {

    beforeEach(function() {
        // load the service's module
        module('<%= scriptAppName %>');
        // instantiate service
        bard.inject('<%= cameledName %>Service');
    });

    it('should do something', function() {<% if (hasFilter('jasmine')) { %>
        expect(!!<%= cameledName %>Service).toBe(true);<% } if (hasFilter('mocha')) { %>
        expect(!!<%= cameledName %>Service).to.be.true;<% } %>
    });

});
