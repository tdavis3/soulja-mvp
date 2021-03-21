import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./components/layout/Header";
import Landing from "./components/Landing";
import SignedCopies from "./components/SignedCopies";
import AutographDraw from "./components/AutographDraw";
import SingleCopy from "./components/SingleCopy";


function App() {
    return (
        <Router>
            <div className="App">
                {/*<header className="App-header">*/}
                {/*    <AutographDraw/>*/}
                {/*</header>*/}
                <Header/>
                <Switch>
                    <Route path="/signed">
                        <SignedCopies/>
                    </Route>
                    <Route path="/autograph">
                        <AutographDraw />
                    </Route>
                    <Route path="/signed-copy">
                        <SingleCopy/>
                    </Route>
                    <Route path="/">
                        <Landing/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
