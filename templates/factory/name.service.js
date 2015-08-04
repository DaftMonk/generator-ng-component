'use strict';

angular.module('<%= scriptAppName %>')
    .factory('<%= cameledName %>Service', function() {
        // Public API
        var service = {
            exPublicVariable: null,
            exPublicFunction: exPublicFunction,
        };
        // Private variables
        var exPrivateVariable = null;

        return service;

        ////////////////

        /**
         * Example public function
         * that will be accessible for the controllers, services
         */
        function exPublicFunction() {
            exPrivateFunction();
            exPrivateVariable = 'foo';
            service.exPublicVariable = 'bart';
        }

        /**
         * Example private function
         * that will NOT be accessible for the controllers, services
         */
        function exPrivateFunction() {

        }
    });
