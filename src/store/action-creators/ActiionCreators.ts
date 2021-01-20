import axios from 'axios' 
import {ActionType} from '../action-types/ActionType'
import {Action} from '../actions/Actions'
import {Dispatch} from 'redux'

export const searchData = (term:string)=>{
    return async (dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.LOADING,
        })
        
        try {
            const {data} = await axios.get('https://registry.npmjs.org/-/v/search',{
                params:{
                    text:term
                }
            })

            const names = data.objects.map((object:any)=> object.package.name)

            dispatch({type:ActionType.SUCCESS,
                payload:names,
                
            })

            
        } catch (error) {
            console.log(error.message);
            
            dispatch({
                type:ActionType.ERROR,
                payload:error.message
            })
        }
    }
}