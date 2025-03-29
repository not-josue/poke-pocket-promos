// CSS
import "./css/Form.css";

export default function Form({ action, id, children, method }) {
  return (
    <form action={action || ""} method={method || ""} id={id || ""}>
      {children}
    </form>
  );
}
