import Map from "../components/Map";;
import Style from "../styles/Home.module.css"
import SearchForm from "../components/SearchForm"

const Home = () => {
  return (
    <div className={Style.Container}>
      <h2>Pesquise no mapa</h2>
      <SearchForm />
      <Map zoom={1} lat={-5.2} lon={-39} geojsons={[]} />
    </div>
  );
}

export default Home;