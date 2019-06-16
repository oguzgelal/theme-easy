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
  defaults: [ Intent.default, Mode.light ]
});

// use theme object (with api's attached) to style components
// any method could be used to pass around the theme object,
// example below uses styled-component's ThemeProvider

return (
  <ThemeProvider theme={theme}>
    ...
  </ThemeProvider>
);

const Button = styled.button`
  background-color: ${p => p.theme.get('button.bg', [p.intent, p.mode])};
  color: ${p => p.theme.get('button.color', [p.intent, p.mode])};
`;

return (
  <>
    <Button>I'm a default button in light mode</Button>
    <Button intent={Intent.primary}>I'm a primary button in light mode</Button>
    <Button intent={Intent.primary} mode={Mode.dark}>I'm a primary button in dark mode</Button>
    <Button mode={Mode.dark}>I'm a default button in dark mode</Button>
  </>
);



```
