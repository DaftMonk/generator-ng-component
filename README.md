# generator-ng-component
[![Build Status](https://secure.travis-ci.org/DaftMonk/generator-ng-component.png?branch=master)](https://travis-ci.org/DaftMonk/generator-ng-component)
[![Dependency Status](https://img.shields.io/david/DaftMonk/generator-ng-component.svg)](https://david-dm.org/DaftMonk/generator-ng-component)
[![Dev-Dependency Status](https://img.shields.io/david/dev/DaftMonk/generator-ng-component.svg)](https://david-dm.org/angular-fullstack/DaftMonk/generator-ng-component#info=devDependencies)

> [Yeoman](http://yeoman.io) generator


## Getting Started

### Yeoman Generators

Install `yo` and `generator-ng-component` from npm:

```
$ npm install -g yo generator-ng-component
```

Finally, initiate the generator:

```
$ yo ng-component
```

## Template Properties

* `lodash`: reference to lodash
* `appname`: the app name specified by `bower.json` or the project's directory name
* `scriptAppName`: the angular app name, `appname + 'App'`
* `cameledName`: the cameled name argument that is passed to the (sub)generator
* `classedName`: the classed name argument that is passed to the (sub)generator

## License

MIT
