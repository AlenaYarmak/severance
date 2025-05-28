import MainPage from './views/MainPage'
import { calculateItemsCount } from './utils/calculateItemCount'
import { getRandomArrayNumbers } from './utils/getRandomArrayNumbers'

const App = () => {

  /* define rows and columns here */
  const rows = 9
  const columns = 15
  const cellsAmount = calculateItemsCount(rows, columns)
  const randomArrayNumbers = getRandomArrayNumbers(cellsAmount)
  console.log(randomArrayNumbers)

  return (
    <>
     <h1>Severance</h1>
     <MainPage cellsAmount={randomArrayNumbers} rows={rows} columns={columns}/>
    </>
  )
}

export default App
