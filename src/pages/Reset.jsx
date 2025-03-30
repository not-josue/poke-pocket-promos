// CSS
import "./css/Reset.css";
// Components
import Form from "../components/Form";
// Data
import { metadata } from "../data/metadata";

export default function Reset() {
  return (
    <>
      <title>{metadata.reset.title}</title>
      <meta name="description" content={metadata.reset.description} />
      <main className="reset-page">
        <h1>Reset Password</h1>
        <Form id="reset-pass-form">
          <div>
            <label htmlFor="reset-pass-email">Email</label>
            <input
              type="email"
              name="reset-pass-email"
              id="reset-pass-email"
              placeholder="cynthia@sinnoh.com"
              required
              autoFocus
            />

            <label htmlFor="reset-pass-fave">Favorite Pokémon</label>
            <input
              type="text"
              name="reset-pass-fave"
              id="reset-pass-fave"
              required
            />

            <button type="submit">Reset</button>
          </div>
        </Form>
      </main>
    </>
  );
}
