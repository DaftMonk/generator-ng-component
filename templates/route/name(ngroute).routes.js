'use strict';

/*@ngInject*/
export default function($routeProvider) {
  $routeProvider
    .when('<%= route %>', {
      template: '<<%= kebabName %>></<%= kebabName %>>'
    });
}
