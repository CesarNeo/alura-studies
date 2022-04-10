import { v4 as uuidv4 } from 'uuid'

import { FormEvent, useState } from 'react'
import { Task } from '../../types/task'
import { Button } from '../Button'

import style from './Form.module.scss'

interface FormProps {
  setTarefas: React.Dispatch<React.SetStateAction<Task[]>>
}

export function Form(props: FormProps) {
  const { setTarefas } = props
  const [state, setState] = useState({
    tarefa: '',
    tempo: '00:00'
  })

  function addTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setTarefas(oldTasks => [
      ...oldTasks,
      { ...state, select: false, completed: false, id: uuidv4() }
    ])
    setState({
      tarefa: '',
      tempo: '00:00'
    })
  }

  return (
    <form className={style.novaTarefa} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar"
          value={state.tarefa}
          onChange={event => setState({ ...state, tarefa: event.target.value })}
        />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step={1}
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          value={state.tempo}
          onChange={event => setState({ ...state, tempo: event.target.value })}
          required
        />
      </div>

      <Button type="submit">Adicionar</Button>
    </form>
  )
}
