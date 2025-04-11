import "./css/PromoSkeleton.css";

export default function PromoSkeleton() {
  return (
    <>
      <div id="skeleton-img" />
      <article id="skeleton-article">
        {Array.from({ length: 6 }).map((_el, i) => (
          <div key={`skeleton-line${i + 1}`} className="skeleton-text">
            <p></p>
          </div>
        ))}
      </article>
    </>
  );
}
