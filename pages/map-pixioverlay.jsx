import Map from "../components/MapPixiOverlay";
import Style from "../styles/Home.module.css";
import data from "../data/ceara2.json"

const MapTouch = () => {
  return (
    <div className={Style.Container}>
      <Map data={data} />
    </div>
  );
}

export default MapTouch;