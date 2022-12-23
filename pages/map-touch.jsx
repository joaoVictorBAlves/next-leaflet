import { useState } from "react";
import Map from "../components/MapTouch";
import SearchForm from "../components/SearchForm"
import Style from "../styles/Home.module.css";

const MapTouch = () => {
  return (
    <div className={Style.Container}>
      <Map />
    </div>
  );
}

export default MapTouch;