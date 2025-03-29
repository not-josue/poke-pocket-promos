import "./css/Global.css";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

export default function BaseLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
