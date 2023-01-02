import { useState } from "react";
import Map from "../components/MapBairros";
import SearchForm from "../components/SearchForm"
import Style from "../styles/Home.module.css";

const MapBairros = () => {
  return (
    <div className={Style.Container}>
      <Map />
    </div>
  );
}

export default MapBairros;