import { Task } from '../../types/task'
import { Item } from './Item'

import style from './List.module.scss'

interface ListProps {
  tasks: Task[]
  selectTask: (selectedTask: Task) => void
}

export function List(props: ListProps) {
  const { tasks, selectTask } = props

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map(task => (
          <Item key={task.tarefa} {...task} selectTask={selectTask} />
        ))}
      </ul>
    </aside>
  )
}
