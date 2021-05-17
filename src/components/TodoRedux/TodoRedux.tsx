import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './redux/store'
import { addTodo, removeTodo, setTodoStatus } from './redux/todoSlice'

const TodoRedux = () => {
  const [todoDescription, setTodoDescription] = useState('')

  const todoList = useSelector((state: RootState) => state)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="flex flex-col items-center">
      <h1 className="m-4 p-2 text-white text-xl font-semibold">
        Redux To-Do List App
      </h1>
      <div>
        <input
          onChange={e => setTodoDescription(e.target.value)}
          value={todoDescription}
          type="text"
          className="px-4 mb-2 h-8 text-lg placeholder-gray-300 border outline-none rounded"
          placeholder="Add ToDo"
        />
        <input
          type="submit"
          value="Submit"
          onClick={() => {
            if (todoDescription.length === 0) {
              alert('Add ToDo')
            } else {
              dispatch(addTodo(todoDescription))
              setTodoDescription('')
            }
          }}
          className="h-[34px] cursor-pointer px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-8"
        />
      </div>
      {todoList.map(todo => (
        <div className="flex  items-center justify-around" key={todo.id}>
          <div className="text-white">{todo.description}</div>
          <div>
            <input
              className="cursor-pointer px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-8"
              type="submit"
              value="Remove ToDo"
              onClick={() => dispatch(removeTodo(todo.id))}
            />
            <input
              className="form-checkbox h-5 w-5 text-indigo-700"
              type="checkbox"
              onChange={() => {
                dispatch(
                  setTodoStatus({ completed: !todo.completed, id: todo.id })
                )
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default TodoRedux
