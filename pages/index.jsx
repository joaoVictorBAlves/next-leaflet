import Footer from "../components/Footer";
import Map from "../components/Map";;
import Style from "../styles/Home.module.css"

const Home = () => {
  return (
    <div className={Style.Container}>
      <h2>Mapa mundi</h2>
      <Map zoom={1} lat={-5.2} lon={-39} geojsons={[]} />
    </div>
  );
}

export default Home;