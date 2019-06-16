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

  // returns the style with its resolver wrapped around a function
  // with theme override function in its closure, once resolve gets
  // executed, it will merge the output of the original theme function
  // with the output of the theme override function and return. this
  // function could be chained and called multiple times, in that case
  // override functions passed on the later calls will have precendence
  // over the ones before
  override: function (themeOverrideFn) {
    return Object.assign({}, this, {
      resolve: theme => merge(
        this.resolve(theme),
        themeOverrideFn(theme)
      )
    })
  }
})
