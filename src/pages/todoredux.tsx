import React from 'react'
import Layout from '../components/layout'
import TodoRedux from '../components/TodoRedux'
import { store } from '../components/TodoRedux/redux/store'
import {Provider} from 'react-redux'

const TodoReduxToolkit = () => {
  return (
    <Layout>
      <Provider store={store}>
        <TodoRedux />
      </Provider>
    </Layout>
  )
}

export default TodoReduxToolkit
