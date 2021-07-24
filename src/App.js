import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import AboutMe from "./COMPONENTS/AboutMe/AboutMe";
import Home from "./COMPONENTS/Home/Home";
import Navbar from "./COMPONENTS/Navbar/Navbar";

function App() {
  return (
    <div className="Joydip">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component = {Home}></Route>
          <Route path="/aboutMe" component = {AboutMe}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
