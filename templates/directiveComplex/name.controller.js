'use strict';

angular.module('<%= scriptAppName %>')
    .controller('<%= classedName %>Controller', function() {
        // ViewModell - The modell of the view.
        // This object (the controller itself) will be accessible for the view
        // Controllers are constructed, "newed" up, and provide a single new instance for every view
        /* jshint validthis: true */
        var vm = this;
        // Public variables
        vm.exPublicVariable = null;
        // Public functions
        vm.exPublicFunction = exPublicFunction;

        // Private variables
        //var exPrivateVariable = null;

        activate();

        ////////////////

        /**
         * Initialization logic
         */
        function activate() {
            vm.exPublicVariable = 'exampleVar';
        }

        /**
         * Example public function that will be accessible for the view
         */
        function exPublicFunction() {

        }

        /**
         * Example private function that will NOT be accessible for the view
         */
        //function exPrivateFunction() {
        //
        //}
    });
