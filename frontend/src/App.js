import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./components/layout/Header";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/">
                        <Header/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
