'use strict';

export default function($routeProvider) {
  $routeProvider
    .when('<%= route %>', {
      template: '<<%= kebabName %>></<%= kebabName %>>'
    });
}
