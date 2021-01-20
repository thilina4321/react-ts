import React, { useState } from 'react'
import {useAction} from './hooks/useAction'

const App = () => {
    const [term, setterm] = useState('')
    // const dispatch = useDispatch()
    const {searchData} = useAction()

    const onSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        
        searchData(term)
        // dispatch( searchActionCreator.searchData(term))
    }

    return (
        <div>
            <h1>You can search </h1>
            <form onSubmit={onSubmit}>
                <input onChange={e=>setterm(e.target.value)}/>
                <button> Search </button>
            </form>
        </div>
    )
}

export default App
