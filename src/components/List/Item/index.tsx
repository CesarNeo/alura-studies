import { Task } from '../../../types/task'
import style from './Item.module.scss'

interface ItemProps extends Task {
  selectTask: (selectedTask: Task) => void
}

export function Item(props: ItemProps) {
  const { tarefa, tempo, completed, select, id, selectTask } = props

  return (
    <li
      className={`${style.item} ${select && style.itemSelecionado} ${
        completed && style.itemCompletado
      }`}
      onClick={() => {
        if (!completed) {
          selectTask({
            id,
            tarefa,
            tempo,
            select,
            completed
          })
        }
      }}
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completed && (
        <span className={style.concluido} aria-label="Tarefa completada"></span>
      )}
    </li>
  )
}
