// Axios
import axios from "axios";
// CSS
import "./css/Releases.css";
// Data
// import releases from "../data/releases.json";
import { metadata } from "../data/metadata";
// Components
import Release from "../components/Release";
// React
import { useState, useEffect } from "react";
// JS Operations
// const reverse = releases.slice().reverse();

export default function Releases() {
  const [releases, SetReleases] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://poke-pocket-promos-backend.onrender.com/releases"
        );

        const data = await response.data;

        SetReleases(data.reverse());
      } catch (e) {
        console.error("Error fetching promo cards", e);
      }
    })();
  }, []);

  return (
    <>
      <title>{metadata.releases.title}</title>
      <meta name="description" content={metadata.releases.description} />
      <main className="releases-page">
        <h1>Set Releases</h1>

        <div id="set-releases">
          {releases.map((el, i) => (
            <Release {...el} key={i} />
          ))}
        </div>
      </main>
    </>
  );
}
