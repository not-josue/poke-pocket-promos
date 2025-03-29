// CSS
import "./css/Login.css";
// Components
import Form from "../components/Form";
import { Link } from "react-router-dom";
// Data
import { metadata } from "../data/metadata";

export default function Login() {
  return (
    <>
      <title>{metadata.login.title}</title>
      <meta name="description" content={metadata.login.description} />
      <main className="login-page">
        <h1>Sign Up/Sign In</h1>

        <div>
          <button id="sign-in-btn" aria-pressed="true">
            Sign In
          </button>
          <button id="sign-up-btn">Sign Up</button>
        </div>

        <Form id="sign-in-form">
          <div>
            <label htmlFor="sign-in-email">Email</label>
            <input
              type="email"
              name="sign-in-email"
              id="sign-in-email"
              placeholder="cynthia@sinnoh.com"
              required
              autoFocus
            />

            <label htmlFor="sign-in-password">Password</label>
            <input
              type="password"
              name="sign-in-password"
              id="sign-in-password"
              required
            />

            <button type="submit">Submit</button>

            <Link to="/reset">Reset Password</Link>
          </div>
        </Form>

        <Form className="hidden" id="sign-up-form">
          <div>
            <label htmlFor="sign-up-email">Email</label>
            <input
              type="email"
              name="sign-up-email"
              id="sign-up-email"
              placeholder="cynthia@sinnoh.com"
              required
            />

            <label htmlFor="sign-up-password">Password</label>
            <input
              type="password"
              name="sign-up-password"
              id="sign-up-password"
              required
            />

            <label htmlFor="sign-up-pokemon">Favorite Pokémon</label>
            <input
              type="text"
              name="sign-up-pokemon"
              id="sign-up-pokemon"
              required
            />

            <button type="submit">Submit</button>
          </div>
        </Form>
      </main>
    </>
  );
}
