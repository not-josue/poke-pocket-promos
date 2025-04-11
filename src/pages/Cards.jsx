// Axios
import axios from "axios";
// CSS
import "./css/Cards.css";
// Components
import GalleryCard from "../components/GalleryCard";
import GalleryCardSkeleton from "../components/GalleryCardSkeleton";
// React
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
  const [isLoading, SetIsLoading] = useState(true);

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
        SetIsLoading(false);
      } catch (e) {
        console.error("Error fetching promo cards", e);
        SetIsLoading(false);
      }
    })();
  }, []);

  // Handles sorting after form submit
  const [sortedCards, SetSortedCards] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const formValues = {
      type: formData.get("card-type"),
      order: formData.get("card-order"),
      set: formData.get("card-set").replace("-", " "),
    };

    // Special Case for Space-Time Smackdown
    if (formValues.set === "space time")
      formValues.set = "space-time smackdown";

    let sort = [...allCards];

    if (formValues.type !== "all") {
      sort = sort.filter((el) => el.type.toLowerCase() === formValues.type);
    }

    if (formValues.order !== "ascending") {
      sort.sort((a, b) => b.id - a.id);
    }

    if (formValues.set !== "all") {
      sort = sort.filter((el) => el.set.toLowerCase() === formValues.set);
    }

    SetSortedCards(sort);
  };

  // Disables options to avoid "No Results Found"
  const [selectedType, SetSelectedType] = useState("");
  const ListenForType = (e) => {
    SetSelectedType(e.target.value);
  };

  return (
    <>
      <main className="cards-page">
        <h1>Promo Cards</h1>

        {/* <!-- Sort --> */}
        <form id="promo-sorter" onSubmit={formSubmit}>
          <p>
            <strong>Sort By:</strong>
          </p>
          {/* <!-- Type Selector --> */}
          <label className="visually-hidden" htmlFor="card-type">
            Type of Card
          </label>
          <select
            name="card-type"
            id="card-type"
            required
            onChange={ListenForType}
          >
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
            <option
              value="mythical-island"
              disabled={selectedType === "supporter"}
            >
              Mythical Island
            </option>
            <option
              value="space-time"
              disabled={selectedType === "supporter" || selectedType === "item"}
            >
              Space-Time
            </option>
            <option
              value="triumphant-light"
              disabled={selectedType === "supporter" || selectedType === "item"}
            >
              Triumphant Light
            </option>
            <option
              value="shining-revelry"
              disabled={selectedType === "supporter" || selectedType === "item"}
            >
              Shining Revelry
            </option>
          </select>

          <button type="submit">Sort</button>
        </form>

        {/* <!-- Gallery --> */}
        <div id="gallery">
          {isLoading
            ? // For Skeletons
              Array.from({ length: 59 }).map((_el, i) => (
                <GalleryCardSkeleton key={`gallery-skeleton${i + 1}`} />
              ))
            : // For Images
              (sortedCards.length > 0 ? sortedCards : allCards).map((el) => (
                <GalleryCard {...el} key={el.id} />
              ))}
        </div>
      </main>
    </>
  );
}
