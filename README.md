# theme-easy

```javascript
import { createStyle, combineStyles, createTheme } from 'theme-easy';

// constants
const Intent = { default: 'intent_default', primary: 'intent_primary' };
const Mode = { light: 'mode_light', dark: 'mode_dark' };

// create scales and styles
const colorScale = createStyle(_ => ({
  black: '#10161A',
  white: '#FFFFFF',
  darkGrays: [ '#182026', '#202B33', '#293742', '#30404D', '#394B59' ],
  grays: [ '#5C7080', '#738694', '#8A9BA8', '#A7B6C2', '#BFCCD6' ],
  lightGrays: [ '#CED9E0', '#D8E1E8', '#E1E8ED', '#EBF1F5', '#F5F8FA' ],
  blues: [ '#0E5A8A', '#106BA3', '#137CBD', '#2B95D6', '#48AFF0' ],
  greens: [ '#0A6640', '#0D8050', '#0F9960', '#15B371', '#3DCC91' ],
  oranges: [ '#A66321', '#BF7326', '#D9822B', '#F29D49', '#FFB366' ],
  reds: [ '#A82A2A', '#C23030', '#DB3737', '#F55656', '#FF7373' ],
}));

const spacesScale = createStyle(_ => ({
  screenSizes: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32],
  space: [0, 4, 8, 16, 32, 64],
}));

const colorStyle = createStyle(({ colors }) => ({
  bw: { [Mode.dark]: colors.white, [Mode.light]: colors.black },
  danger: colors.reds[2],
  success: colors.green[2],
  primary: colors.blue[2]
}), {
  colors: colorScale
});

const breakpointStyle = createStyle(({ breakpoints }) => ({
  small: breakpoints[0],
  medium: breakpoints[1],
  large: breakpoints[2],
}), {
  breakpoints: spacesScale.screenSizes
});

const fontSizeStyle = createStyle(({ fontSizes }) => ({
  xs: fontSizes[0],
  s: fontSizes[1],
  m: fontSizes[2],
  l: fontSizes[3],
  xl: fontSizes[4],
  xxl: fontSizes[5],
}), {
  fontSizes: spacesScale.fontSizes
});

// create a style for button
const buttonStyle = createStyle(({ color }) => ({
  border: 'none',
  bg: {
    [Intent.primary]: color.primary,
    [Intent.default]: {
      [Mode.dark]: color.white,
      [Mode.light]: color.black,
    }
  }
  color: {
    [Intent.primary]: color.white,
    [Intent.default]: {
      [Mode.dark]: color.black,
      [Mode.light]: color.white,
    }
  }
}), {
  color: colorStyle,
})

// combine styles - order doesn't matter
const stylesCombined = combineStyles({
  colors: colorStyle,
  button: buttonStyle
});

// create the theme
const theme = createTheme(stylesCombined, {
  // set default values
  defaults: [ Intent.default, Mode.light ],
  // this is function to find theme from given props.
  // default behaviour is to look for `props.theme`, which is
  // a convention used by mainstream css-in-js libraries such as
  // styled-components and emotion. if this isn't the case, you
  // can specify where TE can find the theme object.
  findTheme: props => props.theme,
});

// use theme object (with api's attached) to style your components.
// any method could be used to pass around the theme object,
// the example below uses styled-component's ThemeProvider

return (
  <ThemeProvider theme={theme}>
    ...
  </ThemeProvider>
);

const Button = styled.button`
  background-color: ${t('button.bg')};
  color: ${t('button.color')};

  /* if you need to use the props for some reason: */
  background-color: ${p => p.whatever ? '' : t('button.bg', p)}
`;

/*
  without styled components, `t` function could be used by
  providing theme and args like below:
  ---
  t('button.bg')({ theme, targs: [Intent.primary] }) // or:
  t('button.bg', { theme, targs: [Intent.primary] })
*/

return (
  <>
    <Button>I'm a default button in light mode</Button>
    <Button targs={Intent.primary}>I'm a primary button in light mode</Button>
    <Button targs={[Intent.primary, Mode.dark]}>I'm a primary button in dark mode</Button>
    <Button targs={Mode.dark}>I'm a default button in dark mode</Button>
  </>
);



```
