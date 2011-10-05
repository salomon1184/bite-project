//Copyright 2011 Google Inc. All Rights Reserved.

/**
 * @fileoverview Define an event that also passes out data in the form of an
 * optional object.
 *
 * This is a generic event beyond that which is provided by goog.events.Event.
 * However, at a later time there may be a desire for more events.  In that
 * case, this file will need to be altered to reflect a more specific usage.
 *
 * @author jasonstredwick@google.com (Jason Stredwick)
 */


goog.provide('common.events.Event');

goog.require('goog.events.Event');



/**
 * See fileoverview.
 * @param {string} type The Event type.
 * @param {Object=} opt_data The data to pass on.
 * @extends {goog.events.Event}
 * @constructor
 * @export
 */
common.events.Event = function(type, opt_data) {
  goog.base(this, type);

  /**
   * The data passed on by the EventTarget.
   * @type {?Object}
   * @private
   */
  this.data_ = opt_data || null;
};
goog.inherits(common.events.Event, goog.events.Event);


/**
 * Retrieve the data from the event.
 * @return {Object} The data encompassed by the event.
 * @export
 */
common.events.Event.prototype.getData = function() {
  return this.data_;
};
