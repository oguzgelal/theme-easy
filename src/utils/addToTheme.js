import isNil from 'lodash/isNil';

// add styles to a theme
export default (theme, overriden, styles) => {
  theme[styles.id] = isNil(overriden[styles.id]) ?
    styles.get(theme) :
    overriden[styles.id].get(theme)
}
