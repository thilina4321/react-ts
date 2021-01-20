import {ActionType} from '../action-types/ActionType'
interface success{
    type:ActionType.SUCCESS
    payload:string[]
}

interface error{
    type:ActionType.ERROR
    payload:string
}
interface loading{
    type:ActionType.LOADING
}

export type Action = success | error | loading
