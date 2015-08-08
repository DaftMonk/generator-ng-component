'use strict';

/**
 * Usage:
 * <nsl-test-dir
 *      config="vm.config"
 *      notify="{{vm.notify}}"
 *      on-change="vm.onChange()">
 * </nsl-test-dir>
 */
angular.module('<%= scriptAppName %>')
    .directive('<%= prefixedCameledName %>', function() {
        var directive = {
            restrict: 'EA',
            scope: {
                // isolated scope
                // https://weblogs.asp.net/dwahlin/creating-custom-angularjs-directives-part-2-isolate-scope
                // You can access this variables in the directive
                config: '=',    // Two way bounded variable
                notify: '@',    // One way bounded variable
                onChange: '&',   // Method from the outer scope
            },
            controller: '<%= classedName %>Controller',
            controllerAs: 'vm',
            bindToController: true, // because the scope is isolated
            templateUrl: '<%= htmlUrl %>',
            link: link
        };

        return directive;

        ////////////////

        function link(scope, element) {
            // Manipulate the DOM here if it is really necessary
            //console.log('LINK: scope.vm.config = %s', scope.vm.config);
            //console.log('LINK: scope.vm.notify = %s', scope.vm.notify);
            //console.log('LINK: scope.vm.exPublicVariable = %s', scope.vm.exPublicVariable);
            // Directives should clean up after themselves
            element.on('$destroy', function() {
                scope.vm.onDestroy();
            });
            // Click event listener
            element.on('click', function() {
                // Handle click event
            });
        }
    });
