/* jshint -W117, -W030 */
'use strict';

angular.module('mock.<%= cameledName %>Config', [])
    .factory('<%= cameledName %>Config', function() {
        // Public API - mocking the public interface is enough
        this.setExConfigVariable = sinon.spy();

        this.$get = function() {
            return {
                config: sinon.spy()
            };
        };
    });
