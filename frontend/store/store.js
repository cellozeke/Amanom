import { applyMiddleware, createStore, compose  } from "redux"
import logger from "redux-logger"
import thunk from "../middleware/thunk"
import rootReducer from '../reducers/root_reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = (preloadedState={}) => createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(thunk, logger)))

export default configureStore
