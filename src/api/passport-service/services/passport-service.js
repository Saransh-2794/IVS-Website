'use strict';

/**
 * passport-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::passport-service.passport-service');
