import { createStore } from 'redux'

import reducer from './reducer'

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(reducer)


export default store