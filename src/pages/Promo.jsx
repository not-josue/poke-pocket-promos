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
          </div>
        </main>
      </>
    );
}
