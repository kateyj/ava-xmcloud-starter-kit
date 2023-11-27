import { RichText, Text, isEditorActive } from '@sitecore-jss/sitecore-jss-nextjs';
import { CardProps } from 'components/card/Card';
import React, { useState } from 'react';
import { Tertiary } from 'components/link/Link';
import NextImageWithNullFallback from 'components/shared/nextImg/NextImageWithNullFallback';

export const ContentVerticalCard = (props: CardProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const [editingMode] = useState(isEditorActive());
  const handleClick = () => {
    if (props.fields.data?.datasource?.link?.jsonValue)
      window.open(props.fields.data.datasource?.link.jsonValue?.value?.href, '_self');
  };
  return (
    <div
      className={`card vertical-card content-card__vertical ${props.params.styles}`}
      id={id ? id : undefined}
      onClick={!editingMode ? handleClick : () => null}
    >
      <div className="vertical-card__content">
        <div className="vertical-card__content__image">
          <NextImageWithNullFallback
            field={props.fields?.data?.datasource?.image?.jsonValue}
            params={{
              styles: 'vertical-card__image next-image--square',
            }}
          ></NextImageWithNullFallback>
        </div>
        <div className="vertical-card__content__text-container">
          <Text
            tag="h3"
            className="body1 vertical-card__content__text__title"
            field={props.fields?.data?.datasource?.title?.jsonValue}
          />
          <RichText
            tag="div"
            className="body2 vertical-card__content__text__body"
            field={props.fields?.data?.datasource?.body?.jsonValue}
          />
        </div>
        <div>
          <Tertiary
            fields={{ Link: props.fields?.data?.datasource?.link?.jsonValue }}
            params={{}}
          ></Tertiary>
        </div>
      </div>
    </div>
  );
};
