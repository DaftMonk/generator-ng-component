'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('<%= name %>', {
      url: '<%= route %>',
      template: '<<%= kebabName %>></<%= kebabName %>>'
    });
}
