import TerminalScreen from '../components/TerminalScreen/TerminalScreen'

const MainPage = ({ cellsAmount, matchesNumbers, rows, columns }) => {
    return (
        <div>
            <h1>Main Page title</h1>
            <TerminalScreen 
                cellsAmount={cellsAmount}
                matchesNumbers={matchesNumbers}
                rows={rows} 
                columns={columns}
            />
        </div>
    )
}

export default MainPage