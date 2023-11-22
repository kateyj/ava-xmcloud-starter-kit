/**
 * Generates React boilerplate for a component under `src/components`
 * @param componentName - the component name
 * @returns component src boilerplate as a string
 */
function generateComponentSrc(componentName: string): string {
  return (
    `import React from 'react';
     import { ComponentParams, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';

//sharepoint interface (??)
interface Fields {
  name: string; //please here define the props
}

//component properties
type ${componentName}Props = {
  params: ComponentParams;
  rendering: ComponentRendering & { params: ComponentParams };
  fields: Fields;
};

//empty variant?
const ${componentName}DefaultComponent = (props: ${componentName}Props): JSX.Element => (
  <div className={` +
    '`component ${styles.todo} ${props.params.styles}`' +
    `}>
    <div className="component-content">Empty</div>
  </div>
);

//default variant
export const Default = (props: ${componentName}Props): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div
      ` +
    '  className={`component' +
    ` ${componentName} ` +
    '${styles.todo} ${props.params.styles}`}' +
    `
        id={id ? id : undefined}
      >
        <div className="component-content">TO-DO</div>
      </div>
    );
  }
  return <${componentName}DefaultComponent {...props} />;
};

//variant B
export const ${componentName}VariantB = (props: ${componentName}Props): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div ` +
    'className={`component' +
    ` ${componentName} ` +
    '${props.params.styles}`}' +
    ` id={id ? id : undefined}>
        <div className="component-content">TO DO VARIANT B</div>
      </div>
    );
  }
  return <${componentName}DefaultComponent {...props} />;
};
`
  );
}

export default generateComponentSrc;
