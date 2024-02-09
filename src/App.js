import './App.css';
import LeftPanel from "./defaultPanel/LeftPanel/LeftPanel";
import RightPanel from "./defaultPanel/RightPanel/RightPanel";
import "/node_modules/flag-icons/css/flag-icons.min.css";

function App() {
    return (
        <div className="App">
            <LeftPanel/>
            <RightPanel/>
        </div>
    );
}

export default App;
