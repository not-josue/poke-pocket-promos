// CSS
import "./css/Form.css";

export default function Form({
  action,
  children,
  className,
  id,
  method,
  onSubmit,
}) {
  return (
    <form
      onSubmit={onSubmit || ""}
      action={action || ""}
      method={method || ""}
      id={id || ""}
      className={className || ""}
    >
      {children}
    </form>
  );
}
