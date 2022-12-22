import Map from "../components/MapMundi";
import Style from "../styles/Home.module.css";

const MapGeojson = () => {
  return (
    <div className={Style.Container}>
      <Map/>
    </div>
  );
}

export default MapGeojson;