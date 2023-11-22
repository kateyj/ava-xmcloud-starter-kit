/**
 * Generates React boilerplate for a component under `src/components`
 * @param componentName - the component name
 * @returns component src boilerplate as a string
 */
function generateComponentStyleSrc(componentName: string): string {
  return `.${componentName}-container {
    //delete this when starting
    border: 2px solid red;
  }
  `;
}

export default generateComponentStyleSrc;
