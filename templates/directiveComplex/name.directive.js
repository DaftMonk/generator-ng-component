(function() {
	'use strict';

	angular
		.module('<%= scriptAppName %>')
	  .directive('<%= cameledName %>', <%= cameledName %>);

	function <%= cameledName %>() {
	  return {
	    templateUrl: '<%= htmlUrl %>',
	    restrict: 'EA',
	    link: function (scope, element, attrs) {
	      element.text('this is the <%= cameledName %> directive');
	    }
	  };
	};
})();
