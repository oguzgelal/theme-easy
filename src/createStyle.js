import merge from 'lodash/merge';

export default (id, themeFn, dependencies = []) => ({

  // id of this style, also the
  // object key in the theme object
  id,

  // id's of other styles that this style depends on
  dependencies,

  // resolve the style with given theme. this will be
  // executed at createTheme step after all the overrides
  resolve: theme => themeFn(theme),

  // override function returns the style with resolve wrapped
  // around a function with override object in its closure, and
  // once executed it will merge the output of the theme function
  // with the enclosed override object and return. override
  // function could be called multiple times, in that case, the
  // object passed on the later calls will have precendence over
  // the ones before
  override: function (obj) {
    return { ...this, resolve: theme => merge(this.resolve(theme), obj) }
  }
})
