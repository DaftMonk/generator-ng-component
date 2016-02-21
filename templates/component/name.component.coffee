'use strict'

angular.module('<%= scriptAppName %>').component '<%= cameledName %>',
  template: '<h1>Hello {{ $ctrl.message }}</h1>'
  bindings: message: '<'
  controller: ->
    @message = 'World'
    return
