import style from '../List.module.scss'

interface ItemProps {
  tarefa: string
  tempo: string
}

export function Item(props: ItemProps) {
  const { tarefa, tempo } = props

  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}
