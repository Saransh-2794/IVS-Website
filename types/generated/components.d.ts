import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksCta extends Schema.Component {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'Cta';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    form: Attribute.Component<'elements.form'>;
  };
}

export interface BlocksFaqs extends Schema.Component {
  collectionName: 'components_blocks_faqs';
  info: {
    displayName: 'Faqs';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    faq: Attribute.Component<'elements.faq', true>;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.Text;
    link: Attribute.Component<'elements.button-link'>;
    image: Attribute.Media;
  };
}

export interface BlocksMedia extends Schema.Component {
  collectionName: 'components_blocks_media';
  info: {
    displayName: 'Media';
    description: '';
  };
  attributes: {
    content: Attribute.Component<'elements.media-element', true>;
  };
}

export interface BlocksPricing extends Schema.Component {
  collectionName: 'components_blocks_pricings';
  info: {
    displayName: 'Pricing';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.String;
    plan: Attribute.Component<'elements.pricing-card', true>;
  };
}

export interface BlocksRow extends Schema.Component {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'Row';
  };
  attributes: {
    card: Attribute.Component<'elements.card', true>;
  };
}

export interface BlocksSlider extends Schema.Component {
  collectionName: 'components_blocks_sliders';
  info: {
    displayName: 'Slider';
    description: '';
  };
  attributes: {
    slide: Attribute.Component<'elements.slide', true>;
  };
}

export interface BlocksTestimonials extends Schema.Component {
  collectionName: 'components_blocks_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    review: Attribute.Component<'elements.testimonials-card', true>;
  };
}

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button Link';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    image: Attribute.Media;
    heading: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ElementsFaq extends Schema.Component {
  collectionName: 'components_elements_faqs';
  info: {
    displayName: 'Faq';
    description: '';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Blocks;
  };
}

export interface ElementsForm extends Schema.Component {
  collectionName: 'components_elements_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    input: Attribute.Component<'elements.input', true>;
  };
}

export interface ElementsInput extends Schema.Component {
  collectionName: 'components_elements_inputs';
  info: {
    displayName: 'Input';
    description: '';
  };
  attributes: {
    placeholder: Attribute.String;
    label: Attribute.String;
    inputType: Attribute.String;
    button: Attribute.Component<'elements.button-link'>;
  };
}

export interface ElementsMediaElement extends Schema.Component {
  collectionName: 'components_elements_media_elements';
  info: {
    displayName: 'Media Element';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    media: Attribute.Media;
    link: Attribute.String;
    media_type: Attribute.Enumeration<['Video', 'Image', 'Document']> &
      Attribute.Required;
  };
}

export interface ElementsNestedLinks extends Schema.Component {
  collectionName: 'components_elements_nested_links';
  info: {
    displayName: 'Nested Links';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
    items: Attribute.Component<'elements.button-link', true>;
  };
}

export interface ElementsPricingCard extends Schema.Component {
  collectionName: 'components_elements_pricing_cards';
  info: {
    displayName: 'Pricing Card';
  };
  attributes: {
    planType: Attribute.String;
    planPrice: Attribute.String;
    isFeatured: Attribute.Boolean & Attribute.DefaultTo<false>;
    services: Attribute.Relation<
      'elements.pricing-card',
      'oneToMany',
      'api::service.service'
    >;
    link: Attribute.Component<'elements.button-link'>;
  };
}

export interface ElementsSlide extends Schema.Component {
  collectionName: 'components_elements_slides';
  info: {
    displayName: 'Slide';
    icon: 'star';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    link: Attribute.String;
  };
}

export interface ElementsTab extends Schema.Component {
  collectionName: 'components_elements_tabs';
  info: {
    displayName: 'Tab';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    title: Attribute.String;
    content_eoi: Attribute.Blocks;
    content_cgi: Attribute.Blocks;
  };
}

export interface ElementsTestimonialsCard extends Schema.Component {
  collectionName: 'components_elements_testimonials_cards';
  info: {
    displayName: 'Testimonials Card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    review: Attribute.Text;
    reviewer_name: Attribute.String;
    country: Attribute.String;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.cta': BlocksCta;
      'blocks.faqs': BlocksFaqs;
      'blocks.hero': BlocksHero;
      'blocks.media': BlocksMedia;
      'blocks.pricing': BlocksPricing;
      'blocks.row': BlocksRow;
      'blocks.slider': BlocksSlider;
      'blocks.testimonials': BlocksTestimonials;
      'elements.button-link': ElementsButtonLink;
      'elements.card': ElementsCard;
      'elements.faq': ElementsFaq;
      'elements.form': ElementsForm;
      'elements.input': ElementsInput;
      'elements.media-element': ElementsMediaElement;
      'elements.nested-links': ElementsNestedLinks;
      'elements.pricing-card': ElementsPricingCard;
      'elements.slide': ElementsSlide;
      'elements.tab': ElementsTab;
      'elements.testimonials-card': ElementsTestimonialsCard;
      'seo.meta-data': SeoMetaData;
    }
  }
}
