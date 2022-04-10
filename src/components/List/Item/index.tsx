import { Task } from '../../../types/task'
import style from '../List.module.scss'

type ItemProps = Task

export function Item(props: ItemProps) {
  const { tarefa, tempo, completed, select, id } = props

  console.log(completed, select, id)

  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}
