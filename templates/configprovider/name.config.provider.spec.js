/* jshint -W117, -W030 */
'use strict';

describe('Service: <%= cameledName %>Config', function() {

    // load the service's module
    beforeEach(module('<%= scriptAppName %>'));

    // instantiate service
    var <%= cameledName %>Config;
    beforeEach(inject(function(_<%= cameledName %>Config_) {
        <%= cameledName %>Config = _<%= cameledName %>Config_;
    }));

    it('should do something', function() {<% if (hasFilter('jasmine')) { %>
        expect(!!<%= cameledName %>Config).toBe(true);<% } if (hasFilter('mocha')) { %>
        expect(!!<%= cameledName %>Config).to.be.true;<% } %>
    });

});
