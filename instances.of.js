/**
 * Light-Weight Type/Class-based inheritance for JavaScript
 *
 * instances.of.js
 * Copyright (c) 2012 Wil Moore III <wil.moore@wilmoore.com>
 * MIT Licensed
 */

!(function (name, context, definition) {
  if (typeof exports === 'object') { module.exports = definition(require) } else if (typeof define === 'function' && define.amd) { define(definition) } else { context[name] = definition() }
}).call(this, 'instances', this, function (require) {
  'use strict'

  /**
   * accepts a child constructor and returns a chainable `inherit` function
   *
   * @example
   *    instances.of(UiComponent)
   *      .inherit(Widget)
   *
   * @example
   *    instances.of(PropertyPanel)
   *      .inherit(UiComponent)
   *
   * @param  {Constructor} child child constructor to extend
   * @return {Object}      chainable
   * @throws {TypeError}
   */

  function of(child) {
    var errorMessage = 'A function is required.';

    if (!(child instanceof Function)) {
      throw new TypeError(errorMessage)
    }

    /**
     * accepts a parent constructor and returns child that inherits from parent
     *
     * @example
     *    function FileStore() {}
     *    FileStore.prototype.stat = function () { return { size: 0, atime: 0, mtime: 0, ctime: 0 } }
     *
     *    function AmazonS3() {}
     *    instances.of(AmazonS3).inherit(FileStore)
     *
     *    AmazonS3.prototype.stat = function () {
     *      var metadata = this.parent.stat.call(this);
     *      metadata['Content-SHA1'] = '...';
     *
     *      return metadata;
     *    };
     *
     * @param  {Constructor} parent parent constructor to inherit from
     * @return {Constructor} child constructor
     * @throws {TypeError}
     */

    function inherit(parent) {
      if (!(parent instanceof Function)) {
        throw new TypeError(errorMessage)
      }

      child.prototype             = Object.create(parent.prototype)
      child.prototype.parent      = parent
      child.prototype.constructor = child
      return child;
    }

    return { inherit: inherit }
  }

  return { of: of }
})
