/* eslint-disable */
// Do not edit this file, it is auto-generated at build time!
// See scripts/generate-component-factory.ts to modify the generation of this file.




import * as Container from 'src/components/Container';
import * as Image from 'src/components/Image';
import * as LinkList from 'src/components/LinkList';
import * as Navigation from 'src/components/Navigation';
import * as Promo from 'src/components/Promo';
import * as RichText from 'src/components/RichText';
import * as Title from 'src/components/Title';
import * as CdpPageView from 'src/components/sitecore-oob/CdpPageView';
import * as ColumnSplitter from 'src/components/sitecore-oob/ColumnSplitter';
import * as ContentBlock from 'src/components/sitecore-oob/ContentBlock';
import * as FEaaSWrapper from 'src/components/sitecore-oob/FEaaSWrapper';
import * as PageContent from 'src/components/sitecore-oob/PageContent';
import * as PartialDesignDynamicPlaceholder from 'src/components/sitecore-oob/PartialDesignDynamicPlaceholder';
import * as RowSplitter from 'src/components/sitecore-oob/RowSplitter';

const components = new Map();

components.set('Container', Container);
components.set('Image', Image);
components.set('LinkList', LinkList);
components.set('Navigation', Navigation);
components.set('Promo', Promo);
components.set('RichText', RichText);
components.set('Title', Title);
components.set('CdpPageView', CdpPageView);
components.set('ColumnSplitter', ColumnSplitter);
components.set('ContentBlock', ContentBlock);
components.set('FEaaSWrapper', FEaaSWrapper);
components.set('PageContent', PageContent);
components.set('PartialDesignDynamicPlaceholder', PartialDesignDynamicPlaceholder);
components.set('RowSplitter', RowSplitter);

// Next.js 'dynamic' import and JavaScript 'dynamic' import are different.
// Next.js 'dynamic(...)' returns common 'React.ComponentType' while
// 'import('...')' returns 'Promise' that will resolve module.
// componentModule uses 'import(...)' because primary usage of it to get not only 'React Component' (default export) but all named exports.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports
// componentFactory uses 'dynamic(...)' because primary usage of it to render 'React Component' (default export).
// See https://nextjs.org/docs/advanced-features/dynamic-import
// At the end you will have single preloaded script for each lazy loading module.
// Editing mode doesn't work well with dynamic components in nextjs: dynamic components are not displayed without refresh after a rendering is added. 
// This happens beacuse Sitecore editors simply insert updated HTML generated on server side. This conflicts with nextjs dynamic logic as no HTML gets rendered for dynamic component
// So we use require() to obtain dynamic components in editing mode while preserving dynamic logic for non-editing scenarios
// As we need to be able to seamlessly work with dynamic components in both editing and normal modes, different componentFactory functions will be passed to app

export function componentModule(componentName: string) {
  const component = components.get(componentName);

  // check that component is lazy loading module
  if (!component?.default && component?.module) {
    // return js dynamic import
    return component.module();
  }

  return component;
}

function baseComponentFactory(componentName: string, exportName?: string, isEditing?: boolean) {
  const DEFAULT_EXPORT_NAME = 'Default';
  const component = components.get(componentName);

  // check that component should be dynamically imported
  if (component?.element) {
    // return next.js dynamic import
    return component.element(isEditing);
  }

  if (exportName && exportName !== DEFAULT_EXPORT_NAME) {
    return component[exportName];
  }

  return component?.Default || component?.default || component;
}
  
export function componentFactory(componentName: string, exportName?: string) {
  return baseComponentFactory(componentName, exportName, false);
}

export function editingComponentFactory(componentName: string, exportName?: string) {
  return baseComponentFactory(componentName, exportName, true);
}
