'use strict';

function <%= cameledName %>Decorator($delegate) 
  // decorate the $delegate
  return $delegate;
}

angular.module('<%= scriptAppName %>')
  .config(function ($provide) {
    $provide.decorator('<%= cameledName %>', <%= cameledName %>Decorator);
  });
