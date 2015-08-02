(function() {
	'use strict';

	angular
		.module('<%= scriptAppName %>')
	  .config(<%= scriptAppName %>Config);

	function <%= scriptAppName %>Config($provide) {
		$provide.decorator('<%= cameledName %>', <%= scriptAppName %>Decorator);
	}

	function <%= scriptAppName %>Decorator($delegate) {
		// decorate the $delegate
	  return $delegate;
	}

})();