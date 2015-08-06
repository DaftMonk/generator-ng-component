'use strict';

/**
 * Decorate an already existing service
 */
angular.module('<%= scriptAppName %>')
    .config(function($provide) {
        $provide.decorator('<%= cameledName %>', function($delegate) {
            // decorate the $delegate
            // TODO show some examples
            return $delegate;
        });
    });
