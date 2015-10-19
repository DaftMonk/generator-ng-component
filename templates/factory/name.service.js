(function() {
  'use strict';

angular
  .module('<%= scriptAppName %>')
  .factory('<%= cameledName %>', <%= cameledName %>);

  function <%= cameledName %>() {
    // Service logic
    // ...

    var meaningOfLife = 42;

    var service = {
      someMethod: someMethod
    };

    // Public API here
    return service;

    ///////

    function someMethod() {
      return meaningOfLife;
    };
    
  };

})();