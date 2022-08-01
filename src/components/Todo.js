import React, { useEffect, useState } from 'react'
import Counter from './Counter'

const Todo = () => {

    function storedTodos() {
        return JSON.parse(localStorage.getItem('todos'))
    }
    storedTodos()

    const [todos, setTodos] = useState(storedTodos)
    const [newTodo, setNewTodo] = useState('')


    const handleNewTodo = (e) => {
        setNewTodo(e.target.value)
    }

    const submitNewTodo = (event) => {
        event.preventDefault()
        setTodos((prev) => {
            return [...prev, {
                name: newTodo,
                priority: 'low'
            }]
        })
        setNewTodo('')
    }

    const handlePriorityChange = (e, index) => {
        const { value } = e.target
        const newArr = [...todos]
        newArr[index].priority = value
        setTodos(newArr)
    }

    const deleteTodo = (index) => {
        const newArr = [...todos]
        newArr.splice(index)
        setTodos(newArr)
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])



    const todoItems = todos.map((todo, index) => {
        return (
            <li key={index} className={todo.priority === 'high' ? 'high-priority' : 'low-priority'} >
                <h3>{todo.name}</h3>
                <div>
                    <label htmlFor="high">high</label>
                    <input type="radio" id='high' value='high' checked={todo.priority === 'high' ? true : false} onChange={(e) => handlePriorityChange(e, index)} />
                    <label htmlFor="low">low</label>
                    <input type="radio" id='low' value='low' checked={todo.priority === 'low' ? true : false} onChange={(e) => handlePriorityChange(e, index)} />
                    <button onClick={() => deleteTodo(index)}>Del</button>
                </div>
            </li>
        )
    })

    return (
        <>
            <Counter todos={todos} />
            <div className='todo-wrapper'>
                <ul className='todo-list'>
                    {todoItems}
                </ul>
            </div>

            <div className='add-todo'>
                <form onSubmit={submitNewTodo}>
                    <input type="text" placeholder='add todo' value={newTodo} onChange={handleNewTodo} />
                    <input type="submit" />
                </form>
            </div>
        </>
    )
}

export default Todo