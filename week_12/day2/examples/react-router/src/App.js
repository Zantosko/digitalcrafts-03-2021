import './App.css';
import AboutMe from './components/AboutMe';
import Blog from './components/Blog';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/blog">Blog</Link>
          </nav>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/aboutme">
            <AboutMe />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="*">
            <h1>404 Page Does Not Exist!</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
