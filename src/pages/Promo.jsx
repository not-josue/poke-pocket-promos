// CSS
import "./css/Promo.css";
// Components
import RenderAttack from "../components/RenderAttack";
// Data
import items from "../data/items.json";
import pokemon from "../data/pokemon.json";
import supporters from "../data/supporters.json";
// React
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// JS
const allCards = [...items, ...pokemon, ...supporters].sort(
  (a, b) => a.id - b.id
);

export default function Promo() {
  const cardId = Number(useParams().cardId);
  const card = allCards.find((el) => el.id === cardId);

  if (card.type === "Pokemon")
    return (
      <>
        <title>{`Poké Pocket Promos - Promo #${card.id}`}</title>
        <meta
          name="description"
          content={`View the promo card #${card.id} from Pokémon TCG Pocket.`}
        />
        <main className="promo-page">
          <img
            src={process.env.PUBLIC_URL + card.image}
            alt={`Promo card #${card.id} in Pokémon TCG Pocket`}
          />

          <div>
            <article>
              <header>
                <div>
                  <h2 id="card-name">{card.name}</h2>
                  <p>
                    Pokémon | <span id="card-stage">{card.stats.stage}</span>
                  </p>
                </div>
                <span>
                  <b id="card-hp">
                    <small>HP</small> {card.stats.hp}
                  </b>
                  <img
                    id="card-type-energy"
                    src={
                      process.env.PUBLIC_URL +
                      `/images/energies/${card.stats.type}_energy.png`
                    }
                    alt=""
                    height="24"
                    width="24"
                  />
                </span>
              </header>

              <hr />

              <section className="poke-attack">
                <RenderAttack {...card} />
              </section>

              <hr />

              <section className="weakness">
                <div id="weakness-div">
                  <h3>Weakness</h3>
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `/images/energies/${card.weakness}_energy.png`
                      }
                      alt=""
                      height="24"
                      width="24"
                    />
                    <span>+20</span>
                  </div>
                </div>
                <div id="retreat-div">
                  <h3>Retreat</h3>
                  {card.retreat && (
                    <div>
                      {Array.from({ length: card.retreat }).map((_el, i) => (
                        <img
                          key={i}
                          src={
                            process.env.PUBLIC_URL +
                            `/images/energies/normal_energy.png`
                          }
                          alt=""
                          height={24}
                          width={24}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </section>

              <hr />

              <section className="pokedex">
                <p>
                  <strong>Promo #: </strong>{" "}
                  <span id="collection-number">{card.id}</span>
                </p>
                <p>
                  <strong>Set: </strong>
                  <span id="card-set">{card.set}</span>
                </p>
                <p>
                  <i id="card-description">{card.description}</i>
                </p>
                <p>
                  Illustrated by <span id="illustrator">{card.artist}</span>
                </p>
              </section>
            </article>

            <Link to="/cards">
              Back To Cards
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                  viewBox="0 0 512 512"
                >
                  {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                  <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z" />
                </svg>
              </span>
            </Link>
          </div>
        </main>
      </>
    );
  else
    return (
      <>
        <title>{`Poké Pocket Promos - Promo #${card.id}`}</title>
        <meta
          name="description"
          content={`View the promo card #${card.id} from Pokémon TCG Pocket.`}
        />
        <main className="promo-page">
          <img
            src={process.env.PUBLIC_URL + card.image}
            alt={`Promo card #${card.id} in Pokémon TCG Pocket`}
          />

          <div>
            <article>
              <header>
                <div>
                  <h2 id="card-name">{card.name}</h2>
                  <p>
                    Trainer | <span id="card-stage">{card.type}</span>
                  </p>
                </div>
              </header>

              <hr />

              <section className="item-action">{card.action}</section>

              <hr />

              <section className="item-description">{card.description}</section>

              <hr />

              <section className="pokedex">
                <p>
                  <strong>Promo #: </strong>{" "}
                  <span id="collection-number">{card.id}</span>
                </p>
                <p>
                  <strong>Set: </strong>
                  <span id="card-set">{card.set}</span>
                </p>
                <p>
                  Illustrated by <span id="illustrator">{card.artist}</span>
                </p>
              </section>
            </article>
            <Link to="/cards">
              Back To Cards
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                  viewBox="0 0 512 512"
                >
                  {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                  <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z" />
                </svg>
              </span>
            </Link>
          </div>
        </main>
      </>
    );
}
