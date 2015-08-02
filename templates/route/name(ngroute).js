(function() {
  'use strict';

  angular
	  .module('<%= scriptAppName %>')
	  .config(function ($routeProvider) {
	    $routeProvider
	      .when('<%= route %>', {
	        templateUrl: '<%= htmlUrl %>',
	        controller: '<%= classedName %>Conctroller',
	        controllerAs: <%= classedName %>
	      });
	  });

})();