(function() {
	'use strict';

	angular
		.module('<%= scriptAppName %>')
	  .controller('<%= classedName %>Controller', <%= classedName %>Controller);


	function <%= classedName %>Controller() {
		var vm = this;
		vm.message = 'Hello';
	}

})();