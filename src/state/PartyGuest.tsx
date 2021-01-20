import React, { useEffect, useRef, useState } from 'react'

const users = [
    {name:'thilina', age:23},
    {name:'dila', age:35},
]
const PartyGuest = () => {
    const [name, setName] = useState('')
    const [quests, setGusets] = useState<string[]>([])
    const [sGuest, setSguest] = useState<{name:string, age:number} | undefined>()
    const ref = useRef<HTMLInputElement | null>(null)

    useEffect(()=>{
        ref.current?.focus()
    },[])

    const onClick = ()=>{
        setGusets([...quests, name])
        setName('')
    }

    const search = ()=>{
        const user = users.find(user=>user.name === name)
        setSguest(user)
        setName('')
    }

    const onSetName = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value)
    }

    const onDragStart = (e:React.DragEvent<HTMLDivElement>)=>{
        console.log('Drag me');
        
    }

    return (
        <div>
            <h1> Party List </h1>
            {quests.map((quest,index)=>{
                return <div key={index}> {quest} </div>
            })}
            <input ref={ref}
             value={name}  onChange={(e)=>setName(e.target.value)}/>
            <button onClick={onClick}> ADD Guest </button>

            <div>
                <h1> Search Guest </h1>
                <input value={name} onChange={onSetName}/>
                <button onClick={search}> Search </button>

                {sGuest ? sGuest.name: 'no guest found'}
            </div>

            <div draggable onDragStart={onDragStart}>
                <h1>Drag Me!</h1>
            </div>
        </div>
    )
}

export default PartyGuest
