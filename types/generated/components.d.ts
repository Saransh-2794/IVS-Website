import type { Schema, Attribute } from '@strapi/strapi';

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

export interface ElementsTab extends Schema.Component {
  collectionName: 'components_elements_tabs';
  info: {
    displayName: 'Tab';
  };
  attributes: {
    label: Attribute.String;
    content: Attribute.Blocks;
  };
}

export interface ElementsSlide extends Schema.Component {
  collectionName: 'components_elements_slides';
  info: {
    displayName: 'Slide';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Attribute.String;
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

export interface ElementsMediaElement extends Schema.Component {
  collectionName: 'components_elements_media_elements';
  info: {
    displayName: 'Media Element';
  };
  attributes: {
    title: Attribute.String;
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    link: Attribute.String;
    media_type: Attribute.Enumeration<['Video', 'Image', 'Document']>;
  };
}

export interface ElementsFaq extends Schema.Component {
  collectionName: 'components_elements_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Blocks;
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
    isExternal: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface BlocksTestimonials extends Schema.Component {
  collectionName: 'components_blocks_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    reviews: Attribute.Component<'elements.testimonials-card', true>;
  };
}

export interface BlocksTabs extends Schema.Component {
  collectionName: 'components_blocks_tabs';
  info: {
    displayName: 'Tabs';
  };
  attributes: {
    tabs: Attribute.Component<'elements.tab', true>;
  };
}

export interface BlocksSlider extends Schema.Component {
  collectionName: 'components_blocks_sliders';
  info: {
    displayName: 'Slider';
  };
  attributes: {
    slides: Attribute.Component<'elements.slide', true>;
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

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Attribute.Component<'elements.button-link'>;
    description: Attribute.Text;
  };
}

export interface BlocksFaqs extends Schema.Component {
  collectionName: 'components_blocks_faqs';
  info: {
    displayName: 'Faqs';
  };
  attributes: {
    title: Attribute.String;
    faq: Attribute.Component<'elements.faq', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.testimonials-card': ElementsTestimonialsCard;
      'elements.tab': ElementsTab;
      'elements.slide': ElementsSlide;
      'elements.nested-links': ElementsNestedLinks;
      'elements.media-element': ElementsMediaElement;
      'elements.faq': ElementsFaq;
      'elements.button-link': ElementsButtonLink;
      'blocks.testimonials': BlocksTestimonials;
      'blocks.tabs': BlocksTabs;
      'blocks.slider': BlocksSlider;
      'blocks.media': BlocksMedia;
      'blocks.hero': BlocksHero;
      'blocks.faqs': BlocksFaqs;
    }
  }
}
