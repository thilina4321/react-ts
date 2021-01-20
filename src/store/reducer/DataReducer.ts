import {ActionType} from '../action-types/ActionType'
import {Action} from '../actions/Actions'


interface initialStateType{
    loading:boolean
    data:string[]
    error:string | null
}

const initialState = {
    loading:false,
    data:[],
    error:null
}


const reducer = (state:initialStateType = initialState, action:Action):initialStateType=>{
    switch(action.type){
        case ActionType.SUCCESS:
            return {loading:false, data:action.payload, error:null}
        
        case ActionType.LOADING:
            return {loading:true, data:[], error:null}
        
        case ActionType.ERROR:
            return {loading:false, data:[], error:action.payload}
        
        default:return state
    }
}

export default reducer