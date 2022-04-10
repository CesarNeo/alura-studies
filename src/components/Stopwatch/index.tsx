import { useEffect, useState } from 'react'
import { timeToSeconds } from '../../common/utils/time'
import { Task } from '../../types/task'
import { Button } from '../Button'
import { Clock } from './Clock'

import style from './Stopwatch.module.scss'

interface StopwatchProps {
  select: Task | undefined
}

export function Stopwatch(props: StopwatchProps) {
  const { select } = props
  const [time, setTime] = useState<number>(0)

  useEffect(() => {
    if (select?.tempo) {
      setTime(timeToSeconds(select.tempo))
    }
  }, [select?.tempo])

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>
        Escolha um card e inicie o cronômetro tempo: {time}
      </p>

      <div className={style.relogioWrapper}>
        <Clock />
      </div>

      <Button>Começar</Button>
    </div>
  )
}
