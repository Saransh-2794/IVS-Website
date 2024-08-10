'use strict';

/**
 * passport-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::passport-service.passport-service');
