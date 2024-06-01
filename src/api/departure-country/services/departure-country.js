'use strict';

/**
 * departure-country service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::departure-country.departure-country');
