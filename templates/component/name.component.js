'use strict';
const angular = require('angular');

export class <%= cameledName %>Component {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('<%= scriptAppName %>', [])
  .component('<%= cameledName %>', {
    template: '<h1>Hello {{ $ctrl.message }}</h1>',
    bindings: { message: '<' },
    controller: <%= cameledName %>Component
  })
  .name;
