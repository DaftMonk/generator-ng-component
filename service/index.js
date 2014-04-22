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
  var dir = this.config.get('serviceDirectory') || '';
  this.dir = path.join(dir, this.name);
};

Generator.prototype.createFiles = function createFiles() {
  ngUtil.copyTemplates(this, 'service');
};
