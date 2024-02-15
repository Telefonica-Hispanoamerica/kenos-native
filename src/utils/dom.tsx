import { DataAttributes } from "./types";

/**
 * Prefixes given attributes with `data-`
 *
 * For example: `{foo: 'bar'}` => `{data-foo: 'bar'}`
 */
export const getPrefixedDataAttributes = (attrs?: DataAttributes, componentName?: string): DataAttributes => {
    const result: DataAttributes = componentName ? {'data-component-name': componentName} : {};
    if (attrs) {
        Object.keys(attrs).forEach((key) => {
            result['data-' + key] = attrs[key];
        });
    }
    return result;
};