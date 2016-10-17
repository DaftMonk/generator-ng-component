<a name="1.0.4"></a>
### 1.0.4 (2016-10-17)


* fix(directive): fix template definition for webpack ([af08634](https://github.com/DaftMonk/generator-ng-component/commit/af08634))


<a name="1.0.3"></a>
### 1.0.3 (2016-10-10)


* feat(gen:route): add instructions for using route after generated ([174e46c](https://github.com/DaftMonk/generator-ng-component/commit/174e46c))


<a name="1.0.2"></a>
### 1.0.2 (2016-08-30)


* fix(route:uirouter): use string version of ngInject directive ([007182e](https://github.com/DaftMonk/generator-ng-component/commit/007182e))
* fix(route:ngroute): use string version of ngInject directive ([abbe12b](https://github.com/DaftMonk/generator-ng-component/commit/abbe12b))


<a name="1.0.1"></a>
### 1.0.1 (2016-07-21)


* chore(npm): add .npmignore


<a name="1.0.0"></a>
### 1.0.0 (2016-07-21)


### Notable Changes

* Style is checked with XO
* CoffeeScript is gone. JavaScript & TypeScript are the warring kings now.
* A module system is assumed (Webpack supported)
* 'ngInject' directives have been added
* Node < 4 are unsupported


<a name="0.3.5"></a>
### 0.3.5 (2016-07-15)


### Bug Fixes

* Don't default any generator to creating a different Angular module name


<a name="0.3.4"></a>
### 0.3.4 (2016-07-15)


### Bug Fixes

* Fix controllerAs value to be string


<a name="0.3.3"></a>
### 0.3.3 (2016-07-01)


### Bug Fixes

* Fix the `yo` check


<a name="0.3.2"></a>
### 0.3.2 (2016-06-30)


### Notable Changes

* Updated dependencies
* Bumped Node version to 4.4.6


<a name="0.3.1"></a>
### 0.3.1 (2016-06-30)


### Notable Changes

* Routes will not default to using a new module namespace
* The route spec `$componentController` creation has been fixed ([72ad578](https://github.com/DaftMonk/generator-ng-component/commit/72ad578))


<a name="0.3.0"></a>
### 0.3.0 (2016-05-04)


### Notable Changes

The user shouldn't see much difference with this release. Some Yeoman packages were updated, and deprecations fixed. We also now test Node 4, 5, & 0.12 instead of just 0.10.


<a name="0.2.2"></a>
### 0.2.2 (2016-04-21)


### Bug Fixes

* **gen:** allow every generator to use `.ts` ([680c45c](https://github.com/DaftMonk/generator-ng-component/commit/680c45c))


<a name="0.2.1"></a>
### 0.2.1 (2016-03-09)


### Bug Fixes

* **route:** don't default to creating a new module, fix component registration name ([15e5507](https://github.com/DaftMonk/generator-ng-component/commit/15e5507))


<a name="0.2.0"></a>
### 0.2.0 (2016-03-09)


### Notable Changes

* Controllers are now appended with `Controller` instead of `Ctrl`
* New Component subgenerator
* If a `ts` extention is present instead of `js`, the generator will output `.ts` files
* If a `modulePrompt` config property is truthy, subgenerators will ask for a module name the Angular component should be bound to.
* The route subgenerator now uses an Angular Component (Note: If you're using Angular 1.3/1.4, You can use the [toddmotto/angular-component](https://github.com/toddmotto/angular-component) polyfill)


#### Features

* **gen:**
  * prompt for module name when `config.modulePrompt` ([3bd75b3](https://github.com/DaftMonk/generator-ng-component/commit/3bd75b3))
  * make .ts files ([52e2bea](https://github.com/DaftMonk/generator-ng-component/commit/52e2bea))
* **route:**
  * use a class and controllerAs if es6 filter present ([678c01f](https://github.com/DaftMonk/generator-ng-component/commit/678c01f))
  * change to use component ([3a8b2c7](https://github.com/DaftMonk/generator-ng-component/commit/3a8b2c7))
* **component:** generate component for angular 1.5 ([a8eb002](https://github.com/DaftMonk/generator-ng-component/commit/a8eb002))

#### Chore

* **gen:** update yeoman-generator to `~0.20.3` ([51c560a](https://github.com/DaftMonk/generator-ng-component/commit/51c560a))


<a name="0.1.1"></a>
### 0.1.1 (2015-09-06)


#### Features

* **gen:**
  * use yeoman's grouped queues ([e265f34](https://github.com/DaftMonk/generator-ng-component/commit/e265f34f74cf74d19d70c1baa7e67665fc7e3545))
  * add dynamic mocha assertions ([b64455d](https://github.com/DaftMonk/generator-ng-component/commit/b64455d62c00b3cb6134c9a35538dab74d6d452b))
  * config can be force updated via `options.forceConfig` ([0e81bb4](https://github.com/DaftMonk/generator-ng-component/commit/0e81bb47b56280d94cc45a784c81f2ee8113e9e6))

#### Chore

* **gen:** update yeoman-generator to `~0.19.2` ([a861e29](https://github.com/DaftMonk/generator-ng-component/commit/a861e292a6aa5d4c5980a6c31f82fec6ae7850c9))

#### Breaking Changes

* `yeoman-generator@0.19.2` deprecates the use of `this._`. If your templates use lodash methods, you should now reference `this.lodash`.


<a name="0.1.0"></a>
## 0.1.0 (2015-08-05)


#### Bug Fixes

* **gen:**
  * removed bootstrap class dependency from route html and jade templates ([d725057](https://github.com/DaftMonk/generator-ng-component/commit/d725057006c7b8785ada77bf340bc6bf48c12c41))
  * fix indention spacing ([82a4201](https://github.com/DaftMonk/generator-ng-component/commit/82a420173a5c43d1829f96551f627fcaa81cd4b1))
* **app:** ensure all files end with a newline ([bd312ce](https://github.com/DaftMonk/generator-ng-component/commit/bd312ce1366e74d2d208dffca8232cc051ec1664))
* **dependencies:** remove peer dependencies ([3fb83ea](https://github.com/DaftMonk/generator-ng-component/commit/3fb83ea9bb31266f2b1721469c6b9d50ab5f52bb))

#### Features

* **gen:** add hasFilter function ([fa39978](https://github.com/DaftMonk/generator-ng-component/commit/fa399784dfac16ee742b62bd9299c9c7bcccc125))
* **test:** add support for mocha+chai ([aaca1e8](https://github.com/DaftMonk/generator-ng-component/commit/aaca1e83c916cae84079cd2e24dddbc5d4bee360))
* **dependencies:** update to `yeoman-generator@~0.18.10` ([dc63875](https://github.com/DaftMonk/generator-ng-component/commit/dc63875965a95bf0604d627e953dea4b6784fe5a))
