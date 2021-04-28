import React, { useState, useEffect, FC } from 'react'

interface TodoType {
  text: string
  completed: boolean
}

const Todo: FC = () => {
  const [value, setValue] = useState<string>('')
  const [todo, setTodo] = useState<TodoType[]>([])
  useEffect(() => {
    const fromStorage = JSON.parse(localStorage.getItem('todos')) || []
    setTodo(fromStorage)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo))
  }, [todo])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  const addTodo = (text: string) => {
    if (text.length === 0) return
    const newTodos: TodoType[] = [...todo, { text, completed: false }]
    setTodo(newTodos)
  }
  const completeTodo = (index: number) => {
    const newTodos: TodoType[] = todo.map((item, idx) =>
      idx === index ? { text: item.text, completed: !item.completed } : item
    )
    setTodo(newTodos)
  }

  const removeTodo = (index: number) => {
    const newTodos: TodoType[] = todo
      .slice(0, index)
      .concat(todo.slice(index + 1, todo.length))
    setTodo(newTodos)
  }

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-500">Todo List</h1>
          <div className="flex mt-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Todo"
              value={value}
              onChange={e => setValue(e.target.value)}
              required
            />
            <input
              type="submit"
              value="Add ToDo!"
              onClick={handleSubmit}
              className="flex-no-shrink outline-none cursor-pointer p-2 border-2 rounded text-black border-blue-500 hover:text-white hover:bg-blue-500"
            />
          </div>
        </div>
        <div>
          {todo.map((item, idx) => (
            <div key={item.text + idx} className="flex mb-2 items-center">
              <p
                className={
                  'w-full text-green break-all ' +
                  `${item.completed ? 'line-through' : ''}`
                }
              >
                {item.text}
              </p>
              <input
                type="submit"
                value={!item.completed ? 'Done' : 'Not Done'}
                className={
                  'cursor-pointer flex-no-shrink p-2 ml-4 mr-2 border-2 outline-none rounded hover:text-white ' +
                  `${
                    !item.completed
                      ? 'border-green-500 hover:bg-green-500'
                      : 'text-gray border-gray-500 hover:bg-gray-500'
                  }`
                }
                onClick={() => completeTodo(idx)}
              />
              <input
                type="submit"
                className="cursor-pointer outline-none flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red-500 hover:text-white hover:bg-red-500"
                value="Remove"
                onClick={() => removeTodo(idx)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Todo
