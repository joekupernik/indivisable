import './App.css';
import Header from "./header";
import Footer from "./footer";
import Jumbotron from './jumbotron';
import Home from './home';
import About from './about';
import Resources from './resources';
import Contact from './contact';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";




function App() {


  return (
    <div className="App">
      <Router>

      <Header/>
      <Jumbotron/>
        
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/resources">
              <Resources/>
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
          </Switch>
        
      <Footer/>
      </Router>
    </div>

  );
}

export default App;
