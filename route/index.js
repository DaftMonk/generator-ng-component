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
  var name = this.name;
  var dir = this.config.get('routeDirectory') || '';
  this.dir = path.join(dir, name);

  var done = this.async();
  var prompts = [
    {
      name: 'route',
      message: 'Enter your route url',
      default: '/' + name
    }
  ];

  this.prompt(prompts, function (props) {
    this.route = props.route;
    done();
  }.bind(this));
};

Generator.prototype.createFiles = function createFiles() {
  var basePath = this.config.get('basePath') || '';
  this.htmlUrl = ngUtil.relativeUrl(basePath, path.join(this.dir, this.name + '.html'));
  ngUtil.copyTemplates(this, 'route');
};