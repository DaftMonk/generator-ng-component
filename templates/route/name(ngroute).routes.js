'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('<%= route %>', {
      template: '<<%= kebabName %>></<%= kebabName %>>'
    });
}
