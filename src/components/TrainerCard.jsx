export default function TrainerCard(card) {
  return (
    <>
      <title>{`Poké Pocket Promos - Promo #${card.id}`}</title>
      <meta
        name="description"
        content={`View the promo card #${card.id} from Pokémon TCG Pocket.`}
      />
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
    </>
  );
}
