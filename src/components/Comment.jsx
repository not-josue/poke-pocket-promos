// CSS
import "./css/Comment.css";

export default function Comment({ name, text, timestamp }) {
  // Formats the date
  const FormatDate = (data) => {
    const date = new Date(data);
    const parse = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", parse);
  };

  return (
    <div className="user-comment">
      <p className="user-comment-name">
        <b>{name}</b>
        {timestamp && <small>{FormatDate(timestamp)}</small>}
      </p>
      <p className="user-comment-text">{text}</p>
    </div>
  );
}
