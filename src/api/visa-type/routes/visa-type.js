'use strict';

/**
 * visa-type router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::visa-type.visa-type', {
  config: {
    find: { middlewares: ["api::visa-type.visa-type-populate"] },
    findOne: { middlewares: ["api::visa-type.visa-type-populate"] },
  }
});
