'use strict';

function <%= cameledName %>Service() {
	// AngularJS will instantiate a singleton by calling "new" on this function
}

angular.module('<%= scriptAppName %>')
  .service('<%= cameledName %>', <%= cameledName %>Service);
