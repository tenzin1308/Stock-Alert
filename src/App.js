import './App.css';
import { Alert } from "./Components/Alert";
import { HotStocks } from "./Components/HotStocks";
import { Nav } from "./Components/Nav";
import { Home } from "./Components/Home";
import { Detail } from "./Components/Detail";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/alert" exact component={Alert} />
            <Route path="/hotstocks" component={HotStocks} />
            <Route path="/home/:id" component={Detail} />

          </Switch>
      </div>
    </Router>
  );
}


export default App;
