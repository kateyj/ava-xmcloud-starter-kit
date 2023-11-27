import React, { useState } from 'react';
import { NextImage, ImageField, isEditorActive } from '@sitecore-jss/sitecore-jss-nextjs';
import { ImageProps } from '@sitecore-jss/sitecore-jss-react';
import { ImageProps as NextImageProperties } from 'next/image';

type NextImageProps = Omit<ImageProps, 'media'> & Partial<NextImageProperties>;

type PictureProps = {
  params?: { [key: string]: string };
};

const NoImage = (props: NextImageProps & PictureProps): JSX.Element => (
  <div className={`next-image__container ${props.params?.styles}`}>
    <div className={`next-image next-image--empty`} {...props}></div>
  </div>
);

export const NextImageWithNullFallback = (props: NextImageProps & PictureProps) => {
  const field = props.field as ImageField;
  const [editingMode] = useState(isEditorActive());

  if (field?.value?.src || editingMode) {
    return (
      <div className={`next-image__container ${props.params?.styles}`}>
        <NextImage className="next-image" {...props} />
      </div>
    );
  }
  return <NoImage {...props} />;
};

export default NextImageWithNullFallback;
