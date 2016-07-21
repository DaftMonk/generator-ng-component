'use strict';
const angular = require('angular');
<%_ if(hasFilter('ngroute')) { -%>
const ngRoute = require('angular-route');<% } %>
<%_ if(hasFilter('uirouter')) { -%>
const uiRouter = require('angular-ui-router');<% } %>

import routes from './<%= name %>.routes';

export class <%= classedName %>Component {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('<%= scriptAppName %>', [<% if(hasFilter('ngroute')) { %>ngRoute<% } else { %>uiRouter<% } %>])
  .config(routes)
  .component('<%= cameledName %>', {
    <%_ if(hasFilter('webpack')) { -%>
    template: require('./<%=name%>.<%=templateExt%>'),
    <%_ } else { -%>
    templateUrl: '<%= htmlUrl %>',
    <%_ } -%>
    controller: <%= classedName %>Component,
    controllerAs: '<%= cameledName %>Ctrl'
  })
  .name;
