/**
 * Action Creators' generator.
 *
 * Reference: https://redux.js.org/recipes/reducing-boilerplate#generating-action-creators
 */
export const makeActionCreator = (type, ...argNames) => {
  return (...args) => {
    const action = { type }

    argNames.forEach((_, index) => {
      action[argNames[index]] = args[index]
    })

    return action
  }
}
