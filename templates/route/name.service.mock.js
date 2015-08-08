'use strict';

angular.module('mock.<%= serviceName %>', [])
    .factory('<%= serviceName %>', function($q) {
        // Public API - mocking the public interface is enough
        var service = {
            <%= cameledName %>FromBackend: null,
            get<%= classedName %>: get<%= classedName %>,
        };
        return service;

        ////////////////

        /**
         * Example stub method that returns a promise, e.g. if original method returned $http.get(...)
         */
        function get<%= classedName %>() {
            var mock<%= classedName %> = {
                id: 8888,
                name: 'test <%= cameledName %>'
            };
            return $q.when(mock<%= classedName %>);
        }
    });
