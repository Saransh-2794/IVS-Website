'use strict';

/**
 * news-and-article service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-and-article.news-and-article');
