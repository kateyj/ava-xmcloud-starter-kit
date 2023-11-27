import React from 'react';
import { Field, ImageField, LinkField, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ContentVerticalCard } from 'components/card/variants/content-vertical/ContentVertical';
import { ContentHorizontalCard } from 'components/card/variants/content-horizontal/ContentHorizontal';

export interface CardFields {
  id: string;
  title?: {
    jsonValue: Field<string>;
  };
  subTitle?: {
    jsonValue: Field<string>;
  };
  body?: {
    jsonValue: RichTextField;
  };
  image?: {
    jsonValue: ImageField;
  };
  iconCard?: {
    jsonValue: ImageField;
  };
  link: {
    jsonValue: LinkField;
  };
}

export type CardProps = {
  params: { [key: string]: string };
  fields: {
    data: {
      datasource: CardFields;
    };
  };
};

export const Default = (props: CardProps): JSX.Element => {
  console.log('---->[Card] Component', props.fields);
  if (props.fields) return <ContentVerticalCard {...props} />;
  return <CardDefaultComponent {...props} />;
};

export const ContentHorizontal = (props: CardProps): JSX.Element => {
  console.log('---->[Card] Component', props.fields);
  if (props.fields) return <ContentHorizontalCard {...props} />;
  return <CardDefaultComponent {...props} />;
};

export const CardDefaultComponent = (props: CardProps): JSX.Element => (
  <div className={`card is-empty-hint ${props.params.styles}`}>
    <div className="card-header">
      <h4>Empty card</h4>
    </div>
    <div className="card-body">
      <h3>Card datasource is not selected</h3>
      <p>
        This card will not be rendered because you do not have datasource selected. Please select a
        datasource to continue.
      </p>
    </div>
    <div className="card-footer">
      <a href="#" className="is-empty-hint">
        Card link example
      </a>
    </div>
  </div>
);
