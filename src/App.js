import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import Playground from "./Playground";
import Home from "./Home";
import AppBar from "./AppBar";

const App = () => {
  return (
    <Router>
      <AppBar />

      <Switch>
        <Route path="/chat">
          <Chat />
        </Route>

        <Route path="/playground">
          <Playground myProps={1} />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
