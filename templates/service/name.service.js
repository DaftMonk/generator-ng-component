'use strict';
import angular from 'angular';

export function <%= cameledName %>Service() {
	// AngularJS will instantiate a singleton by calling "new" on this function
}

export default angular.module('<%= moduleName %>')
  .service('<%= cameledName %>', <%= cameledName %>Service)
  .name;
