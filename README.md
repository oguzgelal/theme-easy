# theme-easy

```javascript
import { createStyle, combineStyles, createTheme } from 'theme-easy';

// constants
const Intent = { default: 'intent_default', primary: 'intent_primary' };
const Mode = { light: 'mode_light', dark: 'mode_dark' };

// create a style for color
const colorStyle = createStyle('color', _ => ({
    red: '#ff0000',
    black: '#000',
    white: '#fff',
}))

// create a style for button
const buttonStyle = createStyle('button', theme => ({
  bg: {
    [Intent.primary]: theme.color.red,
    [Intent.default]: {
      [Mode.dark]: theme.color.white,
      [Mode.light]: theme.color.black,
    }
  }
  color: {
    [Intent.primary]: theme.color.white,
    [Intent.default]: {
      [Mode.dark]: theme.color.black,
      [Mode.light]: theme.color.white,
    }
  }
}), [colorStyle])

// combine styles - order doesn't matter
const stylesCombined = combineStyles(colorStyle, buttonStyle);

// create the theme, set default values
const theme = createTheme(stylesCombined, {
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

/*
  without styled components, `t` function could be used by
  providing theme and args like either one below:
  ---
  t('button.bg')({ theme, targs: [Intent.primary] })
  t('button.bg', { theme, targs: [Intent.primary] })
*/

const Button = styled.button`
  background-color: ${t('button.bg')};
  color: ${t('button.color')};
`;

return (
  <>
    <Button>I'm a default button in light mode</Button>
    <Button targs={Intent.primary}>I'm a primary button in light mode</Button>
    <Button targs={[Intent.primary, Mode.dark]}>I'm a primary button in dark mode</Button>
    <Button args={Mode.dark}>I'm a default button in dark mode</Button>
  </>
);



```
