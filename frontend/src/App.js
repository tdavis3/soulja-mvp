import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./components/layout/Header";
import Landing from "./components/Landing";


function App() {
    return (
        <Router>
            <div className="App">
                {/*<header className="App-header">*/}
                {/*    <AutographDraw/>*/}
                {/*</header>*/}
                <Switch>
                    <Route path="/">
                        <Header/>
                        <Landing/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
