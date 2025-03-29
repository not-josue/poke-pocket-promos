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
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <p>{props.description}</p>
      <hr />
    </section>
  );
}
