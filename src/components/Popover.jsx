// CSS
import "./css/Popover.css";
// Components
import EditorWrapper from "./EditorWrapper";
// React
import { useState } from "react";

// JS
const emailEditor = {
  title: "Email",
  "view-id": "view-email",
  "view-aria-label": "view profile email",
  "edit-id": "edit-email",
  "edit-aria-label": "edit profile email",
  "input-type": "email",
};

const passEditor = {
  title: "Password",
  "view-id": "view-password",
  "view-aria-label": "view profile password",
  "edit-id": "edit-password",
  "edit-aria-label": "edit profile password",
  "input-type": "password",
};

const pokeEditor = {
  title: "Pokémon",
  "view-id": "view-pokemon",
  "view-aria-label": "view profile pokemon",
  "edit-id": "edit-pokemon",
  "edit-aria-label": "edit profile pokemon",
  "input-type": "text",
};

export default function Popover() {
  // Toggles Aria-Expanded to show mobile nav
  const [isExpanded, SetAria] = useState(false);
  const ToggleAria = () => {
    SetAria(!isExpanded);
  };
  return (
    <aside>
      <button
        onClick={ToggleAria}
        aria-expanded={isExpanded ? true : false}
        aria-label="open account settings"
      >
        Account
      </button>

      <div id="popover">
        {/* <!-- Email Editor --> */}
        <EditorWrapper {...emailEditor} />
        {/* <!-- Password Editor --> */}
        <EditorWrapper {...passEditor} />
        {/* <!-- Pokemon Editor --> */}
        <EditorWrapper {...pokeEditor} />
      </div>
    </aside>
  );
}
