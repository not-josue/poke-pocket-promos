import "./css/PromoSkeleton.css";

export default function PromoSkeleton() {
  return (
    <main className="promo-page">
      <img id="skeleton-img" src="" alt="" />
      <article id="skeleton-article">
        {Array.from({ length: 6 }).map((_el) => (
          <div className="skeleton-text">
            <p></p>
          </div>
        ))}
      </article>
    </main>
  );
}
