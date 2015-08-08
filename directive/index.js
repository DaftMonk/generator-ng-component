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
  var self = this;
  var done = this.async();

  var prompts = [
    {
      name: 'prefix',
      message: 'What prefix do you need for this directive?',
      default: self.config.get('directivePrefix')
    },
    {
      name: 'dir',
      message: 'Where would you like to create this directive?',
      default: self.config.get('directiveDirectory')
    },
    {
      type:'confirm',
      name: 'complex',
      message: 'Does this directive need an external html file?',
      default: true
    }
  ];

  this.prompt(prompts, function (props) {
    this.name = props.prefix + '-' + this.name;
    this.complex = props.complex;
    if (this.complex) {
        // Create a separate folder for the complex directive because it will have more files
        this.dir = path.join(props.dir, this.name);
    } else {
        this.dir = props.dir;
    }
    done();
  }.bind(this));
};

Generator.prototype.createFiles = function createFiles() {
  var configName = 'directiveSimpleTemplates';
  var templateDir = path.join(this.sourceRoot(), 'directiveSimple');
  if (this.complex) {
    configName = 'directiveComplexTemplates';
    templateDir = path.join(this.sourceRoot(), 'directiveComplex');
  }

  var basePath = this.config.get('basePath') || '';
  this.htmlUrl = ngUtil.relativeUrl(basePath, path.join(this.dir, this.name + '.html'));
  this.prefixedCameledName = this._.camelize(this.name);
  ngUtil.copyTemplates(this, 'directive', templateDir, configName);
};
