(function() {
  'use strict';

	angular
		.module('<%= scriptAppName %>')
	  .service('<%= cameledName %>', <%= cameledName %>Service);

	function <%= cameledName %>Service() {
	  // AngularJS will instantiate a singleton by calling "new" on this function
	}

})();