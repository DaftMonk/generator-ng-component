'use strict';

angular.module('<%= scriptAppName %>')
    .config(function($stateProvider) {
        $stateProvider
            .state('<%= name %>', {
                url: '<%= route %>',
                templateUrl: '<%= htmlUrl %>',
                controller: '<%= controllerName %>',
                controllerAs: 'vm',
                //resolve: <%= controllerName %>.resolve
            });
    });
