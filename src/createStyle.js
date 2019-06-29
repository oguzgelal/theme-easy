import merge from 'lodash/merge';

export default (styleFn, deps = {}) => ({

  // non-resolved style objects to override
  // this style with
  overrides: [],

  // add styles to override to the overrides array
  override: function (overrideStyles = []) {
    this.overrides = [ ...this.overrides, ...overrideStyles ];
  },

  // resolve the style with given theme. this will be
  // executed at createTheme step after all the overrides
  resolve: () => {

    // resolve all deps of this style, then pass it
    // as an argument to the style function with the same keys
    // TODO: resolve all deps
    // TODO: handle circular dependency
    const depsResolved = {};

    // resolve current style
    const styleResolved = styleFn(depsResolved);

    // TODO: resolve all styles in overrides array
    const overridesResolved = []

    // merge the style and overrides
    return merge(styleResolved, ...overridesResolved);
  },

})
