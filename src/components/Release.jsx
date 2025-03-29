import "./css/Release.css";

export default function Release(props) {
  return (
    <section className="release-card">
      <header>
        <h2>{props.name}</h2>
        <p>
          <i>Release Date: {props.date}</i>
        </p>
        <p>Total Cards: {props.cards}</p>
      </header>
      <iframe
        src={props.url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <p>{props.description}</p>
      <hr />
    </section>
  );
}
