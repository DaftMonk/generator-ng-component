'use strict';

function <%= cameledName %>Controller() 
  this.message = 'World';
}

angular.module('<%= scriptAppName %>')
  .component('<%= cameledName %>', {
    template: '<h1>Hello {{ $ctrl.message }}</h1>',
    bindings: { message: '<' },
    controller: <%= cameledName %>Controller
});
