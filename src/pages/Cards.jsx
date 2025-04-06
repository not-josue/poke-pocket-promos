// Axios
import axios from "axios";
// CSS
import "./css/Cards.css";
// Components
import GalleryCard from "../components/GalleryCard";
import { useEffect, useState } from "react";
// Data
// import items from "../data/items.json";
// import pokemon from "../data/pokemon.json";
// import supporters from "../data/supporters.json";

// // JS
// const allCards = [...items, ...pokemon, ...supporters].sort(
//   (a, b) => a.id - b.id
// );

export default function Cards() {
  // Renders gallery
  const [allCards, SetCards] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const [pokeResponse, supsResponse, itemsResponse] = await Promise.all([
          axios.get("https://poke-pocket-promos-backend.onrender.com/pokemon"),
          axios.get(
            "https://poke-pocket-promos-backend.onrender.com/supporters"
          ),
          axios.get("https://poke-pocket-promos-backend.onrender.com/items"),
        ]);

        const data = [
          ...pokeResponse.data,
          ...supsResponse.data,
          ...itemsResponse.data,
        ];

        const sort = data.sort((a, b) => a.id - b.id);

        SetCards(sort);
      } catch (e) {
        console.error("Error fetching promo cards", e);
      }
    })();
  }, []);

  return (
    <>
      <main className="cards-page">
        <h1>Promo Cards</h1>

        {/* <!-- Sort --> */}
        <form id="promo-sorter">
          <p>
            <strong>Sort By:</strong>
          </p>
          {/* <!-- Type Selector --> */}
          <label className="visually-hidden" htmlFor="card-type">
            Type of Card
          </label>
          <select name="card-type" id="card-type" required>
            <option value="">Type</option>
            <option value="all">All</option>
            <option value="pokemon">Pokémon</option>
            <option value="supporter">Supporter</option>
            <option value="item">Item</option>
          </select>
          {/* <!-- Order Selector --> */}
          <label className="visually-hidden" htmlFor="card-order">
            Order Preference
          </label>
          <select name="card-order" id="card-order" required>
            <option value="">Collection #</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
          {/* <!-- Set Selector --> */}
          <label className="visually-hidden" htmlFor="card-set">
            Promo Set
          </label>
          <select name="card-set" id="card-set" required>
            <option value="">Set</option>
            <option value="all">All</option>
            <option value="genetic-apex">Genetic Apex</option>
            <option value="mythical-island">Mythical Island</option>
            <option value="space-time">Space-Time</option>
            <option value="triumphant-light">Triumphant Light</option>
            <option value="shining-revelry">Shining Revelry</option>
          </select>

          <button type="submit">Sort</button>
        </form>

        {/* <!-- Gallery --> */}

        <div id="gallery">
          {allCards.map((el) => (
            <GalleryCard {...el} key={el.id} />
          ))}
        </div>
      </main>
    </>
  );
}
