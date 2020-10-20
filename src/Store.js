import rootReducers from './Reducers/rootReducers'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const middleware = [thunk]

const store = createStore(rootReducers, applyMiddleware(thunk))
export default store