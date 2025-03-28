// Imports
import logo from "./logo.svg";
import "./css/Home.css";

// Data
const data = {
  title: "Poke Pocket Promos",
};

export default function Home() {
  return (
    <div className="App">
      <title>{data.title}</title>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
