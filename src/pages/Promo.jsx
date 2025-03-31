// CSS
import "./css/Promo.css";
// Components
import PokemonCard from "../components/PokemonCard";
import TrainerCard from "../components/TrainerCard";

// Data
import items from "../data/items.json";
import pokemon from "../data/pokemon.json";
import supporters from "../data/supporters.json";
// React
import { useParams } from "react-router-dom";

// JS
const allCards = [...items, ...pokemon, ...supporters].sort(
  (a, b) => a.id - b.id
);

export default function Promo() {
  const cardId = Number(useParams().cardId);
  const card = allCards.find((el) => el.id === cardId);

  if (card.type === "Pokemon") return <PokemonCard {...card} />;
  else return <TrainerCard {...card} />;
}
