// CSS
import "./css/Form.css";

export default function Form({ action, children, className, id, method }) {
  return (
    <form
      action={action || ""}
      method={method || ""}
      id={id || ""}
      className={className || ""}
    >
      {children}
    </form>
  );
}
