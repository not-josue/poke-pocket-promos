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

// Pokemon JSON
const testPokemon = "http://localhost:8000/pokemon";
const urlPokemon = "https://poke-pocket-promos-backend.onrender.com/pokemon";

// Supporters JSON
const testSupporters = "http://localhost:8000/supporters";
const urlSupporters =
  "https://poke-pocket-promos-backend.onrender.com/supporters";

// Items JSON
const testItems = "http://localhost:8000/items";
const urlItems = "https://poke-pocket-promos-backend.onrender.com/items";

const testPost = "http://localhost:8000/comments";
const backendPost = "https://poke-pocket-promos-backend.onrender.com/comments";

export default function Promo() {
  // Cards
  const [allCards, SetCards] = useState([]);
  const [isLoading, SetLoading] = useState(true);
  // Comments
  const [comments, SetComments] = useState([]);
  // Comment Form
  const [name, SetName] = useState("");
  const [text, SetText] = useState("");
  // Edit Form
  // Add with your other state declarations
  const [editingComment, SetEditingComment] = useState(null);
  const [editName, SetEditName] = useState("");
  const [editText, SetEditText] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const [pokeResponse, supsResponse, itemsResponse] = await Promise.all([
          axios.get(urlPokemon),
          axios.get(urlSupporters),
          axios.get(urlItems),
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

  // Test Query Post `${testPost}?cardid=${cardId}`
  // Actual Query Post `${backendPost}?cardid=${cardId}`
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${backendPost}?cardid=${cardId}`);
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
      await axios.post(backendPost, {
        name: cleanName,
        text: cleanText,
        cardid: cardId,
      });

      SetName("");
      SetText("");

      // Get Comments Again
      const res = await axios.get(`${backendPost}?cardid=${cardId}`);
      SetComments(res.data);
    } catch (e) {
      console.error("Error posting comment...", e);
    }
  };

  const ShowEditModal = (comment) => {
    SetEditingComment(comment);
    SetEditName(comment.name);
    SetEditText(comment.text);
    document.getElementById("edit-modal")?.showModal();
  };

  // Edit Submission
  const HandleEditSubmit = async (e) => {
    e.preventDefault();

    if (!editingComment) return;

    // Clean Input
    const cleanName = DOMPurify.sanitize(editName.trim());
    const cleanText = DOMPurify.sanitize(editText.trim());

    // console.log(cleanName);
    // console.log(cleanText);

    // Note the different structure of the PUT request from the POST request
    try {
      await axios.put(`${backendPost}/${editingComment._id}`, {
        name: cleanName,
        text: cleanText,
      });

      SetEditName("");
      SetEditText("");
      SetEditingComment(null);
      document.getElementById("edit-modal")?.close();

      // Get Comments Again
      const res = await axios.get(`${backendPost}?cardid=${cardId}`);
      SetComments(res.data);
    } catch (e) {
      console.error("Error updating comment...", e);
    }
  };

  // Delete Comment
  const HandleDelete = async (commentId) => {
    try {
      await axios.delete(`${backendPost}/${commentId}`);

      // Get Comments Again
      const res = await axios.get(`${backendPost}?cardid=${cardId}`);
      SetComments(res.data);
    } catch (e) {
      console.error("Error deleting comment:", e);
    }
  };

  return (
    <>
      <main className="promo-page">
        {isLoading ? (
          <PromoSkeleton />
        ) : card.type === "Pokemon" ? (
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
            <Comment
              editOnclick={() => ShowEditModal(el)}
              deleteOnclick={() => HandleDelete(el._id)}
              key={`comment_${cardId}_${i + 1}`}
              {...el}
            />
          ))}
        </section>
      </main>
      <dialog id="edit-modal">
        <form method="dialog">
          <button className="close-modal" aria-label="close modal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 384 512"
            >
              {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>
        </form>
        <h2>Edit Comment</h2>
        <Form id={"edit-comment-form"} onSubmit={HandleEditSubmit}>
          <div>
            <label htmlFor="edit-name">Name</label>
            <input
              type="text"
              id="edit-name"
              name="edit-name"
              required
              min={2}
              max={20}
              value={editName}
              onChange={(e) => SetEditName(e.target.value)}
            />
            <textarea
              name="edit-text"
              id="edit-text"
              placeholder="This is my favorite card..."
              required
              minLength={5}
              maxLength={200}
              value={editText}
              onChange={(e) => SetEditText(e.target.value)}
            ></textarea>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </dialog>
    </>
  );
}
