// React
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Layout
import BaseLayout from "./layouts/BaseLayout";
// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cards from "./pages/Cards";
import Releases from "./pages/Releases";
import Login from "./pages/Login";
import Reset from "./pages/Reset";
import Account from "./pages/Account";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="cards" element={<Cards />} />
          <Route path="contact" element={<Contact />} />
          <Route path="releases" element={<Releases />} />
          <Route path="login" element={<Login />} />
          <Route path="reset" element={<Reset />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
