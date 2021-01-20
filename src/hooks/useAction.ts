import { useDispatch } from 'react-redux'
import {bindActionCreators} from 'redux'
import {searchActionCreator} from '../store/index'

export const useAction = ()=>{

    const dispatch = useDispatch()

    return bindActionCreators(searchActionCreator, dispatch)

}