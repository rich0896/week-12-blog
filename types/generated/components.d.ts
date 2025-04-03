import type { Schema, Struct } from '@strapi/strapi';

export interface CallToActionCta extends Struct.ComponentSchema {
  collectionName: 'components_call_to_action_ctas';
  info: {
    displayName: 'cta';
    icon: 'alien';
  };
  attributes: {
    ctaBgColour: Schema.Attribute.String & Schema.Attribute.Required;
    ctaBtnBgColour: Schema.Attribute.String & Schema.Attribute.Required;
    ctaBtnText: Schema.Attribute.String & Schema.Attribute.Required;
    ctaBtnUrl: Schema.Attribute.String & Schema.Attribute.Required;
    ctaHeading: Schema.Attribute.String & Schema.Attribute.Required;
    ctaImage: Schema.Attribute.Media<'images'>;
    ctaIsExternal: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    ctaSubHeading: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'call-to-action.cta': CallToActionCta;
    }
  }
}
