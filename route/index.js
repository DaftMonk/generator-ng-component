'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var util = require('util');
var ngUtil = require('../util');
var ScriptBase = require('../script-base.js');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.askFor = function askFor() {
  this.dir = path.join(this.config.get('routeDirectory'), this.name);

  if(this.config.get('injectRoute')) {
    var done = this.async();
    var prompts = [
      {
        name: 'route',
        message: 'Enter your route url (i.e. /myview/:id).  Leave this empty if you don\'t want a route added for you.'
      }
    ];

    this.prompt(prompts, function (props) {
      this.route = props.route;

      done();
    }.bind(this));
  }
};

Generator.prototype.createFiles = function createFiles() {
  ngUtil.copyTemplates(this, 'route');
};