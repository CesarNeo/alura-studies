import { useState } from 'react'
import { Form } from '../components/Form'
import { List } from '../components/List'
import { Stopwatch } from '../components/Stopwatch'
import { Task } from '../types/task'

import style from './style.module.scss'

function App() {
  const [tarefas, setTarefas] = useState<Task[]>([])

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tasks={tarefas} />
      <Stopwatch />
    </div>
  )
}

export default App
