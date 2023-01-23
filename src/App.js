import './App.css';
import Header from "./header";
import Footer from "./footer";
import Jumbotron from './jumbotron';
import Home from './pages/home';
import About from './pages/about';
import Resources from './pages/resources';
import Contact from './pages/contact';
import Message404 from './pages/404';
import Post from './pages/post';
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
            <Route exact path="/post">
              <Post/>
            </Route>
            <Route exact path="/post/:id" children={(props) => <Post {...props}/>}>
              <Post/>
            </Route>
            <Route exact path="/404">
              <Message404/>
            </Route>
          </Switch>
        
      <Footer/>
      </Router>
    </div>

  );
}

export default App;
