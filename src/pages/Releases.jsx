// CSS
import "./css/Releases.css";
// Data
import releases from "../data/releases.json";
import { metadata } from "../data/metadata";
// Components
import Release from "../components/Release";
// JS Operations
const reverse = releases.slice().reverse();

export default function Releases() {
  return (
    <>
      <title>{metadata.releases.title}</title>
      <meta name="description" content={metadata.releases.description} />
      <main className="releases-page">
        <h1>Set Releases</h1>

        <div id="set-releases">
          {reverse.map((el, i) => (
            <Release {...el} key={i} />
          ))}
        </div>
      </main>
    </>
  );
}
