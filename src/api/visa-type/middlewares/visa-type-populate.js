"use strict";

const populate = {
  blocks: {
    populate: {
      link: {
        populate: true,
      },
      links: {
        populate: true,
      },
      image: {
        fields: ["name", "alternativeText", "url"],
      },
      card: {
        populate: {
          image: {
            fields: ["name", "alternativeText", "url"],
          },
        },
      },
      plan: {
        populate: ["services", "link"],
      },
      form: {
        populate: ["input", "button"],
      },
      slides: {
        populate: {
          image: {
            fields: ["name", "alternativeText", "url"],
          },
        },
      },
      content: {
        populate: {
          media: {
            fields: ["name", "alternativeText", "url"],
          },
        },
      },
      reviews: {
        fields: ["review", "reviewer_name", "country"],
      },
      faq: {
        populate: true,
      },
      tabs: {
        populate: true,
      },
      rows: {
        populate: true,
      },
    },
  },
  tabs: {
    populate: true,
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In visa-type-populate middleware.");
    ctx.query = {
      populate,
      ...ctx.query,
    };
    await next();
  };
};
