// CSS
import "./css/Account.css";
// Components
import MiniGallery from "../components/MiniGallery";
import Popover from "../components/Popover";
// Data
import { metadata } from "../data/metadata";
// React
import { Link } from "react-router-dom";

export default function Account() {
  return (
    <>
      <title>{metadata.account.title}</title>
      <meta name="description" content={metadata.account.description} />
      <main className="account-page">
        <h1>Your Profile</h1>

        <section id="gallery-wrapper">
          <MiniGallery title={"Favorites"}>
            {[1, 2, 3, 4].map((_el, i) => (
              <Link key={i}>
                <img
                  src="https://placehold.co/100x140"
                  alt="promo card from Pokémon TCG Pocket"
                  width="100"
                  height="140"
                />
              </Link>
            ))}
          </MiniGallery>

          <MiniGallery title={"Wishlist"}>
            {[1, 2, 3, 4].map((_el, i) => (
              <Link key={i}>
                <img
                  src="https://placehold.co/100x140"
                  alt="promo card from Pokémon TCG Pocket"
                  width="100"
                  height="140"
                />
              </Link>
            ))}
          </MiniGallery>
        </section>
      </main>
      <Popover />
    </>
  );
}
