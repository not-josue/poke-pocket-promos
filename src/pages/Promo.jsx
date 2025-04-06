// Axios
import axios from "axios";
// CSS
import "./css/Promo.css";
// Components
import PokemonCard from "../components/PokemonCard";
import TrainerCard from "../components/TrainerCard";

// Data
// import items from "../data/items.json";
// import pokemon from "../data/pokemon.json";
// import supporters from "../data/supporters.json";
// React
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// JS
// const allCards = [...items, ...pokemon, ...supporters].sort(
//   (a, b) => a.id - b.id
// );

export default function Promo() {
  const [allCards, SetCards] = useState([]);
  const [isLoading, SetLoading] = useState(true);

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
      } finally {
        SetLoading(false);
      }
    })();
  }, []);

  const cardId = Number(useParams().cardId);
  const card = allCards.find((el) => el.id === cardId);

  // TODO Skeleton Loader
  if (isLoading) return <div>Loading...</div>;

  if (card.type === "Pokemon") return <PokemonCard {...card} />;
  else return <TrainerCard {...card} />;
}
