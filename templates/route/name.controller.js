'use strict';

angular.module('<%= scriptAppName %>')
    .controller('<%= controllerName %>', function($q, <%= serviceName %>, <%= dataServiceName %>) {
        // ViewModell - The modell of the view.
        // This object (the controller itself) will be accessible for the view
        // Controllers are constructed, "newed" up, and provide a single new instance for every view
        /* jshint validthis: true */
        var vm = this;
        // Public variables
        vm.service = <%= serviceName %>;
        vm.someThing = null;
        vm.submitted = false;
        vm.<%= cameledName %> = null;
        vm.errors = null;
        vm.message = null;
        vm.exPublicVariable = null;
        // Public functions
        vm.change<%= classedName %> = change<%= classedName %>;

        // Private variables
        var exPrivateVariable = null;

        activate();

        ////////////////

        /**
         * Initialization logic
         */
        function activate() {
            vm.exPublicVariable = 'exampleVar';
            exPrivateVariable = 'exampleVar';
            var promises = [get<%= classedName %>(), collectThings()];
            return $q.all(promises).then(function() {
                //logger.info('Activated <%= classedName %> View');
            });

        }

        /**
         * Example public function that will be accessible for the view
         * Access the <%= dataServiceName %> directly
         */
        function change<%= classedName %>(form) {
            vm.submitted = true;
            if (form.$valid) {
                <%= dataServiceName %>.change<%= classedName %>(vm.<%= cameledName %>)
                    .then(function() {
                        vm.message = '<%= classedName %> successfully changed.';
                    })
                    .catch(function() {
                        //form.exampleField.$setValidity('mongoose', false);
                        vm.errors.other = 'Incorrect password';
                        vm.message = '';
                    });
            }

        }

        /**
         * Example private function that will NOT be accessible for the view
         * Collect information from the backend that will be stored only in this controller
         */
        function collectThings() {
            return <%= dataServiceName %>.getThingsFromBackend().then(function(data) {
                vm.someThing = data;
                return vm.someThing;
            });
        }

        /**
         * Example private function that will NOT be accessible for the view
         * Collect information from the backend that will be stored globally in the service
         */
        function get<%= classedName %>() {
            return <%= serviceName %>.get<%= classedName %>();
        }
    });
