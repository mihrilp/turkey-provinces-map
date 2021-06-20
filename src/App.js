import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import CityDetail from "./pages/CityDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:city" component={CityDetail} />
      </Switch>
    </Router>
  );
}

export default App;
