import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Header } from "./components/header";
import Footer  from "./components/footer";
import { HomePage } from "./pages/home-page";
import { GamePage } from "./pages/game-page";
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
            </Switch>
            <Route> <Footer />
                        </Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
