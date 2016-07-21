'use strict';
const angular = require('angular');

/*@ngInject*/
export function <%= cameledName %>Service() {
	// AngularJS will instantiate a singleton by calling "new" on this function
}

export default angular.module('<%= scriptAppName %>', [])
  .service('<%= cameledName %>', <%= cameledName %>Service)
  .name;
