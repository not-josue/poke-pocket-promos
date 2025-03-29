// CSS
import "./css/Global.css";
// Components
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
// React
import { Outlet } from "react-router-dom";

export default function BaseLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}
