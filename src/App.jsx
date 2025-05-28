import MainPage from './views/MainPage'
import { calculateItemsCount } from './utils/calculateItemCount'

const App = () => {

  /* define rows and columns here */
  const rows = 9
  const columns = 15
  const cellsAmount = calculateItemsCount(rows, columns)

  return (
    <>
     <h1>Severance</h1>
     <MainPage cells={cellsAmount} rows={rows} columns={columns}/>
    </>
  )
}

export default App
