import './App.css'
import CountdownTimer from './components/timer'
import UserList from './components/downloadData'
import WindowSize from './components/windowSize'

function App() {

  return (
    <>
      <div>
        <h2>Задание 1: Таймер</h2>
        <CountdownTimer />
      </div>

      <div>
        <h2>Задание 2: Загрузка данных</h2>
        <UserList />
      </div>

      <div>
        <h2>Задание 3: Отслеживание размеров окна</h2>
        <WindowSize />
      </div>
    </>
  )
}

export default App
