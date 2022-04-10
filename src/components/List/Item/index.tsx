import { Task } from '../../../types/task'
import style from '../List.module.scss'

interface ItemProps extends Task {
  selectTask: (selectedTask: Task) => void
}

export function Item(props: ItemProps) {
  const { tarefa, tempo, completed, select, id, selectTask } = props

  return (
    <li
      className={style.item}
      onClick={() =>
        selectTask({
          id,
          tarefa,
          tempo,
          select,
          completed
        })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}
