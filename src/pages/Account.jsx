// CSS
import "./css/Account.css";
// Components
import MiniGallery from "../components/MiniGallery";
import Popover from "../components/Popover";
// Data
import { metadata } from "../data/metadata";
// React
import { Link } from "react-router-dom";

// Icons
const icons = {
  star: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="32"
      width="32"
      viewBox="0 0 576 512"
    >
      {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
    </svg>
  ),
  heart: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="32"
      width="32"
      viewBox="0 0 512 512"
    >
      {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
      <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
    </svg>
  ),
};

export default function Account() {
  return (
    <>
      <title>{metadata.account.title}</title>
      <meta name="description" content={metadata.account.description} />
      <main className="account-page">
        <h1>Your Profile</h1>

        <section id="gallery-wrapper">
          <MiniGallery title={"Favorites"} icon={icons.star}>
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

          <MiniGallery title={"Wishlist"} icon={icons.heart}>
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
