import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import AboutMe from "./COMPONENTS/AboutMe/AboutMe";
import Contact from "./COMPONENTS/Contact/Contact";
import Header from "./COMPONENTS/Header/Header";
import Home from "./COMPONENTS/Home/Home";
// import Navbar from "./COMPONENTS/Navbar/Navbar";
import Projects from "./COMPONENTS/Projects/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="Joydip">
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
           <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
