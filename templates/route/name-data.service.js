'use strict';

angular.module('<%= scriptAppName %>')
    .factory('<%= dataServiceName %>', function($http, $q, <%= classedName %>) {
        // Public API
        var service = {
            change<%= classedName %>: change<%= classedName %>,
            get<%= classedName %>: get<%= classedName %>,
            getThingsFromBackend: getThingsFromBackend,
        };

        return service;

        ////////////////

        /**
         * Example public function
         */
        function getThingsFromBackend() {
            return $q.when('something from the backend');
        }

        /**
         * Send a simple http request to the backend
         */
        function get<%= classedName %>() {
            return $http.get('/api/<%= name %>')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(error) {
                var msg = 'query for <%= name %>s failed. ' + error.data.description;
                //logger.error(msg);
                return $q.reject(msg);
            }
        }

        /**
         * Update the model on the backend used the resource service
         */
        function change<%= classedName %>(<%= cameledName %>) {
            return <%= classedName %>.changeSomething(<%= cameledName %>,
                function(data) {
                    // After a successful save we can load the new model
                    // and do something fancy with it.
                    var <%= cameledName %> = <%= classedName %>.get();
                    console.log(<%= cameledName %>);
                    return data;
                },
                function(err) {
                    return err;
                }).$promise;
        }
    });
