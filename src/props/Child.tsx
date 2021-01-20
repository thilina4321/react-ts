import React from 'react'

interface ChildProfs  {
    color:string
}

const Child = ({color}:ChildProfs) => {
    return (
        <div>
            {color}
        </div>
    )
}
export default Child
