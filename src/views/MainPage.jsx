import TerminalScreen from '../components/TerminalScreen/TerminalScreen'

const MainPage = ({ cellsAmount, rows, columns }) => {
    return (
        <div>
            <h1>Main Page title</h1>
            <TerminalScreen cellsAmount={cellsAmount} rows={rows} columns={columns}/>
        </div>
    )
}

export default MainPage