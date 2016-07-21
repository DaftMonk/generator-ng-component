'use strict';

/*@ngInject*/
export default function($stateProvider) {
  $stateProvider
    .state('<%= name %>', {
      url: '<%= route %>',
      template: '<<%= kebabName %>></<%= kebabName %>>'
    });
}
