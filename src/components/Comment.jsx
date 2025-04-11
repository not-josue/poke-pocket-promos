// CSS
import "./css/Comment.css";

export default function Comment({ name, text }) {
  return (
    <div className="user-comment">
      <p className="user-comment-name">
        <b>{name}</b>
      </p>
      <p className="user-comment-text">{text}</p>
    </div>
  );
}
