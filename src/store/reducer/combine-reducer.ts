import {combineReducers} from 'redux'
import DataReducer from './DataReducer'


const reducer = combineReducers({
    data:DataReducer
})

export default reducer