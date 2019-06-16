import isNil from 'lodash/isNil';
import isEmpty from 'lodash/isEmpty';
import getThemeValue from './getThemeValue';
import addToTheme from './utils/addToTheme';

/*
const createThemeAcc = (themeArg, stylesArg, stylesMerge = []) => (...overridenStyles) => mode => {

  // initiate empty theme object or use existing
  const theme = (isNil(themeArg) || isEmpty(themeArg)) ?
    { current: mode } :
    themeArg;

  // convert object array to dict
  const overriden = (overridenStyles || [])
    .filter(s => s && s.id)
    .reduce((acc, c) => ({...acc, [c.id]: c}), {});

  // add styles to the theme
  const useStyles = stylesArg || styles;
  (useStyles.concat(stylesMerge)).forEach(style => {
    addToTheme(theme, overriden, style)
  })

  // attach getter method
  theme.get = getThemeValue(theme, mode)

  // insert a style to the theme
  theme.extend = (...stylesMerge) => {
    return createThemeAcc(theme, stylesArg, stylesMerge)(...overridenStyles)(mode);
  }

  // attach overrider
  theme.override = (...overrideFunctions) => {
    const combinedOverrides = (overridenStyles || []).concat(
      overrideFunctions.map(fn => fn(theme)))

    return createThemeAcc(theme, stylesArg)(...combinedOverrides)(mode);
  };

  return theme;
}

export const createThemeWithStyles = (...styles) => mode => {
  return createThemeAcc({}, styles)(null)(mode);
}

export default mode => {
  return createThemeAcc({}, null)(null)(mode);
};
*/
