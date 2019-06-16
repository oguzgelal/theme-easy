import { createStyle } from '../src';

describe('createStyle should work properly', () => {

  test('should create a style', () => {
    const colorStyle = createStyle('color', theme => ({ black: '#000' }));
    expect(typeof colorStyle).toBe('object');
    expect(colorStyle.hasOwnProperty('resolve')).toBe(true);
    expect(typeof colorStyle.resolve).toBe('function');
    expect(colorStyle.hasOwnProperty('override')).toBe(true);
    expect(typeof colorStyle.override).toBe('function');
    expect(colorStyle.hasOwnProperty('id')).toBe(true);
    expect(colorStyle.id).toBe('color');
  })

  test('should resolve correctly', () => {
    const buttonStyle = createStyle('button', theme => ({ background: theme.black }))
    const buttonTheme = buttonStyle.resolve({ black: '#000' });
    expect(typeof buttonTheme).toBe('object');
    expect(buttonTheme.hasOwnProperty('background')).toBe(true);
    expect(buttonTheme.background).toBe('#000');
  })

})