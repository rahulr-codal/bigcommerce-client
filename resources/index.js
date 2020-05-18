'use strict';

const map = {
    customer: "customer",
    customerAddress: "customer-address"
};

/**
 * Registers resources on the `BigCommerce` class.
 *
 * @param {BigCommerce} BigCommerce The `BigCommerce` class
 * @private
 */
function registerAll(BigCommerce) {
  Object.keys(map).forEach((prop) => {
    Object.defineProperty(BigCommerce.prototype, prop, {
      configurable: true,
      get: function get() {
        const resource = require(`./${map[prop]}`);
        return Object.defineProperty(this, prop, {
          value: new resource(this)
        })[prop];
      },
      set: function set(value) {
        Object.defineProperty(this, prop, { value })[prop];
      }
    });
  });
}

module.exports = {
  registerAll
};