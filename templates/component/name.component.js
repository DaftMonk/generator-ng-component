'use strict';
import angular from 'angular';

export class <%= cameledName %>Component()
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('<%= moduleName %>')
  .component('<%= cameledName %>', {
    template: '<h1>Hello {{ $ctrl.message }}</h1>',
    bindings: { message: '<' },
    controller: <%= cameledName %>Component
  })
  .name;
