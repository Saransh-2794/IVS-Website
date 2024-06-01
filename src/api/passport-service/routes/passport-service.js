'use strict';

/**
 * passport-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::passport-service.passport-service');
