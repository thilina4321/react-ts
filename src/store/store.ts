import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer/combine-reducer'


export const store = createStore(reducer, {}, applyMiddleware(thunk))


