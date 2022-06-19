import React from "react";
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import { Header } from "./components/header";
import Footer  from "./components/footer";
import { HomePage } from "./pages/home-page";
import { GamePage } from "./pages/game-page";
import { Exclusive } from "./pages/Exclusive";
import { Contact } from "./pages/Contact/Contact";
import { About } from "./pages/About";
// import "./App.css"

import { Provider } from "react-redux";
import { store } from "./store";


function App() {
    return (
        
    <Provider store={ store }>
      <Router>
        <div className="App">
                    <Route> <Header />
                        </Route>
                    <Switch>

              <Route exact path="/app/:title">
                <GamePage />
              </Route>
              <Route exact path="/">
                <HomePage />
              </Route>

              <Route exact path="/Exclusive">
                <Exclusive />
              </Route>

              <Route exact path="/Contact">
                <Contact />
              </Route>

              <Route exact path="/About">
                <About />
              </Route>

            </Switch>
            <Route> <Footer />
                        </Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
