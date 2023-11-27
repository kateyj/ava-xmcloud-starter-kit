import { RichText, Text, isEditorActive } from '@sitecore-jss/sitecore-jss-nextjs';
import { CardProps } from 'components/card/Card';
import React, { useState } from 'react';
import { Tertiary } from 'components/link/Link';
import NextImageWithNullFallback from 'components/shared/nextImg/NextImageWithNullFallback';

export const ContentHorizontalCard = (props: CardProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const [editingMode] = useState(isEditorActive());
  const handleClick = () => {
    if (props.fields.data?.datasource?.link?.jsonValue)
      window.open(props.fields.data.datasource?.link.jsonValue?.value?.href, '_self');
  };
  return (
    <div
      className={`horizontal-card content-card__horizontal ${props.params.styles}`}
      id={id ? id : undefined}
      onClick={!editingMode ? handleClick : () => null}
    >
      <div className="horizontal-card__content">
        <NextImageWithNullFallback
          field={props.fields.data?.datasource?.image?.jsonValue}
          params={{
            styles: 'horizontal-card__image next-image--square',
          }}
        />

        <div className="horizontal-card__card-info">
          <div className="horizontal-card__content__text">
            <Text
              tag="h3"
              className="body1 horizontal-card__title"
              field={props.fields.data?.datasource?.title?.jsonValue}
            />
            <RichText
              tag="div"
              className="body2"
              field={props.fields.data?.datasource?.body?.jsonValue}
            />
          </div>
          <div className="horizontal-card__link">
            <Tertiary
              fields={{ Link: props.fields?.data?.datasource?.link?.jsonValue }}
              params={{}}
            ></Tertiary>
          </div>
        </div>
      </div>
    </div>
  );
};
