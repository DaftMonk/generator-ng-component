'use strict';

/**
 * This component (service) represents the <%= classedName %>
 * model at the backend.
 * Usage:
 * https://docs.angularjs.org/api/ngResource/service/$resource
 * default actions:
 * get, save, query, remove, delete
 */
angular.module('<%= scriptAppName %>')
    .factory('<%= classedName %>', function($resource) {
    return $resource('/api/<%= name %>/:id/:controller', {
        id: '@_id'
    }, {
        // Custom action to start a PUT http request with additional parameters
        changeSomething: {
            method: 'PUT',
            params: {
                controller: 'something'
            }
        },
        // Overwritten get action
        get: {
            method: 'GET',
            params: {
                id: 'me'
            }
        }
    });
});
