import TerminalScreen from '../components/TerminalScreen/TerminalScreen'

const MainPage = ({ cells, rows, columns }) => {
    return (
        <div>
            <h1>Main Page title</h1>
            <TerminalScreen cells={cells} rows={rows} columns={columns}/>
        </div>
    )
}

export default MainPage