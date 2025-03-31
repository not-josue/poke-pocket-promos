// CSS
import "./css/MiniGallery.css";

export default function MiniGallery({ title, children, icon }) {
  return (
    <div className="mini-gallery">
      <header>
        <h2>{title}</h2>
        {icon}
      </header>
      <div>{children}</div>
    </div>
  );
}
