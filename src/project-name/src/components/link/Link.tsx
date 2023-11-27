import { ImageField, LinkField, Link, isEditorActive } from '@sitecore-jss/sitecore-jss-nextjs';
import React, { useState } from 'react';

interface Fields {
  Link: LinkField;
  Icon?: ImageField;
}

type LinkProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const LinkDefaultComponent = (props: LinkProps): JSX.Element => (
  <div className="link">
    <div className="link">Empty</div>
  </div>
);

export const Default = (props: LinkProps): JSX.Element => {
  console.log('---->[Link] Component', props.fields);
  const id = props.params.RenderingIdentifier;
  const [editingMode] = useState(isEditorActive());

  if (props.fields) {
    if (!!!props.fields.Link?.value?.href && !!!props.fields.Link?.value?.anchor && !editingMode) {
      return <></>;
    }
    let linktype = 'internal-link';
    if (props.fields.Link.value?.linktype == 'internal') {
      linktype = 'internal-link';
    } else if (props.fields.Link.value?.linktype == 'external') {
      linktype = '.external-links';
    } else if (props.fields.Link.value?.linktype == 'media') {
      linktype = 'media-link';
    } else if (props.fields.Link.value?.linktype == 'mailto') {
      linktype = 'mailto-link';
    } else if (props.fields.Link.value?.linktype == 'anchor') {
      linktype = 'anchor-link';
    } else if (props.fields.Link.value?.linktype == 'javascript') {
      linktype = 'javascript';
    }
    return (
      <Link
        id={id ? id : undefined}
        className="link"
        field={props.fields.Link}
        aria-label={`${props.fields.Link.value.text}`}
      />
    );
  }
  return <LinkDefaultComponent {...props} />;
};

export const Disabled = (props: LinkProps): JSX.Element => {
  console.log('---->[Link] Component', props.fields);
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    let linktype = 'internal-link';
    if (props.fields.Link.value?.linktype == 'internal') {
      linktype = 'internal-link';
    } else if (props.fields.Link.value?.linktype == 'external') {
      linktype = '.external-links';
    } else if (props.fields.Link.value?.linktype == 'media') {
      linktype = 'media-link';
    } else if (props.fields.Link.value?.linktype == 'mailto') {
      linktype = 'mailto-link';
    } else if (props.fields.Link.value?.linktype == 'anchor') {
      linktype = 'anchor-link';
    } else if (props.fields.Link.value?.linktype == 'javascript') {
      linktype = 'javascript';
    }
    return (
      <Link
        id={id ? id : undefined}
        tabIndex={-1}
        className="link"
        field={props.fields.Link}
        aria-label={`${props.fields.Link.value?.text}`}
      />
    );
  }
  return <LinkDefaultComponent {...props} />;
};

export const Tertiary = (props: LinkProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const [editingMode] = useState(isEditorActive());

  if (props.fields) {
    if (!!!props.fields.Link?.value?.href && !editingMode) {
      return <></>;
    }
    let linktype = 'internal-link';
    if (props.fields.Link.value?.linktype == 'internal') {
      linktype = 'internal-link';
    } else if (props.fields.Link.value?.linktype == 'external') {
      linktype = '.external-links';
    } else if (props.fields.Link.value?.linktype == 'media') {
      linktype = 'media-link';
    } else if (props.fields.Link.value?.linktype == 'mailto') {
      linktype = 'mailto-link';
    } else if (props.fields.Link.value?.linktype == 'anchor') {
      linktype = 'anchor-link';
    } else if (props.fields.Link.value?.linktype == 'javascript') {
      linktype = 'javascript';
    }
    return (
      <Link
        id={id ? id : undefined}
        className="link link__button-tertiary subheading1"
        field={props.fields.Link}
        aria-label={`${props.fields.Link?.value?.text}`}
      >
        {!editingMode && (
          <div className="link__button-tertiary-text">{props.fields.Link?.value?.text}</div>
        )}

        <div className="link__button-tertiary-image-container">
          <div className="link__button-tertiary-arrow">
            {/* <Icon icon={IconName.ArrowRight} iconLabel={'Open link'} /> */}
          </div>

          <div className="link__button-tertiary-arrow-active">
            {/* <Icon icon={IconName.ArrowRightActive} iconLabel={'Open active link'} /> */}
          </div>
        </div>
      </Link>
    );
  }
  return <LinkDefaultComponent {...props} />;
};

export default Default;
