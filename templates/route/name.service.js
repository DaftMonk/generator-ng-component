'use strict';

angular.module('<%= scriptAppName %>')
    .factory('<%= serviceName %>', function(<%= dataServiceName %>) {
        // Public API
        var service = {
            // This variable will be accessible in every place where the service will be injected
            // And because the service is a singleton only 1 copy of this variable will exists
            // It is useful to store variables in services situations like storing a basket, or user information
            <%= cameledName %>FromBackend: null,
            get<%= classedName %>: get<%= classedName %>,
        };
        // Private variables
        //var exPrivateVariable = null;

        return service;

        ////////////////

        /**
         * Example public function
         * that will be accessible for the controllers, services
         * Call a function on the dataService and store the response in this service
         */
        function get<%= classedName %>() {
            return <%= dataServiceName %>.get<%= classedName %>()
                    .then(success)
                    .catch(fail);

            function success(response) {
                service.<%= cameledName %>FromBackend = response.data;
            }

            function fail(error) {
                service.<%= cameledName %>FromBackend = null;
                return error;
            }
        }

        /**
         * Example private function
         * that will NOT be accessible for the controllers, services
         */
        //function exPrivateFunction() {
        //    exPrivateVariable = null;
        //}
    });
