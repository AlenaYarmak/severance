import TerminalScreen from '../components/TerminalScreen/TerminalScreen'

const MainPage = ({ cells }) => {
    return (
        <div>
            <h1>Main Page title</h1>
            <TerminalScreen cells={cells}/>
        </div>
    )
}

export default MainPage