'use strict';

angular.module('mock.<%= dataServiceName %>', [])
    .factory('<%= dataServiceName %>', function($q) {
        // Public API - mocking the public interface is enough
        var service = {
            change<%= classedName %>: change<%= classedName %>,
            get<%= classedName %>: get<%= classedName %>,
            getThingsFromBackend: getThingsFromBackend,
        };

        return service;

        ////////////////

        /**
         * Example stub method that returns a promise, e.g. if original method returned a promise
         */
        function change<%= classedName %>() {
            return $q.when([]);
        }
        function getThingsFromBackend() {
            return $q.when('things');
        }
        function get<%= classedName %>() {
            var mock<%= classedName %> = {
                id: 8888,
                name: 'test <%= cameledName %>'
            };
            return $q.when(mock<%= classedName %>);
        }
    });
