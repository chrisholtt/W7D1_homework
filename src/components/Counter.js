import React from 'react'

const Counter = (props) => {
    const todos = props.todos
    const count = todos.length
    const completed = todos.filter((todo) => todo.priority == 'high').length




    return (
        <>
            <div className='center'>
                <h2 className='counter'>{completed}/{count}</h2>
            </div>
        </>
    )
}

export default Counter