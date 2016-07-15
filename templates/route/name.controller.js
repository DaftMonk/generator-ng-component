'use strict';
import angular from 'angular';

import routes from './<%= name %>.routes';

export class <%= classedName %>Component {
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('<%= moduleName %>')
  .config(routes)
  .component('<%= cameledName %>', {
    <%_ if(filters.webpack) { -%>
    template: require('./<%=name%>.<%=templateExt%>'),
    <%_ } else { -%>
    templateUrl: '<%= htmlUrl %>',
    <%_ } -%>
    controller: <%= classedName %>Component,
    controllerAs: '<%= cameledName %>Ctrl'
  })
  .name;
