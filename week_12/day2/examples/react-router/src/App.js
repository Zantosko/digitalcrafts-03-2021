import './App.css';
import AboutMe from './components/AboutMe';
import Blog from './components/Blog';
import Home from './components/Home';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <AboutMe />
        <Blog />
        <Home />
      </Router>
    </div>
  );
}

export default App;
