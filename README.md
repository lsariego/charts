# CHILECOMPRA - FRONTEND BOILERPLATE

## FEATURES

- [x] Basic environment files per environments (duh!)
- [x] PR template
- [x] Code linting with standardjs and prettier
- [x] Code formatting with prettier
- [x] Commit hooks with husky
- [x] Commit linting with Jira conventions' rules
- [x] Routes and pages
- [x] Extends CRA with CRACO
- [x] CSS-in-JS with styled-components
- [x] CSS Theme with Material UI and styled-components
- [x] State management
- [x] Log levels
- [x] Basic directory structure
- [x] Basic flow as example
- [x] Custom errors
- [x] HTTP requests cancellations with axios
- [x] HTTP requests retries with axios

## REQUIREMENTS

- Bash terminal (for people using vscode on windows, follow [these](https://code.visualstudio.com/docs/editor/integrated-terminal) instructions)
- Node.js (>= 10.21.0)
- NPM

## GET STARTED

### BUILDING IT

```bash
# To make a new build with development configurations
$ npm run build:dev

# To make a new build with local configurations
$ npm run build:local

# To make a new build with pre-production configurations
$ npm run build:pre

# To make a new build with production configurations
$ npm run build:prod
```

### STARTING LOCALLY

```bash
# To start a local environment with development configurations
$ npm run start:dev

# To start a local environment with local configurations
$ npm run start:local

# To start a local environment with pre-production configurations
$ npm run start:pre

# To start a local environment with production configurations
$ npm run start:prod
```

### FORMATTING

```bash
# To formatting all the code of the project with prettier
$ npm run format

# To linting all the code og the project with eslint, standard and prettier
$ npm run lint
```

### COMMITS LINTING RULES

Currently there are two sets of rules available that can be configured: `Convential Commits` and `Jira Conventional Commits`. You can select which one to use with the following commands:

```bash
# For use Conventional Commits
$ npm run commitlint:conventional

# For use Jira Conventional Commits (default)
$ npm run commitlint:jira
```

## ARCHITECTURE

### FLOW

![Architecture Flow](https://i.ibb.co/J3yPngk/architecture-flow.png)

### STRUCTURE

```bash
public
src
  |-- components
    |-- Basics
      |-- Example.jsx
      |-- Example.hooks.js
    |-- Inputs
    |-- Layouts
    ...
  |-- config
    |-- settings
    |-- store
    |-- styles
    ...
  |-- containers
    |-- Example
      |-- Example.actions.js
      |-- Example.containers.jsx
      |-- Example.reducer.js
      |-- Example.styles.js
      ...
    ...
  |-- modules
    |-- debuggers
    |-- errors
    |-- requests
    |-- storages
    ...
  |-- pages
    ...
  |-- services
    ...
```

- `public`: Where all the static assets lives.
- `src/components`: Where all the presentational components are located.
- `src/config`: Where the configurations of the project lives.
  - `src/config/settings`: Static configurations like environment variables, constants, times, regex, etc.
  - `src/config/store`: The configuration of the redux store.
  - `src/config/styles`: The configuration of the CSS theme.
- `src/containers`: Where all the business components are located.
- `src/modules`: Abstractions to encapsulate tools that are used on different places (SDKs, utils, etc).
  - `src/modules/debuggers`: Tools to track the code.
  - `src/modules/errors`: Tools to expose custom errors.
  - `src/modules/requests`: Tools to make HTTP requests, support cancellation, and create services.
  - `src/modules/storages`: To work with storage tools like cookies, localStorage, and so on.
- `src/pages`: Special components used only to satisfy a unique route match.
- `src/services`: Where all the services lives.

### REQUESTS

There are a couple of helpers named `requests' callers` whose signature is as follow:

```typescript
interface Options {
  body?: {                // the request body
    [key: string]: any;
  }:
  isPublic?: boolean;     // by setting this the Authorization header isn't send
  retries?: number;       // by setting this the request is called again a number of times if it's fails
}
interface Response {
  data: object;           // the response payload
  headers: object;        // the response headers
  request: object;        // the request object
  status: number;         // the response status code
}

type RequestCaller = (url: string, options: Options) => Promise<Response>
```

The current requests' callers available are:

- `deleteJsonRequest`: To make DELETE requests with `application/json` as content type.
- `getJsonRequest`: To make GET requests with `application/json` as content type.
- `patchJsonRequest`: To make PATCH requests with `application/json` as content type.
- `postFormRequest`: To make POST requests with `multipart/form-data` as content type.
- `postJsonRequest`: To make POST requests with `application/json` as content type.
- `putJsonRequest`: To make PUT requests with `application/json` as content type.

**Examples**:

```javascript
// We enable the retries by giving to the caller the retries parameter.
deleteJsonRequest(`${REACT_APP_API_BASE_URL}/users`, { retries: 2 })

// We tell to the request caller that the endpoint is public by giving it the isPublic parameter as true.
getJsonRequest(`${REACT_APP_API_BASE_URL}/users`, { isPublic: true })

getJsonRequest(`${REACT_APP_API_BASE_URL}/users/${userID}`)

// Sending a binary file
postFormRequest(`${REACT_APP_API_BASE_URL}/users/${userID}`, { body: avatar })

postJsonRequest(`${REACT_APP_API_BASE_URL}/users`, { body: { email, name, password } })

putJsonRequest(`${REACT_APP_API_BASE_URL}/users/${userID}`, { body: { name } })
```

### SERVICES

Services are functions that lets you make requests and reuse them as you pleased.

To create a service you need to use the `factoryService` (`src/modules/requests/services`) function which will expose a service that receive only one literal object as argument. It's signature is as follow:

```typescript
interface Args {
  actionType?: string;    // by setting this the cancellation of requests is enabled
  [key: string]: any;
}
interface Response {
  data: object;           // the response payload
  headers: object;        // the response headers
  request: object;        // the request object
  status: number;         // the response status code
}

type ServiceWrapper = (args: Args) => Promise<Response>
```

**Example**: Lets think on a form to create new users and a list of users that when clicking on a row will opens a modal with the related user's profile.

1.- We create a file that will contains all the services needed to create a new user, gets the list of users and gets a user profile.

```javascript
// ===================================================================
// src/service/users.js
// ===================================================================

import { REACT_APP_API_BASE_URL } from '../config/settings/environment'
import { getJsonRequest, postJsonRequest } from '../modules/requests/requests'
import { factoryService } from '../modules/requests/services'

/**
 * Gets the list of users.
 */
const getUsers = factoryService(() => {
  return getJsonRequest(`${REACT_APP_API_BASE_URL}/users`)
})

/**
 * Gets a user by the given identifier.
 */
const getUserByID = factoryService(({ userID }) => {
  return getJsonRequest(`${REACT_APP_API_BASE_URL}/users/${userID}`)
})

/**
 * Create a new user.
 */
const createUser = factoryService(({ email, password, name }) => {
  return postJsonRequest(`${REACT_APP_API_BASE_URL}/users`, { email, password, name })
})
```

2.- We create the actions and thunk needed to retrieve the list of users.

```javascript
// ===================================================================
// src/containers/UsersList/UsersList.actions.js
// ===================================================================

import { makeActionCreator } from '../../config/store/utils'
import { getUsers } from '../../services/users'

const GET_USERS = 'GET_USERS'
const GET_USERS_ERROR = 'GET_USERS_ERROR'
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
const onGetUsers = makeActionCreator(GET_USERS)
const onGetUsersError = makeActionCreator(GET_USERS_ERROR, 'payload')
const onGetUsersSuccess = makeActionCreator(GET_USERS_SUCCESS, 'payload')
const onGetUsersThunk = () => async dispatch => {
  dispatch(onGetUsers())

  try {
    // We enable the cancellation by giving an action type to the service.
    const response = await getUsers({ actionType: GET_USERS })

    return dispatch(onGetUsersSuccess({ users: response.data }))
  } catch (error) {
    return dispatch(onGetUsersError({ error }))
  }
}
```

3.- We create the actions and thunk needed to create a new user.

```javascript
// ===================================================================
// src/containers/UserForm/UserForm.actions.js
// ===================================================================

import { batch } from 'react-redux'
import { makeActionCreator } from '../../config/store/utils'
import { createUser } from '../../services/users'
import { onGetUsers } from '../UsersList.actions'

const HIDE_USER_FORM_SUCCESS = 'HIDE_USER_FORM_SUCCESS'
const onHideUserFormSuccess = makeActionCreator(HIDE_USER_FORM_SUCCESS)

const CREATE_USER = 'CREATE_USER'
const CREATE_USER_ERROR = 'CREATE_USER_ERROR'
const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
const onCreateUser = makeActionCreator(CREATE_USER)
const onCreateUserError = makeActionCreator(CREATE_USER_ERROR, 'payload')
const onCreateUserSuccess = makeActionCreator(CREATE_USER_SUCCESS, 'payload')
const onCreateUserThunk = ({ email, password, name }) => async dispatch => {
  dispatch(onCreateUser())

  try {
    const response = await getUser({ userID })

    return batch(() => {
      dispatch(onCreateUserSuccess({ user: response.data }))
      dispatch(onHideUserFormSuccess())
    })
  } catch (error) {
    return dispatch(onCreateUserError({ error }))
  }
}
```

4.- We create the actions and thunk needed to retrieve the user profile.

```javascript
// ===================================================================
// src/containers/UserProfile/UserProfile.actions.js
// ===================================================================

import { batch } from 'react-redux'
import { makeActionCreator } from '../../config/store/utils'
import { getUser } from '../../services/users'

const GET_USER = 'GET_USER'
const GET_USER_ERROR = 'GET_USER_ERROR'
const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
const onGetUser = makeActionCreator(GET_USER)
const onGetUserError = makeActionCreator(GET_USER_ERROR, 'payload')
const onGetUserSuccess = makeActionCreator(GET_USER_SUCCESS, 'payload')
const onGetUserThunk = ({ userID }) => async dispatch => {
  dispatch(onGetUser())

  try {
    const response = await getUser({ userID })

    return dispatch(onGetUserSuccess({ user: response.data }))
  } catch (error) {
    return dispatch(onGetUserError({ error }))
  }
}

const SHOW_USER_PROFILE_SUCCESS = 'SHOW_USER_PROFILE_SUCCESS'
const onShowUserProfileSuccess = makeActionCreator(SHOW_USER_PROFILE_SUCCESS)
const onShowUserProfileThunk = ({ userID }) => dispatch => {
  return batch(() => {
    dispatch(onShowUserProfileSuccess())
    dispatch(onGetUser({ userID }))
  })
}
```

### STYLED COMPONENTS AND THEME

Styled components are a way to write CSS that's scoped to a single component, and not leak to any other element in the page.

**Example**: Lets think on container that shows a user profile.

1.- We have a file with the suffix `.styles` with all the styled components that our container will consume. Any type of component can have their own `.styles` file like pages, containers or presentational components.

```javascript
// ===================================================================
// src/containers/UserProfile/UserProfile.styles.js
// ===================================================================

import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
`

export const Name = styled.h1`
  font-family: 'Roboto';
  margin: 0 0 5px;
`

export const Section = styled.section`
  display: flex;
  padding: 5px 0;
  width: 100%;
`

export const Field = styled.section`
  display: inherit;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  width: 50%;
`
```

2.- And we just import them into our container and use them as normal components.

```javascript
// ===================================================================
// src/containers/UserProfile/UserProfile.container.jsx
// ===================================================================

// ...
import { Root, Name, Section, Field } from './UsersList.container'
// ...

return (
  <Root>
    <Name>John Doe</Name>
    <Section>
      <Field>E-mail:</Field>
      <Field>john.doe@example.com</Field>
    </Section>
  </Root>
)
```

Styled components are just normal components with its styles already set, so you can pass them HTML attributes and props.

**Example**: Passing HTML attributes and props into our styled components.

1.- We are passing some HTML attributes to all our components and a `bold` prop into our `Field` component to highlight its content.

```javascript
// ===================================================================
// src/containers/UserProfile/UserProfile.container.jsx
// ===================================================================

// ...
import { Section, Field, Button } from './UserProfile.styles'
// ...

<Section>
  <Field title="E-mail">E-mail:</Field>
  <Field bold title="john.doe@example.com">john.doe@example.com</Field>
  {/* Where Button is a component */}
  <Button type="button" variant="secondary" onClick={handleClick}>Click</Button>
</Section>
// ...
```

2.- Consuming props in our styled component.

```javascript
// ===================================================================
// src/containers/UserProfile/UserProfile.styles.js
// ===================================================================

// ...
import Button from '../../components/Basics/Button'
// ...

export const Field = styled.section`
  display: inherit;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: ${props => props.bold ? '500' : '300'};
  width: 50%;
`

// We can extends the styles of a existent component
export const Button = styled(Button)`
  border-radius: 30px;
`
```

There is an special prop that is bind into all the styled components presets in the project without the need of explicitly passed it, this is the `theme` prop. The theme is a bunch of presets that let us share styles of our brand between all our components. You can see the default presets in the `src/config/styles/theme` file.

**Example**: Consuming our theme to set the font-family.

```javascript
// ===================================================================
// src/containers/UserProfile/UserProfile.styles.js
// ===================================================================

// ...
export const Field = styled.section`
  display: inherit;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 13px;
  font-weight: ${props => props.bold ? '500' : '300'};
  width: 50%;
`

// We can extends the styles of a existent component
export const Button = styled(Button)`
  color: ${props => props.theme.palette.brand.white};
  border-radius: 30px;
`
// ...
```

## STANDARDS AND CONVENTIONS

TODO

## TESTING

TODO

## VSCODE PLUGINS

These are some plugins that may be useful to work with this boilerplate:

- [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

## RESOURCES

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [React Redux](https://react-redux.js.org/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Styled Components](https://styled-components.com/)
- [Material-UI](https://material-ui.com/)
- [React Transition Group](https://reactcommunity.org/react-transition-group/)
- [Standard](https://standardjs.com/)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Jira Conventional Commits](https://github.com/Gherciu/commitlint-jira)
- [Date Fns](https://date-fns.org/)

---
&copy; 2020
