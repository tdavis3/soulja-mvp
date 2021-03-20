import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./components/layout/Header";
import AutographDraw from "./components/AutographDraw";
import {Flex, Box, Heading, Text} from 'rebass';

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
                        <Flex>
                          <Box
                            p={3}
                            width={1/2}
                            color='#6F6F6F'
                            bg='primary'>
                            <Heading
                              fontSize={[ 5, 6, 7 ]}
                              color='primary'>
                              Soulja World
                            </Heading>
                            <Text
                              fontSize={[ 3, 4, 5 ]}
                              fontWeight='bold'
                              color='primary'>
                              By Soulja Boy
                            </Text>
                            <Text
                              fontSize={[ 1, 2, 3 ]}
                              fontWeight='bold'
                              color='primary'>
                              Soulja Boy’s first digital album drop. Buy $CRANK tokens, sell $CRANK tokens. When you’re ready to join the club of winners, redeem for a signed digital album. You can request Soulja Boy sign your digital album.
                            </Text>
                          </Box>
                          <Box
                            p={3}
                            width={1/2}
                            color='#6F6F6F'
                            bg='secondary'>
                            Box
                          </Box>
                        </Flex>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
