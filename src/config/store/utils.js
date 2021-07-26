/**
 * Action Creators' generator.
 *
 * Reference: https://redux.js.org/recipes/reducing-boilerplate#generating-action-creators
 */
export const makeActionCreator = (type, ...argNamonth) => {
  return (...args) => {
    const action = { type }

    argNamonth.forEach((_, index) => {
      action[argNamonth[index]] = args[index]
    })

    return action
  }
}
