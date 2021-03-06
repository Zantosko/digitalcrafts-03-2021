import AboutContainer from "./components/AboutContainer";
import AboutMe from "./components/AboutMe";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <h1>App.js</h1>
      <AboutMe />
      <Nav />
      <AboutContainer />
      <Sidebar />
    </div>
  );
}

export default App;

//? React manages data with state

//* STATE
