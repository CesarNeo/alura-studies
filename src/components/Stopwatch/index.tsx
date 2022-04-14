import { useCallback, useEffect, useState } from 'react'
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

  const handleRegressive = useCallback((time: number) => {
    setTimeout(() => {
      if (time > 0) {
        setTime(time - 1)

        return handleRegressive(time - 1)
      }
    }, 1000)
  }, [])

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>

      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>

      <Button onClick={() => handleRegressive(time)}>Começar</Button>
    </div>
  )
}
