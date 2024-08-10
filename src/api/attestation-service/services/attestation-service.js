'use strict';

/**
 * attestation-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::attestation-service.attestation-service');
