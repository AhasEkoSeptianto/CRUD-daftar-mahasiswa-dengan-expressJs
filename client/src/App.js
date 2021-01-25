import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/about";
import Application from "./pages/app";
import me from "./pages/me";
import talk from "./pages/talk";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={About}></Route>
          <Route exact path="/application" component={Application}></Route>
          <Route exact path="/me" component={me}></Route>
          <Route exact path="/talk" component={talk}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
