// Imports
import logo from "./logo.svg";
import "./css/Home.css";
import { metadata } from "../data/metadata";

export default function Home() {
  return (
    <div className="App">
      <title>{metadata.home.title}</title>
      <meta name="description" content={metadata.home.description} />
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
