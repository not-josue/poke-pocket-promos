// Axios
import axios from "axios";
// CSS
import "./css/Promo.css";
// Components
import PokemonCard from "../components/PokemonCard";
import TrainerCard from "../components/TrainerCard";
import PromoSkeleton from "../components/PromoSkeleton";
import Form from "../components/Form";
import Comment from "../components/Comment";

// DOMPurify
import DOMPurify from "dompurify";

// Data
// import items from "../data/items.json";
// import pokemon from "../data/pokemon.json";
// import supporters from "../data/supporters.json";
// React
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// const testComments = [
//   {
//     name: "Satoshi",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dicta?",
//   },
//   {
//     name: "Misy",
//     text: "Starmie is the best Pokemon I have ever had! It won me so many batttles!",
//   },
//   {
//     name: "Brock",
//     text: "I love Nurse Joy so much! I wish we could get married!",
//   },
// ];

// JS
// const allCards = [...items, ...pokemon, ...supporters].sort(
//   (a, b) => a.id - b.id
// );

export default function Promo() {
  // Cards
  const [allCards, SetCards] = useState([]);
  const [isLoading, SetLoading] = useState(true);
  // Comments
  const [comments, SetComments] = useState([]);
  // Comment Form
  const [name, SetName] = useState("");
  const [text, SetText] = useState("");

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

  // Comments
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `https://poke-pocket-promos-backend.onrender.com/comments?cardid=${cardId}`
        );
        SetComments(res.data);
      } catch (e) {
        console.error("Error fetching comments", e);
      }
    })();
  }, [cardId]);

  // Form Submission
  const HandleSubmit = async (e) => {
    e.preventDefault();

    // Clean Input
    const cleanName = DOMPurify.sanitize(name.trim());
    const cleanText = DOMPurify.sanitize(text.trim());

    // console.log(cleanName);
    // console.log(cleanText);

    try {
      await axios.post(
        "https://poke-pocket-promos-backend.onrender.com/comments",
        {
          name: cleanName,
          text: cleanText,
          cardid: cardId,
        }
      );

      SetName("");
      SetText("");

      // Get Comments Again
      const res = await axios.get(
        `https://poke-pocket-promos-backend.onrender.com/comments?cardid=${cardId}`
      );
      SetComments(res.data);
    } catch (e) {
      console.error("Error posting comment...", e);
    }
  };

  // Skeleton Loader
  if (isLoading) return <PromoSkeleton />;

  return (
    <main className="promo-page">
      {card.type === "Pokemon" ? (
        <PokemonCard {...card} />
      ) : (
        <TrainerCard {...card} />
      )}

      {/* Comments */}
      <section className="comment-form">
        <h2>Post a Comment</h2>

        <Form onSubmit={HandleSubmit}>
          <div>
            <label htmlFor="comment-name">Name</label>
            <input
              type="text"
              id="comment-name"
              name="comment-name"
              required
              min={2}
              max={20}
              value={name}
              onChange={(e) => SetName(e.target.value)}
            />
            <textarea
              name="comment-text"
              id="comment-text"
              placeholder="This is my favorite card..."
              required
              minLength={5}
              maxLength={200}
              value={text}
              onChange={(e) => SetText(e.target.value)}
            ></textarea>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </section>

      <section className="comment-section">
        <h2>Comments</h2>
        {/* {testComments.map((el, i) => (
          <Comment key={`comment${i + 1}`} {...el} />
        ))} */}
        {comments.length === 0 && <p>No comments yet!</p>}
        {comments.map((el, i) => (
          <Comment key={`comment_${cardId}_${i + 1}`} {...el} />
        ))}
      </section>
    </main>
  );
}
