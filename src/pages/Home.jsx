// CSS
import "./css/Home.css";
// Data
import { metadata } from "../data/metadata";

export default function Home() {
  return (
    <>
      <title>{metadata.home.title}</title>
      <meta name="description" content={metadata.home.description} />
      <main className="home-page">
        <div role="heading">
          <h1>Pocket Promos Database</h1>
          <p>A database for all promo cards in Pokémon TCG Pocket</p>
        </div>
      </main>
    </>
  );
}
