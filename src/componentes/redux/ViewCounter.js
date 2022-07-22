import React from 'react'
import { useSelector} from 'react-redux'

export function ViewCounter() {
    const count = useSelector((state) => state.counter.value)

    return (
        <div>
            <h2>ViewCounter Component</h2>
            <div>
                <span>{count}</span>
            </div>
        </div>
    )
}