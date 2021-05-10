import './App.css';
import AboutContainer from "./components/AboutContainer";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Nav />
      <AboutContainer />
      <Sidebar />
    </div>
  );
}

export default App;

//? React manages data with state

//* STATE

