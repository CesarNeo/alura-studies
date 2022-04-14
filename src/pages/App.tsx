import { useCallback, useState } from 'react'
import { Form } from '../components/Form'
import { List } from '../components/List'
import { Stopwatch } from '../components/Stopwatch'
import { Task } from '../types/task'

import style from './style.module.scss'

function App() {
  const [tarefas, setTarefas] = useState<Task[]>([])
  const [select, setSelect] = useState<Task>()

  function selectTask(selectedTask: Task) {
    setSelect(selectedTask)
    setTarefas(oldTasks =>
      oldTasks.map(task => ({
        ...task,
        select: task.id === selectedTask.id ? true : false
      }))
    )
  }

  const finishTask = useCallback(() => {
    if (select) {
      setSelect(undefined)

      setTarefas(oldTasks =>
        oldTasks.map(task => {
          if (task.id === select.id) {
            return {
              ...task,
              select: false,
              completed: true
            }
          } else {
            return task
          }
        })
      )
    }
  }, [select])

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tasks={tarefas} selectTask={selectTask} />
      <Stopwatch finishTask={finishTask} select={select} />
    </div>
  )
}

export default App
