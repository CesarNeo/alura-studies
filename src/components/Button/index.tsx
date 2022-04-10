import { ReactNode } from 'react'
import style from './Button.module.scss'

interface ButtonProps {
  children: ReactNode
}

export function Button(props: ButtonProps) {
  const { children } = props

  return <button className={style.botao}>{children}</button>
}
