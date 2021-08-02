import { applyMiddleware, createStore } from "redux"
import logger from "redux-logger"
import thunk from "../middleware/thunk"
import rootReducer from '../reducers/root_reducer'

const configureStore = (preloadedState={}) => createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))

export default configureStore