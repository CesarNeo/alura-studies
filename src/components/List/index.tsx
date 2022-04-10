import { Task } from '../../types/task'
import { Item } from './Item'

import style from './List.module.scss'

interface ListProps {
  tasks: Task[]
}

export function List(props: ListProps) {
  const { tasks } = props

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map(task => (
          <Item key={task.tarefa} {...task} />
        ))}
      </ul>
    </aside>
  )
}
