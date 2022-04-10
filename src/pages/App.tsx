import { Form } from '../components/Form'
import { List } from '../components/List'
import { Stopwatch } from '../components/Stopwatch'

import style from './style.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Stopwatch />
    </div>
  )
}

export default App
