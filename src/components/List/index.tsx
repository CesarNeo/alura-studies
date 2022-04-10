import { useState } from 'react'
import { Item } from './Item'

import style from './List.module.scss'

export function List() {
  const [tarefas, setTarefas] = useState([
    {
      tarefa: 'React',
      tempo: '02:00:00'
    },
    {
      tarefa: 'Javascript',
      tempo: '01:00:00'
    },
    {
      tarefa: 'Typescript',
      tempo: '03:00:00'
    }
  ])

  return (
    <aside className={style.listaTarefas}>
      <h2
        onClick={() => {
          setTarefas([
            ...tarefas,
            {
              tarefa: 'Estudar estado',
              tempo: '05:00:00'
            }
          ])
        }}
      >
        Estudos do dia
      </h2>
      <ul>
        {tarefas.map(tarefa => (
          <Item key={tarefa.tarefa} {...tarefa} />
        ))}
      </ul>
    </aside>
  )
}
