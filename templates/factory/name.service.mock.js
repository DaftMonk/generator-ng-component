'use strict';

angular.module('mock.<%= cameledName %>Service', [])
    .factory('<%= cameledName %>Service', function() {
        // Public API - mocking the public interface is enough
        var service = {
            exPublicVariable: null,
            exPublicFunction: exPublicFunction,
        };
        return service;

        ////////////////

        /**
         * Example mocked public function
         */
        function exPublicFunction() {
            return {
                // some fake data or promise
            };

            // example stub method that returns a promise, e.g. if original method returned $http.get(...)
            //var mockUser = {
            //    id: 8888,
            //    name: "test user"
            //};
            //return $q.when(mockUser);
        }
    });
