'use strict';

export default function($stateProvider) {
  $stateProvider
    .state('<%= name %>', {
      url: '<%= route %>',
      template: '<<%= kebabName %>></<%= kebabName %>>'
    });
}
